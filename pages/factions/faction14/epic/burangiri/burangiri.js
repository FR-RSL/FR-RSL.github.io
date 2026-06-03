const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Matraque Crâne",
          description: `Attaque un ennemi. Possède 20% de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 1 tour.`,
          damage: "3.1*DEF",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Charge Bakemono",
          description: `Attaque tous les ennemis. Possède 40% de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour.`,
          damage: "3.5*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Cri Effrayant",
          description: `Place un buff ${BUFFS.STRENGTHEN} de 25% sur tous les alliés pendant 2 tours. Place également un buff ${BUFFS.SHIELD} pendant 2 tours sur les alliés ayant moins de 50% de PV. Le buff ${BUFFS.SHIELD} est équivalent à 15% des PV MAX de la cible.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Marchand d'Âmes [P]",
          description: `Soigne ce Champion de 50% de ses PV MAX chaque fois qu'un allié ou un ennemi meurt.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 680",
        "ATQ": "804",
        "DEF": "1 387",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors de toutes les Batailles de 40`,
};
