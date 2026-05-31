const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Malédiction du Rêveur",
          description: `Attaque un ennemi. Possède 20 % de chances de placer un débuff ${DEBUFFS.SLEEP} pendant 1 tour.`,
          damage: "3.8*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Visite Menaçante",
          description: `Attaque un ennemi. Possède 50 % de chances de placer un débuff ${DEBUFFS.BLOCK_BUFFS} pendant 1 tour.

Remplit également de 15 % le Compteur de Tour de ce Champion, ainsi que le Compteur de Tour de l'allié qui a le Compteur de Tour le plus élevé.`,
          damage: "6*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rejoindre la Troupe",
          description: `Remplit le Compteur de tour de tous les alliés de 15 % et place un buff ${BUFFS.ATK} de 25 % sur tous les alliés pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 555",
        "ATQ": "1 200",
        "DEF": "991",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors des batailles d'Arène de 30`,
};
