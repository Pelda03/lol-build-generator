// Description: This file contains the champion map, which is a map of champion names to champion objects.
import { zoeBuild } from "./champs/zoe.js";

const championMap = new Map([
  [zoeBuild.championName.toLowerCase(), zoeBuild],
]);

export default championMap;