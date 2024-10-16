import { getLocationsByName } from "@/app/api/location/location-utils";
export async function GET(request, { params }) {
  const locationData = getLocationsByName(params?.name);
  return Response.json(locationData);
}
