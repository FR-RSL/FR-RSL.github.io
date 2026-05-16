const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.png",
          name: "Epingler",
          description: `Attaque un ennemi. Possede 20% de chances de placer un debuff ${DEBUFFS.SPD} de 15% pendant 2 tours.`,
          damage: "2.5*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%"],
        },
        {
          img: "assets/sort2.png",
          name: "Tirs Multiples",
          description: `Attaque tous les ennemis.`,
          damage: "2.7*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "12 720",
        "ATQ": "815",
        "DEF": "540",
        "VIT": "92",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "30",
        "PRE": "0"
  }
};

const aura = null;
