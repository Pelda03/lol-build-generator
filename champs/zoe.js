import ChampionData from "../championData.js";

const zoeBuildData = [
  {
    name: "Luden's Echo",
    icon: "https://ddragon.leagueoflegends.com/cdn/11.20.1/img/item/3285.png",
  },
  {
    name: "Sorcerer's Shoes",
    icon: "https://ddragon.leagueoflegends.com/cdn/11.20.1/img/item/3020.png",
  },
  {
    name: "Rabadon's Deathcap",
    icon: "https://ddragon.leagueoflegends.com/cdn/11.20.1/img/item/3089.png",
  },
  {
    name: "Void Staff",
    icon: "https://ddragon.leagueoflegends.com/cdn/11.20.1/img/item/3135.png",
  },
  {
    name: "Morellonomicon",
    icon: "https://ddragon.leagueoflegends.com/cdn/11.20.1/img/item/3165.png",
  },
  {
    name: "Zhonya's Hourglass",
    icon: "https://ddragon.leagueoflegends.com/cdn/11.20.1/img/item/3157.png",
  }
];

export const zoeBuild = new ChampionData("Zoe", zoeBuildData);
