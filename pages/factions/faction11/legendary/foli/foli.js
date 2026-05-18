const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bon a Abattre",
          description: `Attaque 4 fois un ennemi. Chaque frappe possede 20% de chances de placer un debuff ${DEBUFFS.DEF} de 60% pendant 2 tours.`,
          damage: "0.9*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Bio Tohu-bohu",
          description: `Attaque 4 fois au hasard. Chaque frappe possede 35% de chances de placer un debuff ${DEBUFFS.LEECH} pendant 2 tours.`,
          damage: "1.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Destin Scelle",
          description: `Attaque tous les ennemis. Reduit de 15% le Compteur de Tour de chaque ennemi, puis attaque l'ennemi cible.${RETURN}${RETURN}
Place un debuff ${DEBUFFS.BLOCK_REA} sur les cibles tuees.`,
          damage: "4*ATQ",
	  cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Armure Vivante [P]",
          description: `Des qu'un ennemi place un debuff ${DEBUFFS.STUN}, ${DEBUFFS.GEL}, ${DEBUFFS.SLEEP} ou ${DEBUFFS.PROVOKE} sur ce Champion,
retire instantanement le debuff, puis soigne ce Champion de 20% de ses PV MAX et remplit son Compteur de Tour de 50%.`,
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
