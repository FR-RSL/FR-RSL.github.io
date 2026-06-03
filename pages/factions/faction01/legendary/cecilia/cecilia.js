const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Ouragan de neige",
          description: `Attaque un ennemi. Soigne tous tes alliés à hauteur de 10% de leurs PV max.`,
          damage: "3.6*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Vague de verglas",
          description: `Attaque 2 fois tous les ennemis. Les dégâts infligés par cette compétence augmentent de 5% pour chaque allié dont les PV sont supérieurs à 50%.${RETURN}${RETURN}

Place un buff ${BUFFS.PERFECT_VEIL} sur tous les alliés sauf cette Championne pendant 2 tours.`,
          damage: "2*DEF+0.05*TRG_HP",
          levelInfo: ["Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Vacance de Yuletide",
          description: `Attaque tous les ennemis. Avant d'attaquer, place un buff ${BUFFS.DEF} de 60% sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

Place un buff ${BUFFS.STRENGTHEN} de 25% et un buff ${BUFFS.COUNTER} sur tous les alliés pendant 2 tours.`,
          damage: "4.4*DEF",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Esprit généreux [P]",
          description: `${ACTIVE}

Place un buff ${BUFFS.REVIVE_ON_DEATH} d'1 tour sur un allié dès que les PV de cet allié tombent sous 50%. Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de cette Championne si cette Championne spécifique est morte.${RETURN}${RETURN}

${PASSIVE}

Au début du tour de cette Championne, retire un débuff aléatoire sur un allié aléatoire et remplit de 10% son Compteur de Tour.`,
          cooldown: 6,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 825",
        "ATQ": "804",
        "DEF": "1 520",
        "VIT": "107",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 30%`,
};
