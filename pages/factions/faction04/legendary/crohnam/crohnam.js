const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Épées de djinn",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 30 % de chances d'augmenter d'1 tour la durée d'un débuff aléatoire de la cible. 

Si Djamarsa se trouve dans la même équipe, chaque frappe augmente également d'1 tour la durée de tout débuff ${DEBUFFS.BURN} sur la cible.`,
          damage: "1.5*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Régal de berserker",
          description: `Attaque 3 fois au hasard. Chaque frappe possède 80 % de chances d'activer instantanément un débuff ${DEBUFFS.BURN} sur la cible. Soigne ce Champion de 10 % de ses PV MAX pour chaque débuff ${DEBUFFS.BURN} activé par cette compétence.`,
          damage: "2*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Zéphyr ardent",
          description: `Attaque tous les ennemis. Possède 80 % de chances de placer un débuff ${DEBUFFS.BURN} pendant 2 tours. 

Remplit le Compteur de Tour de ce Champion de 15 % pour chaque débuff ${DEBUFFS.BURN} placé par cette compétence.`,
          damage: "4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Colère frémissante [P]",
          description: `${PASSIVE}

Toutes les 10 fois que des Compétences Actives sont utilisées au combat par des Champions ennemis ou alliés, ce Champion active instantanément la compétence Régal de berserker. Cela se produit toutes les 5 fois que des Compétences Actives sont utilisées si Djamarsa se trouve dans la même équipe.

${ACTIVE}

Si Djamarsa se trouve dans la même équipe, ranime ce Champion avec 50 % de PV et 50 % de Compteur de Tour lorsqu'il se fait tuer.`,
          cooldown: 4,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 195",
        "ATQ": "1 564",
        "DEF": "1 002",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 50`,
};
