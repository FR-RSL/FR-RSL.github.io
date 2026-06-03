const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Pillage",
          description: `Attaque un ennemi. Possède 30 % de chances de voler un buff aléatoire à la cible. Les dégâts sont proportionnels à l'ATQ et la DÉF.`,
          damage: "1.9*ATQ+3*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Soif de Sang",
          description: `Attaque un ennemi. Les dégâts sont proportionnels aux PV MAX de ce Champion et augmentent en fonction du nombre d'alliés morts.`,
          damage: "0.3*PV*(1+Allies Dead)",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Invincible [P]",
          description: `Ranime ce Champion avec 50 % de PV lorsqu'il se fait tuer.`,
          cooldown: 3,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 980",
        "ATQ": "881",
        "DEF": "1 090",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors des Donjons de 33%`,
};
