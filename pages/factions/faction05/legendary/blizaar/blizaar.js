const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Chausse-trappes gelées",
          description: `Attaque 3 fois de façon aléatoire. Chaque frappe possède 40% de chances de placer un débuff ${DEBUFFS.GEL} pendant 1 tour.`,
          damage: "1.5*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Cryothérapie",
          description: `Retire les débuffs ${DEBUFFS.STUN}, ${DEBUFFS.SLEEP}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.GEL}, ${DEBUFFS.PROVOKE} et ${DEBUFFS.PETRIFICATION} sur tous les alliés.${RETURN}${RETURN}

Ensuite, place un buff ${BUFFS.DEF} de 60% sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

Place également un buff ${BUFFS.ALLY_PROTECT} de 50% sur tous les alliés sauf ce Champion pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Blizzard de pics",
          description: `Attaque tous les ennemis. Possède 75% de chances de placer un débuff ${DEBUFFS.GEL} pendant 1 tour.${RETURN}${RETURN}

Possède également 75% de chances de réduire le Compteur de Tour de tous les ennemis de 30%.`,
          damage: "4.3*DEF",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Abominable ogryneige [P]",
          description: `${PASSIVE}

Dès qu'un ennemi essaie de placer un débuff ${DEBUFFS.GEL} sur ce Champion, le transfère instantanément de ce Champion sur l'ennemi.${RETURN}${RETURN}

${ACTIVE}

Dès que ce Champion est tué, le ranime avec 30% de PV et 30% de Compteur de Tour, puis lui accorde un buff ${BUFFS.REVIVE_ON_DEATH} pendant 1 tour.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 145",
        "ATQ": "804",
        "DEF": "1 432",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = null;
