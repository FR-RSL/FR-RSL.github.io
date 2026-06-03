const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Ricaner et couper",
          description: `Attaque un ennemi. Place un buff ${BUFFS.ATK} de 50% pendant 2 tours sur ce Champion si l'attaque passe en critique.`,
          damage: "3.2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Nuit de chauve-souris",
          description: `Attaque 3 fois un ennemi. Remplit le Compteur de Tour de ce Champion de 10% lors de chaque coup critique. Place également un buff ${BUFFS.PERFECT_VEIL} sur ce Champion pendant 1 tour.`,
          damage: "1.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Essaim de souffrance",
          description: `Attaque tous les ennemis. Place un buff ${BUFFS.CDAM} de 30% sur ce Champion pendant 2 tours avant d'attaquer. Soigne ce Champion de 5% de ses PV MAX lors de chaque coup critique.`,
          damage: "3.3*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Donne-moi ça ! [P]",
          description: `Vole 15% du Compteur de tour de l'ennemi ayant le Compteur de Tour le plus élevé à la fin du tour de ce Champion. Il est impossible de résister à ce débuff.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 040",
        "ATQ": "1 531",
        "DEF": "837",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
