const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hachoirs brosses",
          description: `Attaque un ennemi. Possède 15% de chances de porter un coup supplémentaire.`,
          damage: "2.7*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Brise couronne",
          description: `Attaque un ennemi. Ignorera les buffs ${BUFFS.SHIELD} et ${BUFFS.BLOCK_DAMAGE}. Place un buff ${BUFFS.BLOCK_DAMAGE} sur cette Championne pendant 1 tour si cette attaque tue un ennemi.`,
          damage: "5*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rage antique",
          description: `Place un buff ${BUFFS.CDAM} de 30% et un buff ${BUFFS.ATK} de 50% sur cette Championne pendant 3 tours, puis accorde un Tour Supplémentaire.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Assassin de rois [P]",
          description: `Dès que cette Championne tue un ennemi, réduit d'1 tour le temps de recharge de la Compétence Brise couronne.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 535",
        "ATQ": "1 421",
        "DEF": "914",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
