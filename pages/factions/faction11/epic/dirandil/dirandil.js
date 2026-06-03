const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Rasoirs brumeux",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 20 % de chances de placer un débuff ${DEBUFFS.GEL} pendant 1 tour. Ces chances passent à 30 % lors de chaque coup critique.`,
          damage: "1.8*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Dispersion",
          description: `Attaque tous les ennemis. Ignorera 15 % de la DÉF de chaque cible.${RETURN}${RETURN}

Remplit le Compteur de Tour de ce Champion de 10 % lors de chaque coup critique.`,
          damage: "3.9*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Assassin royal",
          description: `Attaque un ennemi. Ignorera 50 % de la DÉF de la cible.${RETURN}${RETURN}

Place un buff ${BUFFS.PERFECT_VEIL} sur ce Champion pendant 2 tours si cette attaque passe en critique.`,
          damage: "5.8*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "12 885",
        "ATQ": "1 376",
        "DEF": "1 068",
        "VIT": "98",
        "TAUX C.": "15%",
        "DEG C.": "60%",
        "RES": "30",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Augmente la statistique TAUX C. des Allies lors de toutes les Batailles de 15%.`
};
