const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Ouragan de neige",
          description: `Attaque un ennemi. Soigne tous tes alliés à hauteur de 10% de leurs PV max.`,
          damage: "4.6*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Vague de verglas",
          description: `Attaque 2 fois tous les ennemis. Les dégâts infligés par cette compétence augmentent de 5% pour chaque allié dont les PV sont supérieurs à 50%.${RETURN}${RETURN}

Place un buff ${BUFFS.PERFECT_VEIL} sur tous les alliés sauf cette Championne pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Bouclier +5%", "Bouclier +5%", "Bouclier +5%", "Bouclier +5%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Vacance de Yuletide",
          description: `Attaque tous les ennemis. Avant d'attaquer, place un buff ${BUFFS.DEF} de 60% sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

Place un buff ${BUFFS.STRENGTHEN} de 25% et un buff ${BUFFS.COUNTER} sur tous les alliés pendant 2 tours.`,
          damage: "4.9*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "21 315",
        "ATQ": "1 079",
        "DEF": "804",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors des Cryptes de Faction de 31%`,
};
