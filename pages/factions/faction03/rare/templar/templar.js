const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Charge",
          description: `Attaque 1 ennemi. Offre 30 % de chances de placer un débuff de ${DEBUFFS.SPD} de 30 % pendant 2 tours. Les dégâts infligés sont proportionnels à la DÉF.`,
          damage: "3.9*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Défi juste",
          description: `Attaque 4 fois au hasard. Chaque frappe possède 25 % de chances de placer un débuff de ${DEBUFFS.PROVOKE} d'1 tour. Place, pendant 1 tour, un buff de ${BUFFS.BLOCK_DAMAGE} sur ce Champion. Les dégâts infligés sont proportionnels à la DÉF.`,
          damage: "1.7*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Dédain [P]",
          description: `Attaque avec la compétence par défaut de ce Champion dès qu'un ennemi place un débuff sur ce Champion.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 855",
        "ATQ": "881",
        "DEF": "1 090",
        "VIT": "92",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors des batailles d'Arène de 50`,
};
