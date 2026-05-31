const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Double balafre",
          description: `Attaque 2 fois un ennemi. 

Chaque frappe critique ignorera 5 % de la DÉF de la cible.`,
          damage: "1.75*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Plongeon d'épée",
          description: `Attaque un ennemi. 

A 50 % de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour. 

Répétera l'attaque contre tous les autres ennemis si ce Champion se trouve sous buff ${BUFFS.ATK}.`,
          damage: "5.55*ATQ | 3.65*ATQ (Zone)",
          cooldown: 5,
          levelInfo: ["Dégâts +15%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Barrage empêtrant",
          description: `Attaque tous les ennemis. Avant d'attaquer, place un buff ${BUFFS.ATK} de 25 % et un buff ${BUFFS.CDAM} de 15 % sur tous les alliés pendant 2 tours. 

Chaque coup critique remplit le Compteur de Tour de ce Champion de 5 %.`,
          damage: "3.5*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "14 865",
        "ATQ": "1 310",
        "DEF": "727",
        "VIT": "98",
        "TAUX C.": "15%",
        "DEG C.": "57%",
        "RES": "30",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Allies dans les Cryptes de Faction de 21%.`
};
