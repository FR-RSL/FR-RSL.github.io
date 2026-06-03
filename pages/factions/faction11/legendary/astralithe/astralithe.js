const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Chef d'Assaut",
          description: `Attaque un ennemi. Remplit de 15 % le Compteur de Tour d'un allié pris au hasard. Remplit de 15 % supplémentaires le Compteur de Tour de tous les alliés si cette attaque passe en critique.`,
          damage: "3.6*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Pourriture du Coeur",
          description: `Attaque un ennemi. Place deux débuffs ${DEBUFFS.BOMB} qui détoneront après 1 tour. Il est impossible de résister à ce débuff.`,
          damage: "5.6*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Jugement",
          description: `${ACTIVE}

Échange les niveaux de PV restants avec une cible ennemie, puis attaque avec la compétence par défaut. Ne peut pas être utilisé contre un boss.${RETURN}${RETURN}

${PASSIVE}

Accorde un Tour Supplémentaire et réduit de 3 tours le temps de recharge de cette Compétence si les PV de ce Champion tombent sous 20 % lorsqu'il se fait attaquer.`,
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
