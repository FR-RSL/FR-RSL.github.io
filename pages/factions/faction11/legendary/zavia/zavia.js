const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Enferrer",
          description: `Attaque 3 fois un ennemi. Chaque frappe possède 40 % de chances de placer un débuff de ${DEBUFFS.POISON} de 5 % pendant 2 tours.`,
          damage: "1.1*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Pluie de Poison",
          description: `Attaque 2 fois tous les ennemis. Chaque frappe possède 50 % de chances de placer un débuff de ${DEBUFFS.POISON} de 5 % pendant 2 tours.`,
          damage: "2*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort3.webp",
          name: "Catalyseur Mortel",
          description: `Attaque tous les ennemis. Active instantanément tous les débuffs ${DEBUFFS.POISON} sur tous les ennemis.

Les ennemis tués par cette compétence ne peuvent pas être ranimés.`,
          damage: "4.1*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
        },
        {
          img: "assets/sort4.webp",
          name: "Partenaire Calamiteux",
          description: `Attaque un ennemi. Applique un effet de [Propagation de Débuff], prenant 4 débuffs aléatoires sur la cible pour les placer sur tous les ennemis.

[Uniquement disponible lorsque Bélanor se trouve dans la même équipe.]`,
          damage: "4*ATQ",
          cooldown: 5,
        }
  ],
  stats: {
        "PV": "18 660",
        "ATQ": "1 586",
        "DEF": "749",
        "VIT": "105",
        "TAUX C.": "15%",
        "DEG C.": "63%",
        "RES": "30",
        "PRE": "10"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Allies lors de toutes les Batailles de 33%`
};
