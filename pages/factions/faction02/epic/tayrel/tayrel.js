const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Humble",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 40 % de chances de placer un débuff de ${DEBUFFS.ATK} de 50 % pendant 2 tours. Les dégâts infligés sont proportionnels à la DÉF.`,
          damage: "1.7*DEF",
          levelInfo: ["Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Acier Chantant",
          description: `Attaque tous les ennemis. Offre 75 % de chances de placer un débuff de ${DEBUFFS.DEF} de 60 % pendant 2 tours. Si la cible est affligée d'un débuff de Réduction d'ATQ], placera un débuff de ${DEBUFFS.SLEEP} d'1 tour. Les dégâts infligés sont proportionnels à la DÉF.`,
          damage: "3.5*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Frappe Préventive",
          description: `Attaque un ennemi. Réduit de 50 % le Compteur de Tours de la cible. Si l'attaque vide totalement le Compteur de Tours, elle placera un débuff d'${DEBUFFS.STUN} de 2 tours. Les dégâts infligés sont proportionnels à la DÉF.`,
          damage: "5.3*DEF",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 185",
        "ATQ": "881",
        "DEF": "1 343",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 25%`,
};
