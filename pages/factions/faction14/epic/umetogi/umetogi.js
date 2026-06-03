const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Assassin saï",
          description: `Attaque 2 fois un ennemi. Possède 20 % de chances supplémentaires de placer un coup critique si ce Champion se trouve sous débuff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}.`,
          damage: "1.6*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Départ silencieux",
          description: `Attaque 2 fois un ennemi. Chaque frappe ignorera 20 % de la DÉF de la cible. Possède 20 % de chances supplémentaires de placer un coup critique si ce Champion se trouve sous débuff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}.`,
          damage: "2.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Effacement progressif",
          description: `Place également sur ce Champion un buff ${BUFFS.PERFECT_VEIL} et un buff ${BUFFS.SPD} de 30 % pendant 2 tours, puis remplit le Compteur de Tour de ce Champion de 40 %.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Impasse [P]",
          description: `Dès que ce Champion se fait attaquer, bloque totalement 1 frappe, réduisant à zéro les dégâts qui arrivent, puis contre-attaque avec la compétence par défaut.${RETURN}${RETURN}

Lorsqu'il est attaqué par un Boss, réduit de 50 % les dégâts en approche avant de contre-attaquer.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "13 215",
        "ATQ": "1 564",
        "DEF": "859",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Augmente la statistique TAUX DE C. des Alliés lors de toutes les Batailles de 15%`,
};
