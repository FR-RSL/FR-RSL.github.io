const championForms = {
  form1: {
    type: "PV",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Écrase-ennemi",
          description: `Attaque un ennemi. Avant d'attaquer, retire tous les buffs sur la cible.${RETURN}${RETURN}

Augmente de 2 tours le temps de recharge d'une compétence aléatoire de la cible même si cette attaque est une frappe faible.`,
          damage: "0.28*PV+1*ATQ",
          levelInfo: ["Dégâts +10%", "Ignorer la RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Marteau-séisme",
          description: `Attaque tous les ennemis. Place un débuff ${DEBUFFS.PROVOKE} sur tous les ennemis pendant 1 tour. Ce débuff ignorera les buffs ${BUFFS.BLOCK_DEBUFFS} et peut être placé même si cette attaque est une frappe faible.${RETURN}${RETURN}

Place également un buff ${BUFFS.UNKILLABLE} protégé et un buff ${BUFFS.COUNTER} sur cette Championne pendant 3 tours.`,
          damage: "0.25*PV+1*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +20%", "Ignorer la RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Liés par le sang",
          description: `Retire tous les débuffs sur tous les alliés et place un buff ${BUFFS.ALLY_PROTECT} de 50% sur tous les alliés sauf cette Championne pendant 2 tours.${RETURN}${RETURN}

Place également sur tous les alliés un buff ${BUFFS.SHIELD} équivalent à 30% des PV MAX de cette Championne pendant 2 tours. Augmente la valeur du ${BUFFS.SHIELD} de 3% supplémentaires des PV MAX de cette Championne pour chaque débuff retiré par cette compétence.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/meta1.webp",
          name: "Métamorphe",
          description: `Fait passer cette Championne à sa Forme alternative. Accorde ensuite un Tour supplémentaire.`,
          cooldown: 4,
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Tuer ou soigner [P]",
          description: `Lorsqu'elle est attaquée, réduit d'1 tour la durée de tous les buffs de l'assaillant. Se produit une fois par frappe.${RETURN}${RETURN}

Soigne également tous les alliés sauf cette Championne à hauteur de 50% des dégâts subis, et soigne cette Championne de 25% des dégâts subis, dès que cette Championne est frappée. Se produit une fois par frappe.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "23 955",
        "ATQ": "958",
        "DEF": "1 299",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/hp.webp",
    description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 35%`,
  },
  },
  form2: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Cognement de magma",
          description: `Attaque tous les ennemis. A 25% de chances de répéter l'attaque. Ignorera les buffs ${BUFFS.BLOCK_DAMAGE}.`,
          damage: "2.7*ATQ+0.12*PV",
          levelInfo: ["Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Massue calamiteuse",
          description: `Attaque tous les ennemis. Les dégâts de cette compétence augmentent de 10% pour chaque buff sur cette Championne et sur la cible.${RETURN}${RETURN}

Ignorera 30% de la DÉF de la cible. Ignorera au lieu de cela 50% de la DÉF de la cible si cette Championne a plus de buffs que la cible.`,
          damage: "4*ATQ+0.12*PV",
          cooldown: 3,
          levelInfo: ["Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/meta2.webp",
          name: "Métamorphe",
          description: `Fait passer cette Championne à sa Forme de base. Accorde ensuite un Tour supplémentaire.`,
          cooldown: 4,
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Brume pourpre [P]",
          description: `Dès qu'un allié attaque, cette Championne a 50% de chances de faire équipe avec lui et de rejoindre l'attaque.${RETURN}${RETURN}

Cette Championne inflige plus de dégâts à mesure que ses PV diminuent (1% supplémentaire par tranche de 1% de PV perdus).${RETURN}${RETURN}

Cette Championne reçoit moins de dégâts à mesure que ses PV diminuent (0,5% de moins par tranche de 1% de PV perdus).`,
          cooldown: 2,
          isPassive: false
        },
        {
          img: "assets/passif2.webp",
          name: "Animal acculé",
          description: `Retire tous les débuffs dont cette Championne est affligée.${RETURN}${RETURN}

Place un buff ${BUFFS.ATK} de 50%, un buff ${BUFFS.CDAM} de 30% et un buff ${BUFFS.CRATE} de 30% sur tous les alliés pendant 3 tours.${RETURN}${RETURN}

Accorde un Tour supplémentaire.${RETURN}${RETURN}

[Cette compétence se débloque lorsque cette Championne a 3 débuffs ou plus, ou lorsque cette Championne a 50% de PV ou moins.]`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "16 020",
        "ATQ": "1 608",
        "DEF": "1 178",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "50",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/hp.webp",
    description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 35%`,
  },
  },
};
