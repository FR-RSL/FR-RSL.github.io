const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Libation de Douleur",
          description: `Attaque 2 fois au hasard. Chaque frappe possède 80% de chances de placer un débuff ${DEBUFFS.POISON} de 5% pendant 2 tours.`,
          damage: "2*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Sceau de Gloire nocive",
          description: `Attaque tous les ennemis. Place un débuff ${DEBUFFS.HEX} pendant 2 tours. Place un buff ${BUFFS.DEF} de 60% et un buff ${BUFFS.ATK} de 50% sur tous les alliés pendant 2 tours.`,
          damage: "4*DEF",
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Calice débordant",
          description: `Retire tous les débuffs sur tous les alliés, puis place sur tous les alliés un buff ${BUFFS.STRENGTHEN} de 25% et un buff ${BUFFS.SHIELD} équivalent à 30% des PV MAX de cette Championne pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Regard de Pierre [P]",
          description: `Dès que cette Championne est attaquée par un ennemi sous débuff ${DEBUFFS.HEX}, possède 50% de chances d'appliquer un débuff ${DEBUFFS.PETRIFICATION} sur l'assaillant pendant 1 tour.${RETURN}${RETURN}

Dès qu'un allié est attaqué par un ennemi sous débuff ${DEBUFFS.HEX}, possède 30% de chances d'appliquer un débuff ${DEBUFFS.PETRIFICATION} sur l'assaillant pendant 1 tour.${RETURN}${RETURN}

Augmente également la RÉS de cette Championne. La quantité dont elle est augmentée est égale à la quantité de PRÉ que possède cette Championne.`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "20 310",
        "ATQ": "870",
        "DEF": "1 354",
        "VIT": "109",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "30",
        "PRE": "10"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRE des Allies lors de toutes les Batailles de 80.`
};
