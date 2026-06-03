const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bon à Abattre",
          description: `Attaque 4 fois 1 ennemi. Possède 20% de chances de placer un débuff de ${DEBUFFS.DEF} de 60% pendant 2 tours.`,
          damage: "0.9*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Bio Tohu-bohu",
          description: `Attaque 4 fois au hasard. Chaque frappe possède 35% de chances de placer un débuff de ${DEBUFFS.LEECH} de 2 tours.`,
          damage: "1.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Destin Scellé",
          description: `Attaque tous les ennemis, réduit leurs Compteurs de Tour actuels de 15%, puis attaque l'ennemi ciblé. Les ennemis tués par cette compétence ne peuvent pas être ranimés.`,
          damage: "4*ATQ",
	  cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Armure Vivante [P]",
          description: `Dès qu'un ennemi place un débuff ${DEBUFFS.STUN}, ${DEBUFFS.GEL}, ${DEBUFFS.SLEEP} ou ${DEBUFFS.PROVOKE} sur ce Champion, retire instantanément le débuff, puis soigne ce Champion de 20% de ses PV MAX et booste son Compteur de Tour de 50%.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: true,
        }
  ],
  stats: {
        "PV": "15 030",
        "ATQ": "1 476",
        "DEF": "1 101",
        "VIT": "105",
        "TAUX C.": "15%",
        "DEG C.": "63%",
        "RES": "30",
        "PRE": "0"
  }
};

const aura = null;
