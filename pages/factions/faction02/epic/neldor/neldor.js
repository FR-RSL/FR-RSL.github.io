const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Perceur de givre",
          description: `Attaque 3 fois de façon aléatoire. Chaque frappe possède 30 % de chances de placer un débuff ${DEBUFFS.GEL} pendant 1 tour.`,
          damage: "1.1*ATQ",
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Rasoir dansant",
          description: `Attaque 4 fois un ennemi. 

La première et la deuxième frappe possèdent 50 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % pendant 2 tours. 

La troisième et la quatrième frappe possèdent 50 % de chances de placer un débuff ${DEBUFFS.PRE} de 50 % pendant 2 tours.`,
          damage: "1.35*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Croix chromatique",
          description: `Attaque 2 fois tous les ennemis. Chaque frappe possède 50 % de chances de placer un débuff ${DEBUFFS.SPD} de 30 % pendant 2 tours. 

Soigne ce Champion à hauteur de 30 % des dégâts infligés.`,
          damage: "1.8*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Volonté cruelle [P]",
          description: `Dès qu'un allié place un débuff ${DEBUFFS.GEL}, ce Champion possède 30 % de chances d'attaquer la cible avec sa compétence par défaut.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 700",
        "ATQ": "1 343",
        "DEF": "980",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
