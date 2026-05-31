const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Censure de Vitalité",
          description: `Attaque un ennemi. Détruit les PV MAX de la cible de 30 % des dégâts infligés.`,
          damage: "3.6*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Pas de quartier",
          description: `Attaque 3 fois un ennemi. Les dégâts augmentent en fonction du pourcentage de PV perdus par la cible.`,
          damage: "1.6*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +15%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Murmures de Tourment",
          description: `Attaque tous les ennemis. Possède 80 % de chances de placer un débuff de ${DEBUFFS.LEECH} pendant 2 tours.`,
          damage: "3.6*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Ruine Définitive [P]",
          description: `Soigne ce Champion de 30 % de ses PV MAX à chaque fois qu'il tue un ennemi. Les ennemis tués par ce Champion ne peuvent pas être ranimés.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 370",
        "ATQ": "1 729",
        "DEF": "892",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 33%`,
};
