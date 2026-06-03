const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bâton à Plumes",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 10% de chances de placer un débuff ${DEBUFFS.POISON} de 5% pendant 2 tours.`,
          damage: "2.1*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Lore de Guérison",
          description: `Attaque un ennemi. Soigne tous tes alliés à hauteur de 10% de leurs PV max.${RETURN}${RETURN}

Soigne chaque allié de 2,5% supplémentaires pour chaque débuff dont est affligée la cible.`,
          damage: "5.7*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Soins +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Poids des Siècles",
          description: `Place un débuff ${DEBUFFS.ATK} de 50% sur tous les ennemis pendant 2 tours. Possède également 75% de chances de réduire le Compteur de Tour de chaque cible de 20%. Place sur la cible un débuff ${DEBUFFS.CRATE} de 30% pendant 2 tours si elle possède 50% de Compteur de Tour ou moins après le réduction du Compteur de Tour.`,
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Gardien du Temps [P]",
          description: `Lorsque ce Champion se fait attaquer, augmente d'1 tour la durée de 2 débuffs aléatoires sur l'assaillant. Se produit une fois par frappe.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 010",
        "ATQ": "991",
        "DEF": "1 178",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de la Tour du Malheur de 60`,
};
