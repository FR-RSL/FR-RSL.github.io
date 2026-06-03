const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Toxicité",
          description: `Attaque 2 fois un ennemi. Détruit les PV MAX de la cible de 75 % des dégâts infligés si elle se trouve sous débuff ${DEBUFFS.HEALS}.${RETURN}${RETURN}

Chaque frappe possède 35 % de chances d'activer instantanément un débuff ${DEBUFFS.POISON} de 5 % sur la cible.`,
          damage: "2.4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Neurotoxine",
          description: `Attaque un ennemi. Possède 75 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours. Possède également 75 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % pendant 2 tours si la cible est affligée d'un débuff ${DEBUFFS.POISON}.`,
          damage: "6*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Venin Fond-chair",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.HEALS} de 100 % pendant 3 tours. Possède 75 % de chances de placer deux débuffs ${DEBUFFS.POISON} de 5 % pendant 2 tours.`,
          damage: "4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Agonie Douloureuse [P]",
          description: `Les ennemis sous débuffs ${DEBUFFS.HEALS} infligent 15 % de dégâts en moins.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 175",
        "ATQ": "1 002",
        "DEF": "1 156",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 45`,
};
