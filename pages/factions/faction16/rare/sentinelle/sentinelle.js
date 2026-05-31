const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Balafre vivifiante",
          description: `Attaque un ennemi. 

Place une frappe supplémentaire si la cible se trouve sous débuff ${DEBUFFS.DEF}.`,
          damage: "3.7*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Épées englouties",
          description: `Attaque tous les ennemis. 

A 50 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours. Les chances augmentent de 5 % pour chaque ennemi vivant.`,
          damage: "3.9*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Défenseur d'Agaris",
          description: `Attaque un ennemi. 

Soigne ce Champion à hauteur de 20 % des dégâts infligés. Soigne au lieu de cela ce Champion de 30 % si la cible se trouve sous débuff ${DEBUFFS.DEF}. 

Détruit les PV MAX de la cible de 20 % des dégâts infligés. Détruit au lieu de cela les PV MAX de la cible de 30 % si la cible se trouve sous débuff ${DEBUFFS.DEF}.`,
          damage: "6*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "12 390",
        "ATQ": "1 277",
        "DEF": "925",
        "VIT": "95",
        "TAUX C.": "15%",
        "DEG C.": "57%",
        "RES": "30",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Allies lors de toutes les Batailles de 15%.`
};
