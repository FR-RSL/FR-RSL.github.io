const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.png",
          name: "Double balafre",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}
Chaque frappe critique Ignorera 5% de la DEF de la cible.`,
          damage: "1.75*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
        },
        {
          img: "assets/sort2.png",
          name: "Plongeon d'epee",
          description: `Attaque un ennemi.${RETURN}${RETURN}
A 50% de chances de placer un debuff ${DEBUFFS.STUN} pendant 1 tour.${RETURN}${RETURN}
Repetera l'attaque contre tous les autres ennemis si ce Champion se trouve sous buff ${BUFFS.ATK}.`,
          damage: "5.55*ATQ | 3.65*ATQ (Zone)",
          cooldown: 5,
          levelInfo: ["Dégâts +15%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.png",
          name: "Barrage empetrant",
          description: `Attaque tous les ennemis. Avant d'attaquer, place un buff ${BUFFS.ATK} de 25% et un buff ${BUFFS.CDAM} de 15% sur tous les allies pendant 2 tours.${RETURN}${RETURN}
Chaque coup critique remplit le Compteur de Tour de ce Champion de 5%.`,
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
  img: "../../../../../assets/images/auras/attack.png",
  description: `Augmente la statistique ATQ des Allies dans les Cryptes de Faction de 21%.`
};
