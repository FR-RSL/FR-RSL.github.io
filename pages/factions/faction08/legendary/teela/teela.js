const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Cimeterre Avalesort",
          description: `Attaque un ennemi. Vole 1 buff aléatoire à la cible. Possède également 50 % de chances de voler un autre buff aléatoire si la cible possède 2 buffs ou plus.`,
          damage: "0.2*HP",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Frappe Bûcher",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.BURN} pendant 2 tours. 

Place également un buff ${BUFFS.HEALS} de 15 % sur tous les alliés pendant 2 tours.`,
          damage: "0.22*HP",
          cooldown: 3,
          levelInfo: ["Dégâts +10%", "Dégâts +20%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Ver de Vie",
          description: `Attaque tous les ennemis. Possède 85 % de chances d'augmenter d'1 tour la durée de tous les débuffs ${DEBUFFS.BURN} sur tous les ennemis.

Possède également 85 % de chances de placer un débuff ${DEBUFFS.LEECH} et un débuff ${DEBUFFS.HEX} pendant 2 tours.`,
          damage: "0.2*HP",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "21 975",
        "ATQ": "892",
        "DEF": "1 222",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors de toutes les Batailles de 50`,
};
