const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Coup de Bâton",
          description: `Attaque un ennemi. Place, pendant 1 tour, un buff de ${BUFFS.HEALS} de 15% sur l'allié ayant le moins de PV.`,
          damage: "3.7*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "À la remorque",
          description: `Attaque 2 fois un ennemi. Ranime un allié choisi au hasard avec tous ses PV si cette attaque tue l'ennemi.`,
          damage: "3.1*DEF",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Lumineux",
          description: `Lorsqu'un allié se fait attaquer, place sur ce dernier un buff de ${BUFFS.SHIELD} équivalent à 35% des PV MAX de ce Champion pendant 2 tours. Se produit une fois par tour. Place un buff de ${BUFFS.SHIELD} sur ce Champion.`,
          cooldown: 2,
          levelInfo: ["Bouclier +10%", "Bouclier +10%", "Bouclier +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 660",
        "ATQ": "826",
        "DEF": "1 233",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
