import { getLocations } from "@/app/api/location/location-utils";
export async function GET() {
  const locationData = getLocations();
  return Response.json(locationData);
}
