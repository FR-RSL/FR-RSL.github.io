const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Écharde de bambou",
          description: `Attaque un ennemi. Possède 75% de chances de placer un débuff ${DEBUFFS.SPD} de 30% pendant 2 tours.${RETURN}${RETURN}

Si la cible initiale est affligée de 2 débuffs ou plus, attaquera tous les ennemis au lieu de ça. Cette attaque possède 75% de chances de placer un débuff ${DEBUFFS.SPD} de 30% pendant 2 tours.${RETURN}${RETURN}

Ensuite, place un débuff ${DEBUFFS.SLEEP} sur ce Champion pendant 1 tour. Il est impossible de résister à ce débuff ou de le bloquer.`,
          damage: "3.8*ATQ",
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Soigne-bosquet",
          description: `Attaque tous les ennemis. Avant d'attaquer, place pendant 2 tours un buff ${BUFFS.SHIELD} équivalent à 30% des PV MAX de ce Champion sur tous les alliés. Augmente également d'1 tour la durée de tous les buffs de tous les alliés.${RETURN}${RETURN}

Après avoir attaqué, possède 75% de chances de réduire d'1 tour la durée de tous les buffs ennemis, même si l'attaque est une frappe faible. Augmente également de 3% la valeur des buffs ${BUFFS.SHIELD} sur tous les alliés pour chaque buff ennemi dont la durée a été réduite par cette compétence.${RETURN}${RETURN}

Ensuite, place un débuff ${DEBUFFS.SLEEP} sur ce Champion pendant 1 tour. Il est impossible de résister à ce débuff ou de le bloquer.`,
          damage: "5.6*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Vision de rêve",
          description: `Cible un ennemi.${RETURN}${RETURN}

Place tout d'abord un buff ${BUFFS.PRE} de 50% et un buff ${BUFFS.ATK} de 50% sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

Ensuite, a 75% de chances de placer un débuff ${DEBUFFS.UNFEEBLE} et un débuff ${DEBUFFS.PRE} de 50% sur tous les ennemis pendant 2 tours. Il est impossible de placer le buff ${DEBUFFS.UNFEEBLE} sur les Boss. Au lieu de cela, a 75% de chances de placer un débuff ${DEBUFFS.ATK} de 50% sur les Boss pendant 2 tours.${RETURN}${RETURN}

Enfin, place un débuff ${DEBUFFS.SLEEP} sur ce Champion pendant 1 tour. Il est impossible de résister à ce débuff ou de le bloquer.`,
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Sage endormi [P]",
          description: `${PASSIVE}

Possède 75% de chances de transférer sur ce Champion les débuffs placés sur un allié lorsqu'il se trouve sous débuff ${DEBUFFS.SLEEP}. Ne transférera pas les débuffs ${DEBUFFS.BLOCK_REA}, ${DEBUFFS.STUN}, ${DEBUFFS.GEL}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.PETRIFICATION}, et ${DEBUFFS.SHEEP}.${RETURN}${RETURN}

Au début du tour de ce Champion, retire les débuffs ${DEBUFFS.SLEEP} sur ce Champion.${RETURN}${RETURN}

${ACTIVE}

Transfère tous les débuffs de ce Champion sur l'ennemi qui a la RÉS la plus élevée si un débuff ${DEBUFFS.SLEEP} a été retiré de ce Champion par sa compétence passive ou par une attaque ennemie. Il est impossible de résister à cet effet et de le bloquer.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 480",
        "ATQ": "870",
        "DEF": "1 277",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 25%`,
};
