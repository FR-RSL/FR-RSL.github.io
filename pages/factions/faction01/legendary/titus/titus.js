const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lame de corbeau",
          description: `Attaque un ennemi.${RETURN}${RETURN}

A 40% de chances de placer un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 2 tours. Il est impossible de résister à cet effet si ce Champion se trouve sous buff ${BUFFS.SHIELD}.${RETURN}${RETURN}

Dès qu'un allié contre-attaque, fait équipe avec les alliés pour attaquer, ou active instantanément une compétence. A également 40% de chances de placer un débuff ${DEBUFFS.LOCK_ACTIVE} sur l'ennemi ciblé pendant 2 tours. Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de ce Champion si ce Champion spécifique est mort.`,
          damage: "3.5*DEF",
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Étudiant de la guerre",
          description: `Attaque un ennemi. Cette attaque est toujours critique si ce Champion se trouve sous buff ${BUFFS.SHIELD}. Cette attaque gagne également un boost de dégâts égal à la différence en pourcentage entre les PV MAX de ce Champion et la valeur des buffs ${BUFFS.SHIELD} dont il bénéficie.${RETURN}${RETURN}

Retire tous les débuffs sur tous les alliés si la cible est tuée. Si la cible survit, place au lieu de cela un débuff ${DEBUFFS.PROVOKE} sur tous les ennemis pendant 1 tour. Il est impossible de résister à cet effet si ce Champion se trouve sous buff ${BUFFS.SHIELD}.`,
          damage: "5.5*DEF*(1+SHIELDS_SUM_VALUE/HP)",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Confident d'Androc",
          description: `Place un buff ${BUFFS.ALLY_PROTECT} de 50%, un buff ${BUFFS.ATK} de 50% et un buff ${BUFFS.SPD} de 30% sur un seul allié pendant 2 tours. Remplit également le Compteur de Tour de cet allié de 40%.${RETURN}${RETURN}

Active instantanément cette compétence à la fin du tour d'un allié si cet allié n'a pas de buff et que ses PV sont inférieurs à 100%. Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de ce Champion si ce Champion spécifique est mort.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Pour seigneur et terre [P]",
          description: `Chaque fois qu'un ennemi frappe un allié, l'attaque suivante de cet allié infligera 10% de dégâts supplémentaires pour chaque frappe qu'il subit (s'accumule jusqu'à 100%). L'augmentation des dégâts se réinitialise après que cet allié a infligé des dégâts.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 495",
        "ATQ": "837",
        "DEF": "1 509",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés Néant lors de toutes les Batailles de 40%`,
};
