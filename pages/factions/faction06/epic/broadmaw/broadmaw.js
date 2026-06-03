const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Souffle Glacé",
          description: `Attaque un ennemi. Possède 35% de chances de placer un débuff ${DEBUFFS.GEL} pendant 1 tour.`,
          damage: "ATQ*3.8",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Cadeau",
          description: `Place un buff ${BUFFS.CRATE} de 30% et un buff ${BUFFS.SPD} de 15% sur tous les alliés pendant 2 tours. Remplit également le Compteur de Tour de tous les alliés de 15%.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Ressusciter",
          description: `Ranime 2 alliés morts aléatoires et les soigne de 25% de leurs PV MAX. Place un buff ${BUFFS.BLOCK_DAMAGE} sur les alliés ranimés pendant 1 tour.`,
          cooldown: 6,
          levelInfo: ["Soins +5%", "Soins +10%", "Soins +15%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 660",
        "ATQ": "1 101",
        "DEF": "958",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des Cryptes de Faction de 33%`,
};
