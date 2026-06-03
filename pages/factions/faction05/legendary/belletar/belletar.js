const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hache fumante",
          description: `Attaque un ennemi. A 75% de chances de réduire d'1 tour le temps de recharge d'une compétence aléatoire de l'allié qui a le Compteur de Tour le plus élevé, sauf ce Champion.`,
          damage: "0.22*PV",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Rugissement du tueur",
          description: `Attaque tous les ennemis. Place un buff ${BUFFS.ATK} de 50% et un buff ${BUFFS.DEF} de 60% sur tous les alliés pendant 2 tours. Soigne également tous les alliés à hauteur de 20% des PV MAX de ce Champion et remplit de 20% les Compteurs de Tour de tous les alliés.`,
          damage: "0.22*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Clémence de l'oasis",
          description: `Ranime tous les alliés morts avec 50% de PV et 50% de Compteur de Tour, puis place pendant 2 tours un buff ${BUFFS.SHIELD} équivalent à 20% des PV MAX de ce Champion sur tous les alliés ranimés. Place également un buff ${BUFFS.BLOCK_DEBUFFS} sur tous les alliés pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Moment critique [P]",
          description: `A 75% de chances de réduire d'1 tour tous les temps de recharge de compétence d'un allié lorsqu'il est ranimé.${RETURN}${RETURN}

Une fois par tour, si un allié est tué, réduit d'1 tour les temps de recharge de toutes les compétences de ce Champion.`,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 975",
        "ATQ": "848",
        "DEF": "1 266",
        "VIT": "108",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 33%`,
};
