const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Jongleuse de lames",
          description: `Attaque un ennemi. 

Place un buff ${BUFFS.ATK} de 50 % sur tous les alliés pendant 1 tour.`,
          damage: "4.5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Danseuse de terre",
          description: `Attaque tous les ennemis. 

Possède 75 % de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25 % et un débuff ${DEBUFFS.BLOCK_BUFFS} pendant 2 tours. 

Réduit également le Compteur de Tour de tous les ennemis de 20 %. Si Modo du Carillon se trouve dans la même équipe, vole au lieu de ça 20 % du Compteur de Tour de chaque ennemi.`,
          damage: "4.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Bénédiction des sables",
          description: `Place un buff ${BUFFS.PRE} de 50 % et un buff ${BUFFS.SPD} de 30 % sur tous les alliés pendant 2 tours. 

Possède 75 % de chances de retirer tous les buffs sur tous les ennemis. Si Modo du Carillon se trouve dans la même équipe, a au lieu de ça 75 % de chances de voler tous les buffs de tous les ennemis.`,
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Mouvements enjôleurs [P]",
          description: `${PASSIVE}

Lorsqu'elle est frappée, a 15 % de chances de changer de manière aléatoire les frappes critiques de l'assaillant en frappes faibles, normales ou puissantes. Si Modo du Carillon se trouve dans la même équipe, les chances passent à 30 %.

${ACTIVE}

Dès que cette Championne est frappée, augmente de 50 % le Compteur de Tour de l'allié qui a l'ATQ la plus élevée.`,
          cooldown: 1,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 165",
        "ATQ": "1 090",
        "DEF": "1 277",
        "VIT": "113",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 19%`,
};
