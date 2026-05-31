const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Diviser",
          description: `Attaque 1 ennemi. Place, pendant 1 tour, un buff d'${BUFFS.ATK} de 25 % sur ce Champion si l'attaque passe en critique.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Lame Elfique",
          description: `Attaque 1 ennemi. Possède 50 % de chances de placer un débuff de ${DEBUFFS.POISON} de 2,5 % pendant 2 tours.`,
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
