const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Shotels Perçants",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 30% de chances de placer un débuff ${DEBUFFS.DEF} de 60% pendant 2 tours.`,
          damage: "3.2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Ichors Mortels",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 75% de chances de placer un débuff ${DEBUFFS.PRE} de 50% et un débuff ${DEBUFFS.POISON} de 5% pendant 3 tours.`,
          damage: "2.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Festin d'Âmes",
          description: `Attaque un ennemi. Possède 75% de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25% pendant 2 tours. Soigne ce Champion à hauteur de 50% des dégâts infligés.`,
          damage: "6*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Revenant [P]",
          description: `${PASSIVE}

Place un buff ${BUFFS.DEF} de 60% sur ce Champion pendant 2 tours lorsque ses PV tombent sous 75%.${RETURN}${RETURN}

Place un buff ${BUFFS.ATK} de 50% sur ce Champion pendant 2 tours lorsque ses PV tombent sous 50%.${RETURN}${RETURN}

${ACTIVE}

Accorde un Tour Supplémentaire lorsque les PV de ce Champion tombent sous 10%.`,
          cooldown: 5,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 205",
        "ATQ": "1 542",
        "DEF": "815",
        "VIT": "90",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
