import Image from "next/image";

const LocationSwitcher = () => {
  return (
    <div>
      <div className="relative">
        <button>
          <Image
            className="size-9"
            src="/icons/link.svg"
            alt="link icon"
            width={15}
            height={15}
          />
        </button>
        <div className="absolute bg-gray-600 left-0 top-12 z-[999] w-full min-w-[280px] rounded-md  p-4 shadow max-md:-translate-x-1/2">
          <ul
            role="list"
            className="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer"
          >
            <li>Kolkata</li>
            <li>Dhaka</li>
            <li>London</li>
            <li>Amsterdam</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LocationSwitcher;
