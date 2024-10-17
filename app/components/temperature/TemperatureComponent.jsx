import Image from "next/image";
import Card from "../Card";
import { getTemperatureData } from "@/app/lib/Weather-info";

const TemperatureComponent = async ({ lat, lon }) => {
  const { temp, feels_like } = await getTemperatureData(lat, lon);
  return (
    <>
      <Card>
        <h6 className="feature-name">Current Temperature</h6>
        <div className="feature-main">
          <Image
            className="max-w-20"
            src="/icons/icon_tempareture.png"
            alt="rain icon"
            width={20}
            height={20}
          />
          <h3 className="feature-title">{temp}°C</h3>

          <span className="feature-name">{feels_like} Feels Like 244°C</span>
        </div>
      </Card>
    </>
  );
};

export default TemperatureComponent;
