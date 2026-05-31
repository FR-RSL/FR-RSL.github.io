const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Petit chapardeur",
          description: `Attaque un ennemi. Possède 50 % de chances de voler un buff aléatoire à la cible.`,
          damage: "2.1*DEF",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +5%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Arc-en-ciel de malheur",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.PRE} de 50 % et un débuff ${DEBUFFS.RES} de 50 % pendant 2 tours.`,
          damage: "3.3*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Richesse irrésistible",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 1 tour. Place également un buff ${BUFFS.COUNTER} sur ce Champion pendant 2 tours.`,
          damage: "3.7*DEF",
          cooldown: 6,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Chanson joyeuse [P]",
          description: `Au début du tour de ce Champion, transfère 1 buff aléatoire d'un ennemi pris au hasard à un allié pris au hasard. 

La PRÉ de ce Champion est augmentée de 5 pour chaque buff sur chaque allié.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 320",
        "ATQ": "804",
        "DEF": "1 487",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = null;
