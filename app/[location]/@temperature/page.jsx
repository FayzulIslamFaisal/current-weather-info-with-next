import TemperatureComponent from "@/app/components/temperature/TemperatureComponent";

const TemperaturePage = ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  return (
    <div className="text-white">
      <TemperatureComponent lat={latitude} lon={longitude} />
    </div>
  );
};

export default TemperaturePage;
