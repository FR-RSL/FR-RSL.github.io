const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Moisson Sanglante",
          description: `Attaque un ennemi. Possède 30% de chances de réduire d'1 tour le temps de recharge d'une des compétences d'un allié pris au hasard.`,
          damage: "2.8*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Maelström",
          description: `Attaque tous les ennemis. Offre 50% de chances de placer un débuff de ${DEBUFFS.ATK} de 50% pendant 2 tours. Réduit de 20% le Compteur de Tour de chaque cible si elle ne souffre pas d'un débuff de ${DEBUFFS.ATK}.`,
          damage: "3*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Alacrité",
          description: `Place, pendant 2 tours, un buff d'${BUFFS.SPD} de 30% sur tous les alliés, puis augmente de 20% leurs Compteurs de Tour.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 495",
        "ATQ": "1 134",
        "DEF": "936",
        "VIT": "111",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors des Cryptes de Faction de 40`,
};
