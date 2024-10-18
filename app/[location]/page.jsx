import LocationInfo from "../components/locationPageComponent/LocationInfo";

const page = ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  return (
    <div className="text-white">
      <LocationInfo lat={latitude} lon={longitude} />
    </div>
  );
};

export default page;
