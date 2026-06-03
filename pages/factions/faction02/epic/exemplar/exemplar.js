const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Posture Haute",
          description: `Attaque 2 fois un ennemi. Place un coup supplémentaire si cette attaque passe en critique.${RETURN}${RETURN}

Place une des compétences de la cible en recharge complète si la première frappe passe en critique et si la cible se trouve sous débuff ${DEBUFFS.WEAKEN}.${RETURN}${RETURN}

Augmente de 2 tours le temps de recharge d'une des compétences de la cible si la première frappe passe en critique et si la cible ne se trouve pas sous débuff ${DEBUFFS.WEAKEN}.`,
          damage: "1.7*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Attaque en Tenailles",
          description: `Attaque 3 fois au hasard. Chaque frappe possède 75 % de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25 % pendant 2 tours.`,
          damage: "2.1*ATQ",
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Capturer",
          description: `Attaque un ennemi. Possède 75 % de chances de placer un débuff ${DEBUFFS.GEL} pendant 1 tour et un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 2 tours.`,
          damage: "6.4*ATQ",
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 545",
        "ATQ": "1 509",
        "DEF": "892",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `
Augmente la statistique TAUX DE C. des Alliés lors des batailles d'Arène de 27%`,
};
