const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Foie Infecté",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 15 % de chances de placer un débuff de ${DEBUFFS.POISON} de 2,5 % pendant 2 tours.`,
          damage: "1.8*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Signe de Promptitude",
          description: `Remplit de 15 % le Compteur de Tours de tous les alliés. Place un buff d'${BUFFS.SPD} de 15 % sur tous les alliés pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Destin Retissé",
          description: `Ranime un allié tombé avec 30 % de PV, puis remplit de 30 % son Compteur de Tour.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 165",
        "ATQ": "859",
        "DEF": "958",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors des batailles d'Arène de 15%`,
};
