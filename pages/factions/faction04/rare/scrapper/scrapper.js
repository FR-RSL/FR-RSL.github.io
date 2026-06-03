const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Arts d'Arène",
          description: `Attaque un ennemi. Place sur ce Champion un buff ${BUFFS.SHIELD} équivalent à 5% des dégâts infligés pendant 2 tours si cette attaque passe en critique.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +5%", "Bouclier +5%", "Dégâts +5%", "Bouclier +5%", "Dégâts +5%", "Bouclier +5%", "Dégâts +5%", "Bouclier +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Favori des Foules",
          description: `Attaque un ennemi. Détruit les PV MAX de la cible de 30% des dégâts infligés. Place sur ce Champion un buff ${BUFFS.SHIELD} équivalent à 30% des dégâts infligés pendant 2 tours si cette attaque passe en critique.`,
          damage: "6.5*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Bouclier +5%", "Dégâts +5%", "Bouclier +5%", "Dégâts +5%", "Bouclier +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Frimeur [P]",
          description: `Augmente les dégâts infligés par ce Champion à hauteur du pourcentage de PV MAX détruits sur la cible.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 370",
        "ATQ": "1 233",
        "DEF": "837",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de la Tour du Malheur de 25%`,
};
