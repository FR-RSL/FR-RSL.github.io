const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Froid Mystique",
          description: `Attaque 3 fois un ennemi. Possède 25% de chances de placer un débuff de ${DEBUFFS.GEL} d'1 tour.`,
          damage: "1.7*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Vol de Vigueur",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 75% de chances de voler un buff sur la cible.`,
          damage: "3.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Mélopée de Violence",
          description: `Remplit de 25% le Compteur de Tours de tous les alliés. Place, pendant 2 tours, un buff d'${BUFFS.CRATE} de 30% sur tous les alliés.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 855",
        "ATQ": "793",
        "DEF": "1 178",
        "VIT": "91",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
