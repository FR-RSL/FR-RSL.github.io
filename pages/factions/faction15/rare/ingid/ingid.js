const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Écorce tordue",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 15 % de chances de placer un débuff ${DEBUFFS.DEF} de 30 % pendant 2 tours.`,
          damage: "2.1*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Éclat de désespoir",
          description: `Attaque tous les ennemis. Remplit le Compteur de Tour de ce Champion de 5 % pour chaque débuff ${DEBUFFS.LEECH} sur chaque ennemi.`,
          damage: "3.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Ombre dévorante",
          description: `Attaque tous les ennemis. Avant d'attaquer, place un buff ${BUFFS.PRE} de 25 % sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

Possède 50 % de chances de placer un débuff ${DEBUFFS.LEECH} pendant 2 tours.`,
          damage: "3.65*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 515",
        "ATQ": "991",
        "DEF": "936",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 30`,
};
