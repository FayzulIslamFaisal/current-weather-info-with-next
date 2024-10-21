import Card from "@/app/components/Card";
import WeatherComponent from "@/app/components/weather/WeatherComponent";
import { getResolvedLatLon } from "@/app/lib/Location-info";
import Link from "next/link";

const WeatherPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolve = await getResolvedLatLon(location, latitude, longitude);
  {
    if (resolve?.lat && resolve?.lon) {
      return (
        <div className="text-white">
          <WeatherComponent lat={resolve?.lat} lon={resolve?.lon} />
        </div>
      );
    } else {
      return (
        <Card>
          <div className="text-center">
            <h1 className="mb-5 text-4xl">No Location Info</h1>
            <Link
              className=" border-2 px-4 py-2 bg-gray-800 rounded-lg"
              href={`/`}
            >
              Back To Current Location
            </Link>
          </div>
        </Card>
      );
    }
  }
};

export default WeatherPage;
