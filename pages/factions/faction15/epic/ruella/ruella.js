const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Salve de harcèlement",
          description: `Attaque 3 fois un ennemi. Chaque coup critique possède 80% de chances de voler 5% du Compteur de Tour de la cible.`,
          damage: "1.5*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Aucun répit",
          description: `Attaque 3 fois un ennemi. Chaque frappe possède 50% de chances de placer un débuff ${DEBUFFS.DEF} de 60%, un débuff ${DEBUFFS.WEAKEN} de 25% et un débuff ${DEBUFFS.SPD} de 30% pendant 2 tours.`,
          damage: "2.3*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Offensive minutée",
          description: `Remplit le Compteur de tour de tous les alliés de 20% et place un buff ${BUFFS.CRATE} de 30% sur tous les alliés pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 855",
        "ATQ": "1 376",
        "DEF": "870",
        "VIT": "112",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors des Donjons de 40`,
};
