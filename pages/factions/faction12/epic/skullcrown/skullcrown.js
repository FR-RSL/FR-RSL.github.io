const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Vague d'Âmes",
          description: `Attaque tous les ennemis. Place une frappe supplémentaire si la cible a plus de 50 % de PV.`,
          damage: "1.8*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Toucher Corrupteur",
          description: `Attaque tous les ennemis. Possède 50 % de chances de placer un débuff d'${DEBUFFS.WEAKEN} de 25 % pendant 2 tours.`,
          damage: "4.3*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Résistant [P]",
          description: `Place un buff ${BUFFS.UNKILLABLE} d'1 tour sur ce Champion à chaque fois que ses PV tombent en dessous de 20 %.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: true
        },
        {
          img: "assets/passif1.webp",
          name: "D'outre-tombe [P]",
          description: `Ranime cette Championne avec 30 % de PV. 

[Uniquement disponible lorsque Sinesha se trouve dans la même équipe.]`,
          cooldown: 8,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 535",
        "ATQ": "1 509",
        "DEF": "826",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors des batailles d'Arène de 23%`,
};
