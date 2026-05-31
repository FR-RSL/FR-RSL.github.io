const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Demi-épée",
          description: `Attaque 1 ennemi. Possède 30 % de chances de placer un débuff de ${DEBUFFS.LEECH} de 2 tours. Ignorera 30 % de la DÉF de la cible.`,
          damage: "4.5*ATQ",
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Mordhau",
          description: `Attaque 1 ennemi. Offre 60 % de chances de placer un débuff d'${DEBUFFS.STUN} pendant 1 tour. Réinitialise les temps de recharge de chacune des Compétences de ce Champion si la cible est tuée.`,
          damage: "6*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Arrêt de Mort",
          description: `Attaque 1 ennemi. Offre 60 % de chances de placer un débuff d'${DEBUFFS.WEAKEN} de 25 % pendant 2 tours. Les dégâts sont augmentés de 75 % si le Champion possède tous ses PV.`,
          damage: "7*ATQ",
          cooldown: 6,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +20%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 660",
        "ATQ": "1 387",
        "DEF": "672",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des Donjons de 32%`,
};
