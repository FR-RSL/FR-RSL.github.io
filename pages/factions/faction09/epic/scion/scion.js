const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Khépesh de Cauchemar",
          description: `Attaque un ennemi. Possède 20 % de chances de placer un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 1 tour.`,
          damage: "3.5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Mauvaise Graine",
          description: `Attaque un ennemi. Place un débuff ${DEBUFFS.BLOCK_BUFFS} et un débuff ${DEBUFFS.HEALS} de 100 % pendant 2 tours. 

Ignorera les buffs ${BUFFS.SHIELD}.`,
          damage: "6*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Chaos rampant",
          description: `Retire tous les débuffs sur ce Champion, puis attaque tous les ennemis. Après l'attaque, place un buff ${BUFFS.ATK} de 50 % et un buff ${BUFFS.CDAM} de 30 % sur ce Champion pendant 1 tour.`,
          damage: "3.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Incarné [P]",
          description: `Les ennemis sous débuffs ${DEBUFFS.LOCK_ACTIVE}, ${DEBUFFS.BLOCK_BUFFS} et ${DEBUFFS.HEALS} ne peuvent pas réduire le Compteur de Tour de ce Champion.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "13 875",
        "ATQ": "1 409",
        "DEF": "969",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Augmente la statistique TAUX DE C. des Alliés lors des Donjons de 24%`,
};
