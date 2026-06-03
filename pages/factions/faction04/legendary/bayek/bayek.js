const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Frappe de khépesh",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Place un débuff ${DEBUFFS.LEECH} pendant 2 tours.${RETURN}${RETURN}

Remplit le Compteur de Tour de ce Champion de 20%.`,
          damage: "3.3*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Zéphyr du désert",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Place un débuff ${DEBUFFS.PRE} de 50% et un débuff ${DEBUFFS.RES} de 50% pendant 2 tours. Place également un débuff ${DEBUFFS.PROVOKE} sur tous les ennemis pendant 1 tour. Si la cible est affligée de 3 débuffs ou plus, place au lieu de cela un débuff ${DEBUFFS.PROVOKE} pendant 2 tours.`,
          damage: "3.8*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Prière du Medjaÿ",
          description: `Place un buff ${BUFFS.PRE} de 50% sur tous les alliés pendant 2 tours. Place un buff ${BUFFS.PERFECT_VEIL} et un buff ${BUFFS.DEF} de 60% sur tous les alliés sauf ce Champion pendant 2 tours.${RETURN}${RETURN}

Place un buff ${BUFFS.DEF} de 60% sur ce Champion pendant 3 tours.${RETURN}${RETURN}

Accorde ensuite un Tour supplémentaire.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Tout est permis [P]",
          description: `Dès que les PV d'un ennemi tombent sous 25% après avoir reçu des dégâts de n'importe quel Assassin, il reçoit des dégâts bonus supplémentaires proportionnels à la DÉF de ce Champion. Ces dégâts bonus ignoreront 100% de la DÉF de la cible et ne peuvent pas être critiques.`,
          isPassive: true
        },
        {
          img: "assets/passif1.webp",
          name: "Fierté de Siwa [P]",
          description: `Ce Champion et ses alliés ne peuvent pas recevoir de frappes critiques de la part des ennemis dont la PRÉ est inférieure ou égale à leur propre PRÉ.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 330",
        "ATQ": "683",
        "DEF": "1 674",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 70`,
};
