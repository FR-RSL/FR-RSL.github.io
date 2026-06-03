const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hache du désert",
          description: `Attaque un ennemi. Possède 50 % de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 1 tour.`,
          damage: "3.6*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fendre la terre",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Réduit d'1 tour la durée de tous les buffs des ennemis, puis augmente d'1 tour la durée de tous les buffs des alliés.${RETURN}${RETURN}

Place également sur tous les alliés un buff ${BUFFS.SHIELD} pendant 2 tours, équivalent à 20 % des PV MAX de ce Champion.`,
          damage: "3.8*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Hurlement bestial",
          description: `Place un buff ${BUFFS.ATK} de 50 % et un buff ${BUFFS.PRE} de 50 % sur tous les alliés pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Monolithe du désert [P]",
          description: `Lorsqu'il se fait attaquer, possède 20 % de chances de placer un débuff ${DEBUFFS.PROVOKE} sur l'assaillant pendant 1 tour. Se produit une fois par frappe.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 485",
        "ATQ": "793",
        "DEF": "1 487",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/sup-defence.webp",
  description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 25%${RETURN}${RETURN}

(ne s'applique qu'à la Faction des Barbares)${RETURN}${RETURN}

Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 40`,
};
