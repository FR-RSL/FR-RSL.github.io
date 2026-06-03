const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Souillure",
          description: `Attaque 2 fois au hasard. Possède 75% de chances de placer un débuff ${DEBUFFS.HEX} de 5 tours. Il est impossible de résister à ce débuff. Chaque coup critique réduit d'1 tour le temps de recharge de la compétence Pas de ce Monde.`,
          damage: "2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fauche-sort",
          description: `Attaque tous les ennemis. Les dégâts augmentent de 50% pour chaque débuff ${DEBUFFS.HEX} dont est affligée l'équipe ennemie. S'additionne jusqu'à 300%.`,
          damage: "3.5*ATQ",
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Pas de ce Monde",
          description: `Place un buff ${BUFFS.PERFECT_VEIL} de 3 tours sur cette Championne. Accorde un Tour Supplémentaire.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Ange Cruel [P]",
          description: `Possède 50% de chances de placer un débuff ${DEBUFFS.TRUE_FEAR} d'1 tour sur tous les ennemis lorsqu'un ennemi perd 30%, ou plus, de ses PV MAX en une seule frappe.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 020",
        "ATQ": "1 542",
        "DEF": "969",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 30%`,
};
