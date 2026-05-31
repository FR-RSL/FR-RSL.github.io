const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Déblayage",
          description: `Attaque un ennemi. Place un coup supplémentaire si cette attaque passe en critique. Le coup supplémentaire place un débuff ${DEBUFFS.SPD} de 30 % pendant 2 tours.`,
          damage: "2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Pic Agité",
          description: `Attaque tous les ennemis. Chaque coup critique remplit de 7,5 % le Compteur de Tour de ce Champion.`,
          damage: "3.3*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Embuscade Profonde",
          description: `Place un buff ${BUFFS.PRE} de 50 % sur tous les alliés pendant 2 tours, puis attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.DEF} de 30 % pendant 2 tours.`,
          damage: "3*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 225",
        "ATQ": "1 343",
        "DEF": "870",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
