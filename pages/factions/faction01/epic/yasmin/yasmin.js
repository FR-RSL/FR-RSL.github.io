const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Fracas Retentissant",
          description: `Attaque un ennemi.`,
          damage: "2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Touche de Vigueur",
          description: `Soigne un allié à hauteur de 40% de ses PV max. Par contre, soigne de 60% si l'allié possède 50% de PV ou moins.`,
          cooldown: 3,
          levelInfo: ["Soins +5%", "Soins +5%", "Soins +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Chant Berçant",
          description: `Possède 50% de chances de retirer tous les buffs sur tous les ennemis. Place ensuite un débuff ${DEBUFFS.SLEEP} d'1 tour sur tous les ennemis ne possédant pas de buff actif.`,
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 680",
        "ATQ": "1 101",
        "DEF": "1 090",
        "VIT": "109",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 20%`,
};
