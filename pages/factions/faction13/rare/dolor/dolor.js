const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hache d'Exil",
          description: `Attaque un ennemi. Possède 25% de chances de placer un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 1 tour.`,
          damage: "3.46*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Punition Sévère",
          description: `Attaque un ennemi. Possède 40% de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour si la cible n'est affligée d'aucun débuff.`,
          damage: "5.69*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Bénédiction d'Ancêtre",
          description: `Place un buff ${BUFFS.HEALS} de 15% sur tous les alliés pendant 2 tours. Place également un buff ${BUFFS.BLOCK_DEBUFFS} pendant 1 tour sur l'allié ciblé s'il possède moins de 100% de PV.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 845",
        "ATQ": "1 035",
        "DEF": "870",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 15%`,
};
