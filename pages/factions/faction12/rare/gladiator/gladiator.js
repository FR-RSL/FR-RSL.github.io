const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Fente de Hache",
          description: `Attaque 2 fois un ennemi. Possède 30 % de chances de placer un débuff de ${DEBUFFS.ATK} de 50 % de 2 tours si le Compteur de Tours de la cible est plein à exactement 50 % ou plus.

Possède 30 % de chances de placer un débuff de ${DEBUFFS.SPD} de 30 % pendant 2 tours si le Compteur de Tours de la cible est inférieur à 50 %.`,
          damage: "2.1*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Punition Capitale",
          description: `Attaque 2 fois au hasard. Possède 80 % de chances de placer un débuff d'${DEBUFFS.STUN} si le Compteur de Tours de la cible est supérieur ou égal à 75 %.`,
          damage: "3.5*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Torture",
          description: `Attaque tous les ennemis.`,
          damage: "3.5*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 040",
        "ATQ": "1 156",
        "DEF": "936",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
