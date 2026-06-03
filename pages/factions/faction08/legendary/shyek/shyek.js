const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Ordre de tuer",
          description: `Attaque un ennemi. A 50 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours.${RETURN}${RETURN}

Ensuite, fait équipe avec les Bêteffroyables, Masquegores, Rejetons de Cabot, Crocs Infernaux, Chiens Cruels, Bêtes Suturées et Kro'khad Coupe-gorge alliés pour attaquer. Les alliés qui rejoignent l'attaque utiliseront leurs compétences par défaut.`,
          damage: "0.2*HP",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Alpha de meute",
          description: `Retire tous les débuffs sur ce Champion, puis le soigne de 50 % de ses PV MAX.${RETURN}${RETURN}

Ensuite, place un buff ${BUFFS.SHIELD} sur ce Champion pendant 2 tours. La valeur du ${BUFFS.SHIELD} est égale à tout surplus de soin. Il est impossible de retirer, voler et transférer le buff ${BUFFS.SHIELD} si au moins une Bêteffroyable, un Masquegore, un Rejeton de Cabot, un Croc Infernal, un Chien Cruel, une Bête Suturée ou Kro'khad Coupe-gorge se trouve dans la même équipe.${RETURN}${RETURN}

Enfin, place un buff ${BUFFS.TAUNT} et un buff ${BUFFS.REFLECT_DAM} de 30 % sur ce Champion pendant 2 tours. Il est impossible de retirer, voler et transférer ces buffs si au moins une Bêteffroyable, un Masquegore, un Rejeton de Cabot, un Croc Infernal, un Chien Cruel, une Bête Suturée ou Kro'khad Coupe-gorge se trouve dans la même équipe.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Hurlement sanglant",
          description: `Remplit les Compteurs de Tour de tous les alliés de 25 %.${RETURN}${RETURN}

A également 80 % de chances de placer un débuff ${DEBUFFS.BLOCK_BUFFS} sur tous les ennemis pendant 2 tours. Il est impossible de résister à ce débuff si au moins une Bêteffroyable, un Masquegore, un Rejeton de Cabot, un Croc Infernal, un Chien Cruel, une Bête Suturée ou Kro'khad Coupe-gorge se trouve dans la même équipe.`,
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Nous chassons unis [P]",
          description: `Lorsque ce Champion est attaqué, place un débuff ${DEBUFFS.HEX} sur l'assaillant pendant 1 tour. Les attaques lancées par des alliés sur des cibles affligées d'un débuff ${DEBUFFS.HEX} placé par ce Champion infligent 20 % de dégâts en plus.${RETURN}${RETURN}

Lorsque ce Champion se fait attaquer, les Bêteffroyables, Masquegores, Rejetons de Cabot, Crocs Infernaux, Chiens Cruels, Bêtes Suturées et Kro'khad Coupe-gorge alliés contre-attaqueront.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 305",
        "ATQ": "870",
        "DEF": "1 222",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 19%`,
};
