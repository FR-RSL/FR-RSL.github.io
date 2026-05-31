const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Matraquage Brutal",
          description: `Attaque 2 fois un ennemi. Chaque frappe ignorera 30 % de la DÉF de la cible. Place un buff ${BUFFS.SHIELD} sur ce Champion pendant 2 tours. La valeur du ${BUFFS.SHIELD} est égale à 20 % des dégâts infligés.`,
          damage: "1.7*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Agression Intrépide",
          description: `Attaque un ennemi. Ignorera 50 % de la DÉF de la cible lors d'une attaque sous un buff ${BUFFS.SHIELD}. Soigne ce Champion à hauteur de 50 % des dégâts infligés. Place sur ce Champion un buff ${BUFFS.SHIELD} équivalent à tout surplus de soins pendant 3 tours.`,
          damage: "4.7*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Pure Fanfaronnade",
          description: `Attaque 3 fois un ennemi. Chaque frappe ignorera 25 % de la DÉF de la cible. Accorde un Tour supplémentaire si ce Champion possède tous ses PV après avoir utilisé cette Compétence.`,
          damage: "1.6*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 165",
        "ATQ": "1 432",
        "DEF": "661",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "60",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 25%`,
};
