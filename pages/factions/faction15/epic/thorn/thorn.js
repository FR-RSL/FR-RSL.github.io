const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lames-vignes",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

Chaque frappe a 25% de chances de placer un débuff ${DEBUFFS.LEECH} pendant 2 tours.`,
          damage: "1.7*DEF",
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Visage terrifiant",
          description: `Attaque 2 fois tous les ennemis.${RETURN}${RETURN}

La première frappe a 75% de chances de placer un débuff ${DEBUFFS.FEAR} pendant 1 tour. La seconde frappe a 75% de chances de placer un débuff ${DEBUFFS.PRE} de 50% pendant 2 tours.`,
          damage: "1.9*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Uni à la corruption",
          description: `Place un buff ${BUFFS.DEF} de 60% sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

Place également un buff ${BUFFS.COUNTER} et un buff ${BUFFS.RES} de 50% sur ce Champion pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Dark Sustenance [P]",
          description: `Before this Champion uses a skill to deal damage, heals this Champion. The value of the heal is proportional to this Champion’s DEF.<br><br>Heal Multiplier: 0.5*DEF`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 835",
        "ATQ": "727",
        "DEF": "1 387",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors de toutes les Batailles de 40`,
};
