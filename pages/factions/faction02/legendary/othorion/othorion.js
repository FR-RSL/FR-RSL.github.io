const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Flèche tombée du ciel",
          description: `Attaque tous les ennemis. Cette attaque ne déclenchera pas de contre-attaques. 

Remplit le Compteur de Tour de ce Champion de 5 % pour chaque ennemi en vie après l'attaque.`,
          damage: "2.5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tir de faucon",
          description: `Attaque 2 fois tous les ennemis. La première frappe possède 75 % de chances de placer un débuff ${DEBUFFS.BLOCK_BUFFS} pendant 2 tours. La seconde frappe possède 75 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % pendant 2 tours. 

Remplit le Compteur de Tour de ce Champion de 5 % pour chaque ennemi en vie après l'attaque.`,
          damage: "1.5*ATQ+0.035*Target Max HP",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Marqué à jamais",
          description: `Place un buff ${BUFFS.ATK} de 50 %, un buff ${BUFFS.PRE} de 50 % et un buff ${BUFFS.SPD} de 30 % sur ce Champion pendant 3 tours. Accorde ensuite un Tour supplémentaire.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Aucun ennemi trop grand [P]",
          description: `Augmente les PV MAX de ce Champion de 20 % pour chaque ennemi tué ou Tête d'Hydre décapitée par ce Champion (s'accumule jusqu'à 50 000).`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 690",
        "ATQ": "1 454",
        "DEF": "1 079",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
