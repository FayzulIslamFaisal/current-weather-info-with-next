"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

const LocationDetector = () => {
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const newParams = new URLSearchParams(searchParams.toString());
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        newParams.set("latitude", position.coords.latitude);
        newParams.set("longitude", position.coords.longitude);
        setLoading(false);
        router.push(`/current?${newParams.toString()}`);
      });
    }
  }, [pathname, searchParams, router]);
  return (
    <div className=" text-white flex flex-col items-center justify-center bg-slate-700 h-full">
      {loading && (
        <>
          <Image
            src={`/images/network.gif`}
            width={600}
            height={600}
            alt="hello"
          />
          <h1>Detecting Location....</h1>
        </>
      )}
    </div>
  );
};

export default LocationDetector;
