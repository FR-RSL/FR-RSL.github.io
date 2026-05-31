const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Main Rasante",
          description: `Attaque 1 ennemi. Réduit d'1 tour le compte à rebours de la détonation du débuff de ${DEBUFFS.BOMB}.`,
          damage: "4.6*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Pluie de Feu",
          description: `Attaque 3 fois au hasard. Réduit d'1 tour le compte à rebours de la détonation du débuff ${DEBUFFS.BOMB}.`,
          damage: "2.3*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Explosion de Magma",
          description: `Attaque 2 fois tous les ennemis. Chaque frappe possède 75 % de chances de placer un débuff ${DEBUFFS.BOMB} qui détonera après 3 tours.`,
          damage: "2.2*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Embraser [P]",
          description: `Lorsque ce Champion meurt, place sur chaque ennemi deux débuffs ${DEBUFFS.BOMB} qui détoneront après 2 tours.`,
          cooldown: 5,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 340",
        "ATQ": "1 299",
        "DEF": "848",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
