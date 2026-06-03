const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Acier Ensanglanté",
          description: `Attaque un ennemi. Place un coup supplémentaire si cette attaque passe en critique.`,
          damage: "3.3*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Terrifiant Bloc de Fer",
          description: `Attaque un ennemi. Avant d'attaquer, possède 75 % de chances de placer sur la cible un débuff ${DEBUFFS.WEAKEN} de 25 % pendant 2 tours.`,
          damage: "6.2*ATQ",
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Panique Contagieuse",
          description: `Attaque un ennemi. Applique un effet de [Propagation de Débuff], prenant 2 débuffs aléatoires sur la cible pour les placer sur tous les ennemis. Prolonge également de 2 tours la durée de ces débuffs.${RETURN}
Ne prolongera pas la durée des débuffs sur la cible initiale.`,
          damage: "5.5*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 865",
        "ATQ": "1 487",
        "DEF": "826",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de la Tour du Malheur de 32%`,
};
