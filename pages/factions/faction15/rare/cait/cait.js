const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Ligne traînante",
          description: `Attaque un ennemi. Possède 15% de chances de placer un débuff ${DEBUFFS.BLOCK_BUFFS} pendant 2 tours.`,
          damage: "3.7*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Intraçable",
          description: `Attaque tous les ennemis. Possède 30% de chances d'augmenter de 2 tours le temps de recharge d'une compétence aléatoire de chaque cible.`,
          damage: "3.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Chemin cachés [P]",
          description: `Place un buff ${BUFFS.PERFECT_VEIL} sur cette Championne pendant 1 tour dès qu'elle tue un ennemi.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "11 895",
        "ATQ": "1 288",
        "DEF": "947",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
