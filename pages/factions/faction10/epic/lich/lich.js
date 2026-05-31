const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sort de Cécité",
          description: `Attaque 1 ennemi. Offre 30 % de chances de placer un débuff de ${DEBUFFS.PRE} de 50 % pendant 2 tours.`,
          damage: "3.6*DEF",
          levelInfo: ["Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Cocon",
          description: `Place, pendant 2 tours, un buff d'${BUFFS.DEF} de 60 % sur ce Champion. Soigne ce Champion à hauteur de 20 % de ses PV MAX.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Usure",
          description: `Attaque 1 ennemi. Réduit de 100 % le Compteur de Tour de la cible. Place un débuff de ${DEBUFFS.SPD} de 30 % pendant 2 tours.`,
          damage: "5.3*DEF",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 495",
        "ATQ": "694",
        "DEF": "1 376",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des Cryptes de Faction de 27%`,
};
