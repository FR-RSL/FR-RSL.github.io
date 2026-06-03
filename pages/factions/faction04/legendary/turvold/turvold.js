const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lame Crépitante",
          description: `Attaque 2 fois un ennemi. Possède 55% de chances de placer un débuff d'${DEBUFFS.WEAKEN} de 25% pendant 2 tours.`,
          damage: "3*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Puissance des Ancêtres",
          description: `Place un buff d'${BUFFS.ATK} de 50%, un buff d'${BUFFS.CRATE} de 30% et un buff d'${BUFFS.SPD} de 30% sur ce Champion pendant 2 tours. Accorde un Tour supplémentaire.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Mastodonte",
          description: `Attaque 2 fois un ennemi. Les dégâts augmentent en fonction du nombre de buffs se trouvant sur ce Champion. Réinitialise le temps de recharge de cette compétence si la cible est tuée.`,
          damage: "3*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 505",
        "ATQ": "1 498",
        "DEF": "914",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors des Cryptes de Faction de 42%`,
};
