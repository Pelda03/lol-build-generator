import ChampionData from "./championData.js";
import { zoeBuild } from "./champs/zoe.js";
import { asheBuild } from "./champs/ashe.js";

const championMap = new Map([
  [zoeBuild.championName.toLowerCase(), zoeBuild],
  [asheBuild.championName.toLowerCase(), asheBuild],
]);

export default championMap;