const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lame Vive",
          description: `Attaque 2 fois un ennemi. Augmente de 15% les dégâts infligés si la cible se trouve sous buff ${BUFFS.SHIELD}.`,
          damage: "1.55*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Broyer le Mur",
          description: `Retire tous les buffs ${BUFFS.SHIELD} sur tous les ennemis, puis attaque tous les ennemis. Possède 30% de chances de placer un débuff ${DEBUFFS.DEF} de 60% sur tous les ennemis pendant 2 tours.`,
          damage: "3.8*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Coeur Fortifié",
          description: `Place sur ce Champion un buff ${BUFFS.SHIELD} égal à 20% de ses PV MAX pendant 3 tours. Place également un buff ${BUFFS.DEF} de 60% sur ce Champion pendant 3 tours, puis remplit de 50% son Compteur de Tour.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Défense Résolue [P]",
          description: `Réduit de 15% les dégâts reçus par ce Champion lorsqu'il se trouve sous buff ${BUFFS.SHIELD}.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 845",
        "ATQ": "771",
        "DEF": "1 409",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors des batailles d'Arène de 45`,
};
