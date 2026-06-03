const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Rites de Carnage",
          description: `Attaque un ennemi. Place un buff ${BUFFS.ATK} de 25% sur ce Champion pendant 2 tours si l'attaque passe en critique.`,
          damage: "3.4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Coupe de maniaque",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 20% de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour.`,
          damage: "2.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Éviscère-les",
          description: `Attaque tous les ennemis. Possède 30% de chances d'augmenter de 2 tours les temps de recharge de toutes les Compétences de la cible.`,
          damage: "3.5*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 545",
        "ATQ": "1 211",
        "DEF": "914",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
