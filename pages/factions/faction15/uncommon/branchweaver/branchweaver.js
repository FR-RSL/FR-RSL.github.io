const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Branche d'alacrité",
          description: `Attaque un ennemi. Place également pendant 1 tour un buff ${BUFFS.SPD} de 15% sur l'allié ayant le Compteur de Tour le plus élevé, sauf cette Championne.`,
          damage: "4.2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Feuille-dague",
          description: `Attaque tous les ennemis. Possède 25% de chances de placer un débuff ${DEBUFFS.SPD} de 15% sur tous les ennemis pendant 2 tours.`,
          damage: "4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "11 565",
        "ATQ": "1 189",
        "DEF": "793",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
