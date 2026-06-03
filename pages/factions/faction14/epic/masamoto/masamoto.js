const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Double Fente",
          description: `Attaque 2 fois un ennemi. Possède 10% de chances de voler 1 buff aléatoire.`,
          damage: "1.5*DEF",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Typhon d'Acier",
          description: `Attaque tous les ennemis. Possède 50% de chances de placer un débuff ${DEBUFFS.ATK} de 50% pendant 2 tours.`,
          damage: "4.1*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Yojimbo",
          description: `Place un buff ${BUFFS.DEF} de 60% sur tous les alliés pendant 2 tours. Remplit également le Compteur de Tour de tous les alliés de 15%.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 020",
        "ATQ": "870",
        "DEF": "1 365",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
