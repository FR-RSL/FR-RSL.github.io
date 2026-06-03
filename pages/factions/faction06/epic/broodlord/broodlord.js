const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tacticien patient",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 30% de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 1 tour si la cible est affligée d'un débuff ${DEBUFFS.SPD}.`,
          damage: "1.6*DEF",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Défendre le Nid",
          description: `Place sur un allié un buff ${BUFFS.ALLY_PROTECT} de 50% pendant 2 tours, puis un buff ${BUFFS.BLOCK_DEBUFFS} pendant 1 tour.${RETURN}${RETURN}

Place également sur ce Champion un buff ${BUFFS.SHIELD} équivalent à 20% de ses PV MAX pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Frisson primitif",
          description: `Attaque tous les ennemis. Possède 40% de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour. Les chances passent à 75% contre les ennemis sous débuffs ${DEBUFFS.SPD}.`,
          damage: "3.8*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Garde-ufs [P]",
          description: `Dès que ce Champion se fait attaquer, ou dès que les alliés sous buffs ${BUFFS.ALLY_PROTECT} se font attaquer, possède 30% de chances de placer un débuff ${DEBUFFS.SPD} de 30% sur l'assaillant pendant 2 tours.`,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 340",
        "ATQ": "727",
        "DEF": "1 421",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 25%`,
};
