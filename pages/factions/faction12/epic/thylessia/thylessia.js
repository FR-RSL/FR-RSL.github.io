const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Trame de Folie",
          description: `Attaque un ennemi. Possède 50 % de chances d'appliquer un effet de ${PROP_DEBUFF} qui prend 1 débuff aléatoire de la cible pour le placer sur tous les ennemis sous débuff ${DEBUFFS.HEX}.`,
          damage: "3.5*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Voix perçantes",
          description: `Attaque tous les ennemis. Augmente d'1 tour la durée de tous les débuffs de tous les ennemis.`,
          damage: "3.7*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Mélancolie",
          description: `Attaque tous les ennemis. Place un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours.`,
          damage: "3.7*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Festin d'Infortune [P]",
          description: `Lors d'une attaque sur des ennemis sous débuffs ${DEBUFFS.DEF}, possède 50 % de chances de leur placer un débuff ${DEBUFFS.HEX} pendant 2 tours.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "12 720",
        "ATQ": "1 454",
        "DEF": "1 002",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
