import WeatherComponent from "@/app/components/weather/WeatherComponent";

const WeatherPage = ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  return (
    <div className="text-white">
      <WeatherComponent lat={latitude} lon={longitude} />
    </div>
  );
};

export default WeatherPage;
