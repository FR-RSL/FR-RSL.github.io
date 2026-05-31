const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Agression Gratuite",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 30 % de chances de voler un buff aléatoire.`,
          damage: "0.08*HP",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Grabuge",
          description: `Attaque un ennemi. Ignorera la DÉF de la cible si elle ne dispose d'aucun buff actif. Vole 2 buffs aléatoires à la cible.`,
          damage: "0.15*HP",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Défense Désespérée",
          description: `Lorsqu'il est frappé, possède 30 % de chances de voler un buff aléatoire à l'assaillant. Survient une fois par frappe.

Contre-attaque l'assaillant s'il ne possède pas de buff actif.`,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 640",
        "ATQ": "870",
        "DEF": "1 057",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 40`,
};
