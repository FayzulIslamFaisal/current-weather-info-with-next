import WindComponent from "@/app/components/wind/WindComponent";

const WindPage = ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  return (
    <div className="text-white">
      <WindComponent lat={latitude} lon={longitude} />
    </div>
  );
};

export default WindPage;
