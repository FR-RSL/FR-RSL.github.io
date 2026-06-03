const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Glaive Tombal",
          description: `Attaque 3 fois un ennemi. Chaque frappe possède 20 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % pendant 1 tour. Il est impossible de résister à ce débuff.`,
          damage: "1.3*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Légion des Damnés",
          description: `Fais équipe avec des alliés pour attaquer un ennemi. Tous les alliés sous buffs ${BUFFS.ALLY_PROTECT} placés par ce Champion rejoindront l'attaque. Les alliés rejoignant l'attaque utiliseront leurs compétences par défaut.${RETURN}${RETURN}

Accorde un Tour supplémentaire si aucun ennemi n'est tué pendant cette attaque.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Infusion Troublante",
          description: `Place un buff ${BUFFS.BLOCK_DEBUFFS}, un buff ${BUFFS.ALLY_PROTECT} de 50 % et un buff ${BUFFS.STRENGTHEN} de 25 % sur un allié pendant 3 tours.${RETURN}${RETURN}

Le buff ${BUFFS.ALLY_PROTECT} ne peut pas être retiré.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Égide Éveillée [P]",
          description: `Lorsqu'un allié est attaqué alors qu'il bénéficie d'un buff ${BUFFS.ALLY_PROTECT} placé par ce Champion, place sur l'allié un buff ${BUFFS.SHIELD} équivalent à 30 % des PV MAX de ce Champion pendant 2 tours. Ne survient que si l'allié ne possède pas déjà un buff ${BUFFS.SHIELD} placé par ce Champion.${RETURN}${RETURN}

Réduit également de 2 tours le temps de recharge de la compétence Légion des Damnés de ce Champion si le buff ${BUFFS.SHIELD} est placé.`,
          isPassive: true
        },
        {
          img: "assets/passif1.webp",
          name: "Debout mes Sbires [P]",
          description: `Place, pendant 3 tours, un buff ${BUFFS.BLOCK_DEBUFFS} et un buff ${BUFFS.STRENGTHEN} de 25 % sur l'allié ayant le moins de PV MAX au début de chaque round. Place également sur cet allié un buff ${BUFFS.ALLY_PROTECT} de 50 % pendant 6 tours.${RETURN}${RETURN}

Le buff ${BUFFS.ALLY_PROTECT} ne peut pas être retiré.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 480",
        "ATQ": "793",
        "DEF": "1 354",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors de toutes les Batailles de 60`,
};
