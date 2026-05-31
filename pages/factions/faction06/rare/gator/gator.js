const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Frappe Ensorcelée",
          description: `Attaque 1 ennemi. Possède 30 % de chances de placer un débuff de ${DEBUFFS.HEALS} de 50 % pendant 2 tours.`,
          damage: "5.1*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Répandre la Frénésie",
          description: `Place, pendant 2 tours, un buff d'${BUFFS.ATK} de 25 % sur tous les alliés.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Défier la Sorcière",
          description: `Retire tous les débuffs sur tous les alliés.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 515",
        "ATQ": "881",
        "DEF": "1 046",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Augmente la statistique TAUX DE C. des Alliés Magie lors de toutes les Batailles de 22%`,
};
