const championData = {
  type: "Defense",
  spells: [
        {
          img: "assets/sort1.png",
          name: "Attraper une proie",
          description: `Attaque un ennemi.${RETURN}${RETURN}
A 40% de chances de placer un debuff ${DEBUFFS.PROVOKE} pendant 1 tour.`,
          damage: "3.5*DEF",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort2.png",
          name: "Purifications des marees",
          description: `Retire tous les debuffs de ce Champion et d'une seule cible allie.${RETURN}${RETURN}
Place un buff ${BUFFS.ALLY_PROTECT} de 50%, un buff ${BUFFS.STRENGTHEN} de 25% et un buff ${BUFFS.ATK} de 50% sur cette cible pendant 2 tours.${RETURN}${RETURN}
Remplit ensuite de 15% les Compteurs de Tour de ce Champion et de la cible alliee.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.png",
          name: "Vague du serpent de mer",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}
A 80% de chances de placer un debuff ${DEBUFFS.WEAKEN} de 25% pendant 2 tours. A egalement 40% de chances de placer un debuff ${DEBUFFS.STUN} pendant 1 tour.`,
          damage: "4*DEF",
          cooldown: 6,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.png",
          name: "Pouvoir tritoneen [P]",
          description: `Des qu'un ennemi attaque ce Champion, soigne tous les allies de 10% de leurs PV MAX, puis remplit leurs Compteurs de Tour de 10%.${RETURN}
Des qu'un ennemi attaque ce Champion, place egalement sur tous les allies un buff ${BUFFS.SPD} de 30% pendant 1 tour.`,
          cooldown: 3,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: true,
        }
  ],
  stats: {
        "PV": "17 175",
        "ATQ": "892",
        "DEF": "1 266",
        "VIT": "98",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "45",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/sup-defence.png",
  description: `Augmente la statistique DEF des Allies lors de toutes les Batailles de 25%.`
};
