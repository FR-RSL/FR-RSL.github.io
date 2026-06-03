const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tir de Couverture",
          description: `Attaque tous les ennemis. Possède 15% de chances d'augmenter d'1 tour le temps de recharge d'une Compétence aléatoire de chaque cible.`,
          damage: "DEF*1.9",
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Compétence de Ranger",
          description: `Place, pendant 2 tours, un buff de ${BUFFS.HEALS} de 7,5% sur tous les alliés.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 380",
        "ATQ": "617",
        "DEF": "1 244",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
