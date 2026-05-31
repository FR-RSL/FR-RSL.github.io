const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Démolition",
          description: `Attaque 3 fois un ennemi. Réduit de 10 % le Compteur de Tours de la cible.`,
          damage: "1*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Brutalité",
          description: `Attaque 1 ennemi. Place un débuff de ${DEBUFFS.ATK} de 50 % et un débuff de ${DEBUFFS.SPD} de 30 % pendant 2 tours.`,
          damage: "5*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Indomptable",
          description: `Place, pendant 2 tours, un buff d'${BUFFS.DEF} de 60 % et un buff ${BUFFS.REVIVE_ON_DEATH} sur tous les alliés.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 350",
        "ATQ": "738",
        "DEF": "1 476",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
