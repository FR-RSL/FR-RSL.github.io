const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Frappe décapitante",
          description: `Attaque un ennemi. Avant d'attaquer, réduit d'1 tour la durée de tous les buffs de la cible.${RETURN}${RETURN}

A également 75 % de chances de placer un débuff ${DEBUFFS.BLOCK_BUFFS} pendant 2 tours. Ce débuff est protégé lorsqu'il est placé sur des Boss.`,
          damage: "0.23*PV",
          levelInfo: ["Dégâts +15%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Furie gaelienne",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

A 75 % de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour et un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours.${RETURN}${RETURN}

Réduit de 30 % le Compteur de Tour des ennemis sans débuff ${DEBUFFS.STUN}.`,
          damage: "0.28*PV",
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Sang du Pacte",
          description: `Retire tous les débuffs sur tous les alliés, puis les soigne à hauteur de 25 % des PV MAX de ce Champion.${RETURN}${RETURN}

Place sur tous les alliés un buff ${BUFFS.SHIELD} équivalent à 25 % des PV MAX de ce Champion et un buff ${BUFFS.FORTIFY} de 25 % pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Bouclier +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "La liberté ou la mort [P]",
          description: `Pour tous les 10 débuffs que reçoit l'équipe de ce Champion, active la compétence Sang du Pacte. Lorsqu'elle est activée ainsi, les buffs placés par la compétence Sang du Pacte sont protégés. Ne place pas la compétence Sang du Pacte en temps de recharge.${RETURN}${RETURN}

Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de ce Champion si ce Champion spécifique est mort.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "23 460",
        "ATQ": "914",
        "DEF": "1 101",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 35%`,
};
