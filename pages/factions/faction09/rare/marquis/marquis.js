const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Brochette",
          description: `Attaque 1 ennemi. Si le coup passe en critique, place un débuff de ${DEBUFFS.SPD} de 15%.`,
          damage: "5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Compétence Infernale",
          description: `Place, pendant 2 tours, un buff de ${BUFFS.COUNTER} et un buff de ${BUFFS.HEALS} de 15% sur ce Champion.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Éclairs Paralysants",
          description: `Attaque tous les ennemis. Possède 35% de chances de placer un débuff de ${DEBUFFS.SLEEP} d'1 tour. Il est impossible de retirer ce débuff.`,
          damage: "5.1*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 845",
        "ATQ": "892",
        "DEF": "1 013",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés Force lors de toutes les Batailles de 18%`,
};
