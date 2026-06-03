const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Damer le Pion",
          description: `Attaque 1 ennemi. Possède 25% de chances de placer un débuff de ${DEBUFFS.GEL} pendant 1 tour.`,
          damage: "3.3*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Dénigrer",
          description: `Attaque 3 fois 1 ennemi. Chaque frappe possède 30% de chances de retirer un buff aléatoire de la cible.`,
          damage: "1.9*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Coup Tournoyant",
          description: `Attaque 2 fois tous les ennemis. Possède 33% de chances de placer un débuff de ${DEBUFFS.SPD} de 30% pendant 2 tours.`,
          damage: "1.8*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 720",
        "ATQ": "1 277",
        "DEF": "903",
        "VIT": "92",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
