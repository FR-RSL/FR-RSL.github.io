const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.png",
          name: "Lourde Punition",
          description: `Attaque un ennemi. Possede 25% de chances de placer un debuff ${DEBUFFS.GEL} pendant 1 tour.`,
          damage: "3.3*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
        },
        {
          img: "assets/sort2.png",
          name: "Colliers d'Obeissance",
          description: `Attaque tous les ennemis. Possède 50% de chances de placer un debuff ${DEBUFFS.BOMB} équivalent a 400% de l'ATQ de ce Champion pendant 2 tours.`,
          damage: "4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.png",
          name: "Executeur [P]",
          description: `Lorsque ce Champion est attaque, possede 30% de chances de reduite d'1 tour la duree de tous les comptes de detonation des debuffs ${DEBUFFS.BOMB}.`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "13 710",
        "ATQ": "1 321",
        "DEF": "793",
        "VIT": "100",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "30",
        "PRE": "10"
  }
};

const aura = null;
