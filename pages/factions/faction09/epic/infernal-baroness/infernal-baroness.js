const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Siphon de Vie",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Soigne l'allié ayant le moins de PV de 5 % des dégâts infligés.`,
          damage: "2.5*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Sombre Crampon",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Possède 50 % de chances de placer un débuff de ${DEBUFFS.ATK} de 50 % sur tous les ennemis pendant 2 tours.`,
          damage: "4.5*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Disparition",
          description: `Place un buff ${BUFFS.PERFECT_VEIL} sur un allié pendant 3 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 670",
        "ATQ": "914",
        "DEF": "1 211",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
