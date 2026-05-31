const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Coupe le souffle",
          description: `Attaque 2 fois un ennemi. Place un buff ${BUFFS.ATK} de 50 % sur cette Championne pendant 2 tours si cette attaque tue un ennemi.`,
          damage: "2.1*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Mortifier",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % pendant 2 tours.`,
          damage: "4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Épée de perte",
          description: `Attaque un ennemi. Possède 75 % de chances de placer un débuff ${DEBUFFS.BLOCK_BUFFS} et un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 2 tours. Cette attaque passe toujours en critique.`,
          damage: "6.1*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Grand cycle [P]",
          description: `Ranime un allié choisi au hasard avec 50 % de PV chaque fois que cette Championne tue un ennemi.`,
          cooldown: 2,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 515",
        "ATQ": "1 365",
        "DEF": "837",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors des Cryptes de Faction de 30%`,
};
