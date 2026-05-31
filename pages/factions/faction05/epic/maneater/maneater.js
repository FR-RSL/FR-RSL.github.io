const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Marteler",
          description: `Attaque 1 ennemi. Place un débuff de ${DEBUFFS.ATK} de 50 % sur tous les ennemis si l'attaque passe en critique.`,
          damage: "5.5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Siphon",
          description: `Attaque 1 ennemi. Vide totalement le Compteur de Tours de la cible. Remplit le Compteur de Tour de ce Champion d'une valeur équivalent à la somme des pertes de la cible.`,
          damage: "8.2*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Vieux Sang",
          description: `Ce Champion subit des dégâts, puis place, pendant 2 tours, un buff ${BUFFS.UNKILLABLE} et un buff de ${BUFFS.BLOCK_DEBUFFS} sur tous les alliés. Les dégâts subis sont égaux à 5 % des PV MAX de chaque allié vivant.`,
          cooldown: 7,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "20 310",
        "ATQ": "837",
        "DEF": "1 112",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors des Donjons de 33%`,
};
