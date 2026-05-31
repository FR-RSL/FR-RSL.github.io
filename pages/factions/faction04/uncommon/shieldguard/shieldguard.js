const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Uppercut",
          description: `Attaque un ennemi. Offre 30 % de chances de placer un débuff de ${DEBUFFS.SPD} de 15 % pendant 2 tours. Les dégâts infligés sont proportionnels à la DÉF.`,
          damage: "4*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Posture de Combat",
          description: `Attaque tous les ennemis. Remplit de 20 % le Compteur de Tours de ce Champion lors de chaque coup en critique. Les dégâts infligés sont proportionnels à la DÉF.`,
          damage: "3.4*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Âme Forte [P]",
          description: `Retire, à chaque tour, un débuff sur ce Champion.`,
          cooldown: 1,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 360",
        "ATQ": "705",
        "DEF": "1 024",
        "VIT": "89",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
