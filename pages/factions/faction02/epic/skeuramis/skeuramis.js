const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Distancer",
          description: `Attaque un ennemi. Possède 80 % de chances de voler 15 % du Compteur de Tour de la cible. Possède 20 % de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour si le Compteur de Tour de la cible est réduit par cette compétence.`,
          damage: "0.21*HP",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Supériorité naturelle",
          description: `Attaque tous les ennemis. Réduit d'1 tour la durée de tous les buffs ennemis. Possède également 60 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % pendant 2 tours. 

Remplit le Compteur de Tour de ce Champion de 10 % pour chaque buff qui a vu sa durée réduite.`,
          damage: "0.25*HP",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Tenir la ligne",
          description: `Possède 75 % de chances de placer un débuff ${DEBUFFS.PROVOKE} sur tous les ennemis pendant 1 tour. 

Place une ${BUFFS.COUNTER} et un buff ${BUFFS.HEALS} de 15 % sur ce Champion pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 980",
        "ATQ": "848",
        "DEF": "1 123",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 25%`,
};
