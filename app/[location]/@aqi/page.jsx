import AQIComponent from "@/app/components/Aqi/AQIComponent";

const AqiPage = ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  return (
    <div className="text-white">
      <AQIComponent lat={latitude} lon={longitude} />
    </div>
  );
};

export default AqiPage;
