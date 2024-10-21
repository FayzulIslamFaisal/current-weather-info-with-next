"use client";
import { getLocationLatLongList } from "@/app/lib/Location-info";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LocationSwitcher = () => {
  const [showLocationList, setShowLocationList] = useState(false);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const getLocationList = async () => {
      const locationList = await getLocationLatLongList();
      setLocations(locationList);
    };
    getLocationList();
  }, []);

  console.log({ locations });

  return (
    <div>
      <div className="relative">
        <button onClick={() => setShowLocationList(!showLocationList)}>
          <Image
            className="size-9"
            src="/icons/link.svg"
            alt="link icon"
            width={15}
            height={15}
          />
        </button>
        {showLocationList && (
          <div className="absolute bg-gray-600 left-0 top-12 z-[999] w-full min-w-[280px] rounded-md  p-4 shadow max-md:-translate-x-1/2">
            <ul
              role="list"
              className="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer"
            >
              {locations?.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={`/${item.location}?latitude=${item?.latitude}&longitude=${item?.longitude}`}
                    >
                      {item?.location}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationSwitcher;
