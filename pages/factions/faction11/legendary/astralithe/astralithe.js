const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Chef d'Assaut",
          description: `Attaque un ennemi. Remplit de 15% le Compteur de Tour d'un allie pris au hasard.${RETURN}
Remplit de 15% supplementaires le Compteur de Tour de tous les allies si cette attaque passe en critique.`,
          damage: "3.6*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Pourriture du Coeur",
          description: `Attaque un ennemi.${RETURN}${RETURN}
Place 2 debuffs ${DEBUFFS.BOMB} equivalent a 500% de l'ATQ de cette Championne pendant 1 tour. Il est impossible de resister a ces debuffs.`,
          damage: "5.6*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Jugement",
          description: `Echange ses PV avec un ennemi, puis l'attaque avec la Competence par defaut de cette Championne. Ne peut pas etre utilise contre un Boss.${RETURN}${RETURN}${PASSIVE}
Accorde un Tour supplementaire et reduit de 3 tours le Temps de recharge de cette Competence si les PV de cette Championne tombent sous 20% lorsqu'elle se fait attaquer.`,
          cooldown: 7,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "17 175",
        "ATQ": "1 487",
        "DEF": "947",
        "VIT": "102",
        "TAUX C.": "15%",
        "DEG C.": "63%",
        "RES": "30",
        "PRE": "10"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Allies dans les batailles d'Arene de 28%.`
};
