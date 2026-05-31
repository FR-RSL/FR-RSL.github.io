const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Toxine Nécrotique",
          description: `Attaque 1 ennemi. Possède 45 % de chances de placer un débuff de ${DEBUFFS.HEALS} de 100 % pendant 2 tours.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Désigné pour Mourir",
          description: `Attaque 1 ennemi. Place un débuff d'${DEBUFFS.WEAKEN} de 25 % sur la cible, pendant 3 tours, si la cible souffre d'un débuff de ${DEBUFFS.DEF}. Il est impossible de résister à ce débuff.`,
          damage: "6.2*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Finisseur",
          description: `Attaque tous les ennemis. Place un buff ${BUFFS.ATK} de 50 % sur ce Champion pendant 2 tours avant d'attaquer. Possède également 50 % de chances de placer sur la cible un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours avant d'attaquer.`,
          damage: "4*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +15%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "16 350",
        "ATQ": "1 299",
        "DEF": "914",
        "VIT": "98",
        "TAUX C.": "15%",
        "DEG C.": "60%",
        "RES": "30",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés dans les Cryptes de Faction de 27%.`
};
