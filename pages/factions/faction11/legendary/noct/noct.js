const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Brume de douleur",
          description: `Attaque un ennemi. Possède 50 % de chances de placer un débuff ${DEBUFFS.PRE} de 50 % pendant 2 tours.`,
          damage: "0.23*PV",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Trépas du rêveur",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.SLEEP} pendant 1 tour et deux débuffs ${DEBUFFS.POISON} de 5 % pendant 2 tours.${RETURN}${RETURN}

${PASSIVE}

Place deux débuffs ${DEBUFFS.POISON} de 5 % supplémentaires pendant 2 tours dès qu'un débuff ${DEBUFFS.SLEEP} placé par cette compétence est retiré ou disparaît après qu'un ennemi a subi des dégâts.`,
          damage: "0.25*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Vapeurs enivrantes",
          description: `Place un buff ${BUFFS.ALLY_PROTECT} de 50 % sur tous les alliés sauf ce Champion pendant 2 tours. Place également un buff ${BUFFS.HEALS} de 15 % sur tous les alliés pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Somnolence [P]",
          description: `Soigne ce Champion de 3 % de ses PV MAX, et tous les alliés sauf ce Champion de 1 % des PV MAX de ce Champion, chaque fois qu'un débuff ${DEBUFFS.POISON} se déclenche sur un ennemi.${RETURN}${RETURN}

Lorsqu'un allié est attaqué alors qu'il se trouve sous buff ${BUFFS.ALLY_PROTECT}, possède 40 % de chances de placer un débuff ${DEBUFFS.SLEEP} sur l'assaillant pendant 1 tour.`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "22 470",
        "ATQ": "826",
        "DEF": "1 255",
        "VIT": "99",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "40",
        "PRE": "20"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Allies dans les Donjons de 35%.`
};
