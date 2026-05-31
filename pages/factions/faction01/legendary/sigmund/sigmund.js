const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Juste Combat",
          description: `Attaque un ennemi. Retire tous les buffs ${BUFFS.SHIELD}. Possède 50 % de chances de retirer un buff aléatoire. Sinon, possède 75 % de chances lors d'une attaque sur les Boss.`,
          damage: "3.75*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Phare de Bataille",
          description: `Attaque 2 fois tous les ennemis. Possède 50 % de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 1 tour et 75 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % pendant 2 tours.`,
          damage: "2*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Bouclier du Royaume",
          description: `Place sur tous les alliés un buff ${BUFFS.SHIELD} équivalent à 30 % des PV MAX de ce Champion pendant 2 tours. Place un buff ${BUFFS.STRENGTHEN} de 25 % sur tous les alliés pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Équitable [P]",
          description: `Lorsque ce Champion se fait attaquer, possède 20 % de chances de réduire d'1 tour la durée de tous les buffs de l'assaillant. Sinon, possède 40 % de chances lorsqu'il est attaqué par un Boss.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 640",
        "ATQ": "848",
        "DEF": "1 354",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors de la Tour du Malheur de 40%`,
};
