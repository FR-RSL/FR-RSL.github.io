const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.png",
          name: "Fleche d'Echardes",
          description: `Attaque un ennemi. Porte 50% des degats infliges sur tous les ennemis si cette attaque passe en critique.`,
          damage: "2.7*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
        },
        {
          img: "assets/sort2.png",
          name: "Grele de Fleches",
          description: `Attaque 3 fois tous les ennemis. Chaque coup critique soigne cette Championne de 2.5% de ses PV MAX.`,
          damage: "1.4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.png",
          name: "Tir Chanceux",
          description: `Attaque un ennemi. Réduit de 100% le Compteur de Tour de la cible.
Ignorera les buffs ${BUFFS.SHIELD} et ${BUFFS.BLOCK_DAMAGE}.`,
          damage: "6*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "14 535",
        "ATQ": "1 564",
        "DEF": "771",
        "VIT": "97",
        "TAUX C.": "15%",
        "DEG C.": "60%",
        "RES": "30",
        "PRE": "0"
  }
};

const aura = null;
