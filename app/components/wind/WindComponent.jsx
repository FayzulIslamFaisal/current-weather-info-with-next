import Image from "next/image";
import Card from "../Card";
import { getWindData } from "@/app/lib/Weather-info";

const WindComponent = async ({ lat, lon }) => {
  const { speed, deg } = await getWindData(lat, lon);
  return (
    <>
      <Card>
        <h6 className="feature-name">Wind</h6>
        <div className="feature-main">
          <Image
            className="max-w-20"
            src="/icons/icon_wind.png"
            alt="rain icon"
            width={20}
            height={20}
          />
          <h3 className="feature-title">{speed} Meter/Sec</h3>
          <span className="feature-name">{deg} Degres</span>
        </div>
      </Card>
    </>
  );
};

export default WindComponent;
