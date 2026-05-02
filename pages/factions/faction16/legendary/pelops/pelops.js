const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.png",
          name: "Coup triomphal",
          description: `Attaque un ennemi.${RETURN}${RETURN}
A 75% de chances de placer un debuff ${DEBUFFS.ATK} de 50% pendant 2 tours. Il est impossible de resister a ce debuff et de le bloquer si la cible se trouve sous debuff ${DEBUFFS.BURN}.`,
          damage: "0.25*PV",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +15%", "Chances de Buff/Debuff +15%"],
        },
        {
          img: "assets/sort2.png",
          name: "Fleau de Gorgoa",
          description: `Attaque un ennemi.${RETURN}${RETURN}
Ignorera 50% de la DEF de la cible si la cible est afflige d'un debuff ${DEBUFFS.BURN}.
Les degats infliges par cette Competence augmentent de 10% pour chaque tour restant sur les debuffs dont sont affliges ce Champion et la cible (s'accumule jusqu'a 200%).${RETURN}${RETURN}
Si les degats infliges par cette competente sous inferieurs a 50% des PV MAX de la cible, vole tout les buffs de la cible et place un debuff ${DEBUFFS.STUN} pendant 2 tours. Il est impossible de resister a ces effets si la cible se trouve sous debuff ${DEBUFFS.BURN}.`,
          damage: "0.4*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.png",
          name: "Butin du vainqueur",
          description: `${ACTIVE}
Place un buff ${BUFFS.ATK} de 50% et un buff ${BUFFS.SHIELD_MAGMA} sur tous les allies pendant 2 tours.
La valeur du ${BUFFS.SHIELD_MAGMA} est egale a 30% des PV MAX de ce Champion.${RETURN}${RETURN}
Place egalement un buff ${BUFFS.TAUNT} sur ce Champion pendant 2 tours.${RETURN}${RETURN}${PASSIVE}
Reduit de 20% les degats que recoivent tous les allies lorsque ce Champion ne se trouve pas sous debuff ${DEBUFFS.DEF}.`,
          cooldown: 4,
          levelInfo: ["Bouclier +10%", "Bouclier +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.png",
          name: "Maitre des Jeux [P]",
          description: `Ce Champion est immunise contre les debuffs ${DEBUFFS.STUN}, ${DEBUFFS.BURN} et ${DEBUFFS.PETRIFICATION}.${RETURN}${RETURN}
Des qu'un ennemi attaque ce Champion, a 100% de chances de placer un debuff ${DEBUFFS.BURN} sur cet ennemi pendant 2 tours.
Les chances passent a 50% si ce Champion se trouve sous debuff ${DEBUFFS.DEF}. Se produit une fois par competence ennemie.${RETURN}${RETURN}

Des qu'un ennemi attaque ce Champion, a egalement 50% de chances de placer un debuff ${DEBUFFS.PETRIFICATION} sur cet ennemi pendant 1 tour. Les chances passent a 25% si ce Champion se trouve sous debuff ${DEBUFFS.DEF}. Se produit une fois par competence ennemie.`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "22 800",
        "ATQ": "749",
        "DEF": "1 310",
        "VIT": "97",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "50",
        "PRE": "10"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/res.png",
  description: `Augmente la statistique RES des Allies lors de toutes les Batailles de 60.`
};
