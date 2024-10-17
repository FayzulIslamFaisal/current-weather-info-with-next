import Image from "next/image";
import Card from "../Card";
import { getWindData } from "@/app/lib/Weather-info";

const WindComponent = async ({ lat, lon }) => {
  const windData = await getWindData(lat, lon);
  if (!windData) {
    return <p>Wind data is unavailable</p>;
  }

  const { speed, deg } = windData;

  return (
    <Card>
      <h6 className="feature-name">Wind</h6>
      <div className="feature-main">
        <Image
          className="max-w-20"
          src="/icons/icon_wind.png"
          alt="wind icon"
          width={80}
          height={80}
        />
        <h3 className="feature-title">
          {speed ? `${speed} Meter/Sec` : "N/A"}
        </h3>
        <span className="feature-name">{deg ? `${deg} Degrees` : "N/A"}</span>
      </div>
    </Card>
  );
};

export default WindComponent;
