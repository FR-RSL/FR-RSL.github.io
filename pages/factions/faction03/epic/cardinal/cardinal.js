const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Évaporation",
          description: `Attaque un ennemi. Possède 10% de chances de placer un débuff de ${DEBUFFS.POISON} de 5% pendant 2 tours.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Toucher de Guérison",
          description: `Soigne une cible alliée à hauteur de 30% de ses PV max. Place, pendant 2 tours, un buff d'${BUFFS.DEF} de 60%.`,
          cooldown: 4,
          levelInfo: ["Soins +5%", "Soins +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rédemption",
          description: `Ranime tous les alliés morts, les soigne de 25% de leurs PV max et booste leurs Compteurs de Tour jusqu'au maximum.`,
          cooldown: 7,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 340",
        "ATQ": "1 002",
        "DEF": "1 145",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
