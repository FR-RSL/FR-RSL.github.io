const championForms = {
  form1: {
    type: "PV",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Arc d'ignition",
          description: `Attaque 3 fois un ennemi.${RETURN}${RETURN}

Chaque frappe a 50% de chances d'augmenter d'1 tour la durée de tous les débuffs de la cible.${RETURN}${RETURN}

Chaque frappe a 100% de chances d'augmenter d'1 tour la durée d'un débuff ${DEBUFFS.BURN} sur la cible si les chances initiales ne se sont pas activées.`,
          damage: "0.09*PV",
          levelInfo: ["Dégâts +20%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tempête pyroclaste",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Active instantanément un déclenchement de tous les débuffs ${DEBUFFS.BURN} sur tous les ennemis et alliés.${RETURN}${RETURN}

Dès que cette compétence active un débuff ${DEBUFFS.BURN} sur un ennemi, réduit sa RÉS de 10 points (s'accumule jusqu'à 100). Dès que cette compétence active un débuff ${DEBUFFS.BURN} sur un allié, augmente sa RÉS de 10 points (s'accumule jusqu'à 100).${RETURN}${RETURN}

Remplit également le Compteur de Tour de tous les alliés de 5% pour chaque débuff ${DEBUFFS.BURN} activé sur les ennemis.`,
          damage: "0.26*PV",
          cooldown: 5,
          levelInfo: ["Dégâts +20%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Couronné de flammes",
          description: `Place un débuff ${DEBUFFS.WEAKEN} de 25% et un débuff ${DEBUFFS.BURN} sur tous les ennemis pendant 2 tours.${RETURN}${RETURN}

Place également un buff ${DEBUFFS.BURN} sur tous les alliés pendant 2 tours. Il est impossible de résister à ce débuff et de le bloquer.${RETURN}${RETURN}

Remplit ensuite le Compteur de Tour de tous les alliés de 30%.`,
          cooldown: 3,
          levelInfo: ["Ignorer la RES +20%"],
          isPassive: false
        },
        {
          img: "assets/meta1.webp",
          name: "Métamorphe",
          description: `Fait passer ce Champion à sa Forme alternative. Accorde ensuite un Tour supplémentaire.`,
          cooldown: 4,
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Que le feu te soigne [P]",
          description: `Chaque débuff ${DEBUFFS.BURN} placé par ce Champion sous sa Forme de base augmente ses PV MAX et sa DÉF de 5% (s'accumule jusqu'à 25% pour les deux Formes et ne se réinitialisera pas).${RETURN}${RETURN}

Les débuffs ${DEBUFFS.BURN} placés sur les alliés les soignent au lieu de leur infliger des dégâts.${RETURN}${RETURN}

Les alliés infligent 3% de dégâts en plus pour chaque débuff ${DEBUFFS.BURN} actif. Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de ce Champion si ce Champion spécifique est mort.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "23 130",
        "ATQ": "1 013",
        "DEF": "1 299",
        "VIT": "115",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/hp.webp",
    description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 35%`,
  },
  },
  form2: {
    type: "Défense",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Étoile de tonnerre",
          description: `Attaque 2 fois un ennemi. A 25% de chances de répéter chaque frappe.${RETURN}${RETURN}

Chaque frappe place également un débuff ${DEBUFFS.DEF} de 60% pendant 2 tours.`,
          damage: "1.9*DEF",
          levelInfo: ["Chances de Buff/Debuff +15%", "Dégâts +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Geyser de magma",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Applique un effet de ${PROP_DEBUFF}, prenant tous les débuffs sur la cible pour les placer sur tous les ennemis.${RETURN}${RETURN}

Ensuite, répète l'attaque sur tous les ennemis. Augmente d'1 tour la durée de tous les débuffs de tous les ennemis.${RETURN}${RETURN}

Les deux attaques ignoreront 20% de la DÉF de chaque cible.`,
          damage: "4.9*DEFMultiplier: 3.7*DEF",
          cooldown: 3,
          levelInfo: ["Dégâts +10%", "Dégâts +20%"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Écrasement de cataclysme",
          description: `Attaque tous les ennemis. Avant d'attaquer, place un buff ${BUFFS.DEF} de 60% et un buff ${BUFFS.CDAM} de 30% sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

Place un débuff ${DEBUFFS.PROVOKE} pendant 1 tour. Si la cible de cette compétence est un Boss, place au lieu de ça un débuff ${DEBUFFS.PROVOKE} pendant 2 tours.${RETURN}${RETURN}

Cette attaque ne peut pas être une frappe faible lorsqu'elle touche des ennemis sous débuff ${DEBUFFS.BURN}.`,
          damage: "4.5*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +20%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/meta2.webp",
          name: "Métamorphe",
          description: `Fait passer ce Champion à sa Forme de base. Accorde ensuite un Tour supplémentaire.`,
          cooldown: 4,
          isPassive: false
        },
        {
          img: "assets/passif2.webp",
          name: "Que le feu te brise [P]",
          description: `Chaque débuff ${DEBUFFS.BURN} placé par ce Champion sous sa Forme de base augmente les PV MAX et la DÉF de ce Champion de 5% (s'accumule jusqu'à 25% pour les deux Formes et ne se réinitialisera pas).${RETURN}${RETURN}

Toutes les compétences de ce Champion ignoreront 20% de la DÉF de l'ennemi si ce dernier se trouve sous débuff ${DEBUFFS.BURN}.${RETURN}${RETURN}

Les débuffs ${DEBUFFS.BURN} placés sur les alliés les soignent au lieu de leur infliger des dégâts.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "19 650",
        "ATQ": "947",
        "DEF": "1 597",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/hp.webp",
    description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 35%`,
  },
  },
};
