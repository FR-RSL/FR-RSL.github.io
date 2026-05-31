const championData = {
  type: "Soutien",
  spells: [
    {
      img: "assets/sort1.webp",
      name: "Éclair aqueux",
      description: `Attaque 2 fois un ennemi. 

Chaque frappe soigne l'allié qui a le moins de PV à hauteur de 5 % des PV MAX de ce Champion.`,
      damage: "2.4*ATQ",
      levelInfo: ["Dégâts +5%", "Dégâts +5%", "Soins +5%", "Soins +5%"],
    },
    {
      img: "assets/sort2.webp",
      name: "Ire du Maître des marées",
      description: `Attaque tous les ennemis. 

Place un buff ${BUFFS.DEF} de 60 % sur tous les alliés pendant 2 tours.`,
      damage: "4.5*ATQ",
      cooldown: 5,
      levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
    },
    {
      img: "assets/sort3.webp",
      name: "Eaux régénératrices",
      description: `Ranime 2 alliés aléatoires avec 40 % de PV et 20 % de Compteur de Tour. 

Soigne tous les alliés de 15 % des PV MAX de ce Champion. Soignera tous les alliés même si aucun allié n'a été ranimé. 

Place un buff ${BUFFS.PERFECT_VEIL} sur tous les alliés sauf ce Champion pendant 1 tour. Ce buff sera placé même si aucun allié n'a été ranimé.`,
      cooldown: 6,
      levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
    },
    {
      img: "assets/sort4.webp",
      name: "Sécurité des vagues [P]",
      description: `Au début du tour de ce Champion, place un buff ${BUFFS.SHIELD} pendant 1 tour sur tous les alliés dont les PV sont inférieurs à 100 %. La valeur du ${BUFFS.SHIELD} est égale à 15 % des PV MAX du Champion qui le reçoit.`,
      isPassive: true,
    }
  ],
  stats: {
    "PV": "21 315",
    "ATQ": "837",
    "DEF": "1 046",
    "VIT": "107",
    "TAUX C.": "15%",
    "DEG C.": "50%",
    "RES": "30",
    "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Allies lors de toutes les Batailles de 20%.`
};
