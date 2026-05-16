const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.png",
          name: "Lien du Devoir",
          description: `Attaque un ennemi. Possede 50% de chances de placer un buff ${BUFFS.HEALS} de 15% sur cette Championne pendant 1 tour si cette attaque passe en critique.`,
          damage: "4.9*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
        },
        {
          img: "assets/sort2.png",
          name: "Reste dans le Combat",
          description: `Place un buff ${BUFFS.DEF} de 60% sur tous les allies pendant 2 tours. Soigne tous les allies a hauteur de 15% des PV MAX de cette Championne.`,
          cooldown: 4,
          levelInfo: ["Soins +5%", "Soins +5%", "Soins +5%", "Soins +5%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.png",
          name: "Gardienne Exaltee",
          description: `Place un buff ${BUFFS.ALLY_PROTECT} de 50% sur tous les allies sauf cette Championne pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "18 825",
        "ATQ": "936",
        "DEF": "1 112",
        "VIT": "96",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "45",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/res.png",
  description: `Augmente la statistique RES des Allies dans les Cryptes de Faction de 45.`
};
