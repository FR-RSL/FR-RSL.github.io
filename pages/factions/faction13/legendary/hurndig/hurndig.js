const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Désir Mortel",
          description: `Attaque un ennemi. Accorde un Tour Supplémentaire et réduit de 2 tours le temps de recharge de la Compétence Frappe d'Inertie si cette attaque tue un ennemi.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tempête Ésotérique",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % et un débuff ${DEBUFFS.PRE} de 50 % pendant 2 tours.`,
          damage: "4.4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +5%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Frappe d'Inertie",
          description: `Attaque un ennemi. Vide totalement le Compteur de Tour de la cible. 

Attaquera également tous les ennemis si la première attaque passe en critique. Cette attaque de zone possède 75 % de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25 % pendant 2 tours. Après l'attaque, placera également un débuff ${DEBUFFS.BURN} pendant 2 tours sur les ennemis dont les Compteurs de Tour sont inférieurs à 30 %.`,
          damage: "6.2*ATQMultiplier: 4*ATQ",
          cooldown: 6,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Guindé [P]",
          description: `Remplit le Compteur de Tour de ce Champion de 10 % chaque fois qu'il se fait frapper. Se produit une fois par frappe. 

Remplit également le Compteur de Tour de ce Champion de 20 % lorsqu'un ennemi meurt.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 020",
        "ATQ": "1 409",
        "DEF": "1 101",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors des batailles d'Arène de 35%`,
};
