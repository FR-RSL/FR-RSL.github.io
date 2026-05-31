const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Froid Tombal",
          description: `Attaque tous les ennemis. Offre 20 % de chances de placer un débuff de ${DEBUFFS.DEF} de 30 % pendant 1 tour.`,
          damage: "2.3*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Toucher Maudit",
          description: `Attaque tous les ennemis. Possède 50 % de chances de retirer 1 buff aléatoire de chaque cible.`,
          damage: "3.1*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rayon Mortel",
          description: `Attaque 2 fois au hasard. Chaque attaque possède 50 % de chances de placer un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 1 tour.`,
          damage: "2.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 515",
        "ATQ": "980",
        "DEF": "947",
        "VIT": "92",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors des batailles d'Arène de 52`,
};
