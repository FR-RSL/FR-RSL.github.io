const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Balafre éternienne",
          description: `Attaque un ennemi. Place une frappe supplémentaire sur les ennemis des Corrompus. 

Remplit également le Compteur de Tour de ce Champion de 10 %. Remplit son Compteur de Tour de 2 % supplémentaires pour chaque buff sur ce Champion.`,
          damage: "3*ATQ + 0.12*PV",
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Fente lumineuse",
          description: `Attaque un ennemi. Avant d'attaquer, place un buff ${BUFFS.ATK} de 50 % sur ce Champion pendant 2 tours. 

Ignorera les buffs ${BUFFS.STONE_SKIN}. 

Si cette attaque tue un ennemi, remplit le Compteur de Tour de tous les alliés de 30 %.`,
          damage: "5.5*ATQ + 0.15*PV",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "J'ai le pouvoir !",
          description: `Attaque tous les ennemis. 

Les dégâts infligés par cette compétence augmentent de 10 % pour chaque buff placé sur ce Champion avant que cette compétence ne soit utilisée (s'accumule jusqu'à 500 %). Se réinitialise après l'utilisation de cette compétence.`,
          damage: "3.5*ATQ + 0.2*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Maître de l'univers [P]",
          description: `Augmente l'ATQ et les PV de ce Champion de 5 % pour chaque buff placé sur ce Champion (s'accumule jusqu'à 50 %). 

Au début de chaque Tour, place un buff ${BUFFS.STRENGTHEN} de 25 % sur ce Champion pendant 2 tours. Place également un buff ${BUFFS.STRENGTHEN} de 25 % sur ce Champion pendant 2 tours lorsque les PV d'un ennemi tombent sous 50 % après l'attaque de ce Champion. 

Ce Champion est immunisé contre les débuffs ${DEBUFFS.PETRIFICATION}.`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "16 845",
        "ATQ": "1 465",
        "DEF": "991",
        "VIT": "104",
        "TAUX C.": "15%",
        "DEG C.": "63%",
        "RES": "30",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés dans les batailles d'Arene de 28%.`
};
