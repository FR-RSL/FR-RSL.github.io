const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Autorité de Noble",
          description: `Attaque un ennemi. Offre 25 % de chances de placer un débuff de ${DEBUFFS.PRE} de 25 % pendant 2 tours.`,
          damage: "2.6*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Bouclier Royal",
          description: `Place un buff d'${BUFFS.DEF} de 30 % sur tous les alliés pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 535",
        "ATQ": "958",
        "DEF": "826",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
