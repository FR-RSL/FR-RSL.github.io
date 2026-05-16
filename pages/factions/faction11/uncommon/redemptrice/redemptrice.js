const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.png",
          name: "Diviser",
          description: `Attaque un ennemi. Place un buff ${BUFFS.ATK} de 25% sur cette Championne pendant 1 tour si l'attaque passe en critique.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
        },
        {
          img: "assets/sort2.png",
          name: "Lame Elfique",
          description: `Attaque un ennemi. Possede 50% de chances de placer un debuff ${DEBUFFS.POISON} de 2.5% pendant 2 tours.`,
          damage: "8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "12 225",
        "ATQ": "1 123",
        "DEF": "815",
        "VIT": "92",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "30",
        "PRE": "0"
  }
};

const aura = null;
