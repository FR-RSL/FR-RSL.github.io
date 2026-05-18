const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lames-fissure",
          description: `Attaque 2 fois tous les ennemis.${RETURN}${RETURN}
A 25% de chances de placer un debuff ${DEBUFFS.STUN} pendant 1 tour.`,
          damage: "0.11*PV",
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Presence volcanique",
          description: `Attaque 2 fois tous les ennemis. Avant d'attaquer, place un buff ${BUFFS.SHATTER} de 15% sur ce Champion pendant 2 tours. Ignorera les buffs ${BUFFS.SHIELD}, ${BUFFS.STRENGTHEN} et ${BUFFS.DEF}.${RETURN}${RETURN}
Chaque frappe augmente de 2 tours les temps de recharge de toutes les competences des ennemis.`,
          damage: "0.15*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Rempart flamboyant",
          description: `Place un buff ${BUFFS.TAUNT} et un buff ${BUFFS.POISON_CLOUD} sur ce Champion pendant 3 tours.${RETURN}
Place egalement sur tous les allies un buff ${BUFFS.SHIELD} protege equivalent a 30% des PV MAX de ce Champion pendant 2 tours.${RETURN}${RETURN}
Accorde ensuite un Tour supplementaire.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Haleine sulfureuse [P]",
          description: `Au debut de chaque Round, place un buff ${BUFFS.POISON_CLOUD} sur ce Champion pendant 1 tour.${RETURN}${RETURN}
Reduit de 50% les degats infliges a ce Champion par les coups critiques.${RETURN}${RETURN}
Des qu'un ennemi frappe ce Champion, augmente de 5% les PV MAX de ce Champion. Les frappes faibles augmentent les PV MAX de ce Champion de 10%. S'accumule jusqu'a 100%.`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "22 305",
        "ATQ": "705",
        "DEF": "1 387",
        "VIT": "98",
        "TAUX C.": "15%",
        "DEG C.": "63%",
        "RES": "40",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 33%.`
};
