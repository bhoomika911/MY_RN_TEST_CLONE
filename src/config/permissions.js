import * as Permissions from "expo-permissions";
import { Platform } from "react-native";
// Ask for permission
export default async function getLocationPermission() {
  if (Platform.OS === "android" && Platform.Version >= 23) {
    const { status } = await Permissions.getAsync(Permissions.LOCATION);
    if (status !== "granted") {
      const res = await Permissions.askAsync(Permissions.LOCATION);
      if (res.status !== "granted") {
        return false;
      }
    }
  }
  return true;
}
