const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Frappe Vacillante",
          description: `Attaque un ennemi. Les dégâts augmentent de 20 % en attaquant sous un buff ${BUFFS.VEIL}. Soigne ce Champion de 25 % des dégâts infligés lorsqu'il attaque en bénéficiant d'un buff ${BUFFS.VEIL}.`,
          damage: "3.5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Brise-cou",
          description: `Attaque un ennemi. Les dégâts augmentent de 35 % en attaquant sous un buff ${BUFFS.VEIL}. Lors d'une attaque sous buff ${BUFFS.VEIL}, les ennemis tués par cette compétence ne peuvent pas être ranimés.

Lors d'une attaque sans buff ${BUFFS.VEIL}, vide totalement le Compteur de Tour de la cible et remplit le Compteur de Tour du Champion avec la totalité des pertes de la cible. Contre les Boss, ne peut réduire le Compteur de Tour que jusqu'à 50 %. Cette réduction du Compteur de Tour est irrésistible.`,
          damage: "5.2*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Prédateur invis. [P]",
          description: `Place, au début de chaque round et pendant 1 tour, un buff ${BUFFS.VEIL} sur ce Champion.

Place, pour 1 tour, un buff de ${BUFFS.VEIL} sur ce Champion à chaque fois qu'il tue un ennemi.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "12 720",
        "ATQ": "1 597",
        "DEF": "859",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
