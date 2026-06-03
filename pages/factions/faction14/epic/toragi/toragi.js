const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Gourdin de Marais",
          description: `Attaque un ennemi. Possède 30 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % pendant 2 tours.`,
          damage: "0.2*PV",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Odeur Nauséabonde",
          description: `Attaque tous les ennemis. Possède 50 % de chances de placer 1 débuff ${DEBUFFS.PROVOKE} pendant 1 tour. Les chances augmentent de 5 % pour chaque débuff sur l'équipe ennemie.`,
          damage: "0.2*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Bénédiction de Marais",
          description: `Place sur tous les alliés sauf ce Champion un buff ${BUFFS.SHIELD} équivalent à 15 % des PV MAX de ce Champion et un buff ${BUFFS.ALLY_PROTECT} de 50 % pendant 2 tours.${RETURN}${RETURN}

Soigne également ce Champion de 25 % de ses PV MAX, puis place un buff ${BUFFS.REFLECT_DAM} de 30 % pendant 3 tours.${RETURN}${RETURN}

Le soin augmente de 2,5 % pour chaque débuff ${DEBUFFS.POISON} dont est affligée l'équipe ennemie.`,
          cooldown: 5,
          levelInfo: ["Soins +5%", "Soins +10%", "Bouclier +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Sang Toxique [P]",
          description: `Lorsque ce Champion est attaqué, possède 50 % de chances de placer un débuff ${DEBUFFS.POISON} de 5 % sur l'assaillant pendant 2 tours. Se produit une fois par frappe.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 810",
        "ATQ": "892",
        "DEF": "958",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors de toutes les Batailles de 40`,
};
