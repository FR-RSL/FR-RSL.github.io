const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Pilon à Viande",
          description: `Attaque un ennemi. Possède 10% de chances de placer un débuff d'${DEBUFFS.STUN} d'1 tour.`,
          damage: "3.8*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Énorme Corpulence",
          description: `Place, sur tous les alliés, un buff de ${BUFFS.SHIELD} équivalent à 10% des PV MAX de ce Champion pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Bouclier +5%", "Bouclier +5%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 000",
        "ATQ": "683",
        "DEF": "870",
        "VIT": "92",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
