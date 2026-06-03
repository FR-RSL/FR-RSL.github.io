const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Maîtresse des Maillets",
          description: `Attaque un ennemi. Remplit le Compteur de Tours de cette Championne de 15% si l'attaque passe en critique.`,
          damage: "3.4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Obsession glorieuse",
          description: `Attaque un ennemi. Place un coup supplémentaire si cette attaque passe en critique. Remplit le Compteur de Tour de tous les alliés de 30% si cette attaque tue un ennemi.`,
          damage: "3.3*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Première à combattre",
          description: `Attaque tous les ennemis. Place un buff ${BUFFS.CDAM} de 30% sur tous les alliés pendant 2 tours.`,
          damage: "3.2*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 535",
        "ATQ": "1 476",
        "DEF": "859",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
