const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Baiser du Soleil",
          description: `Attaque un ennemi. Possède 30 % de chances de placer un débuff ${DEBUFFS.SPD} de 30 % pendant 2 tours. 

Place un buff ${BUFFS.HEALS} de 15 % sur ce Champion pendant 1 tour. Place un buff ${BUFFS.HEALS} de 15 % sur l'allié ayant le moins de PV pendant 1 tour.`,
          damage: "4.1*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Souffrance Radiante",
          description: `Attaque un ennemi. Possède 75 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % et un débuff ${DEBUFFS.BLOCK_BUFFS} pendant 2 tours. Applique un effet de [Propagation de Débuffs], qui prend 2 débuffs aléatoires de la cible pour les placer sur tous les ennemis.`,
          damage: "5.6*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Forme du Désert",
          description: `Place un buff ${BUFFS.DEF} de 60 % et un buff ${BUFFS.SPD} de 30 % sur tous les alliés pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Inviolable [P]",
          description: `Au début de chaque tour, retire un débuff aléatoire à tous les alliés. 

Sinon, retire 2 débuffs aléatoires aux alliés sous buffs ${BUFFS.HEALS}.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 645",
        "ATQ": "859",
        "DEF": "1 277",
        "VIT": "106",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 70`,
};
