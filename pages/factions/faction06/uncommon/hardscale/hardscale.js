const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Embuscade",
          description: `Attaque un ennemi. Possède 25 % de chances de placer un débuff de ${DEBUFFS.SPD} de 15 % pendant 2 tours.`,
          damage: "4.6*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Blessure Choquante",
          description: `Attaque un ennemi. Place un débuff d'${DEBUFFS.STUN} si la cible souffre d'un débuff de ${DEBUFFS.SPD}. Possède 20 % de chances de placer un débuff d'${DEBUFFS.STUN} d'1 tour si la cible n'est pas affligée d'un débuff de ${DEBUFFS.SPD}.`,
          damage: "7*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 050",
        "ATQ": "716",
        "DEF": "1 167",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
