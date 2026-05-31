const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hachette décrépite",
          description: `Attaque 1 ennemi. Possède 15 % de chances de placer un débuff de ${DEBUFFS.SLEEP} d'1 tour.`,
          damage: "5.5*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Vengeance [P]",
          description: `Possède 30 % de chances de contre-attaquer lorsque touché.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "13 545",
        "ATQ": "551",
        "DEF": "749",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
