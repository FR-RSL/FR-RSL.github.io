const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Masse Écrasante",
          description: `Attaque un ennemi. Inflige des dégâts supplémentaires si ce Champion se trouve sous un buff ${BUFFS.SHIELD}. Les dégâts supplémentaires sont égaux à 30 % de la valeur du ${BUFFS.SHIELD} et ne peuvent pas dépasser 200 000.`,
          damage: "0.19*PV",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Étalage Répugnant",
          description: `Place sur ce Champion un buff ${BUFFS.SHIELD} équivalent à 20 % de ses PV MAX pendant 3 tours. Accorde un Tour Supplémentaire.`,
          cooldown: 4,
          levelInfo: ["Bouclier +5%", "Bouclier +5%", "Bouclier +5%", "Bouclier +5%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Ténacité Funeste",
          description: `Attaque un ennemi. Possède 80 % de chances de placer un débuff ${DEBUFFS.PROVOKE} de 1 tour.`,
          damage: "0.3*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "20 640",
        "ATQ": "617",
        "DEF": "1 035",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 15%`,
};
