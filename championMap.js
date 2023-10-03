// Description: This file contains the champion map, which is a map of champion names to champion objects.
import { zoeBuild } from "./champs/zoe.js";
import { aatroxBuild } from "./champs/aatrox.js";
import { ahriBuild } from "./champs/ahri.js";

const championMap = new Map([
  [zoeBuild.championName.toLowerCase(), zoeBuild],
  [aatroxBuild.championName.toLowerCase(), aatroxBuild],
  [ahriBuild.championName.toLowerCase(), ahriBuild],
]);

export default championMap;