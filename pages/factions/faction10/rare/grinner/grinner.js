const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Fiel",
          description: `Attaque 1 ennemi. Possède 25 % de chances de placer un buff d'${BUFFS.ATK} de 50 % sur tous les alliés pendant 2 tours.`,
          damage: "3.9*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Choc",
          description: `Attaque tous les ennemis. Possède 20 % de chances de retirer 1 buff aléatoire de chaque cible.`,
          damage: "4.2*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Déterré",
          description: `Ranime un allié en lui donnant 50 % de PV. Place, pendant 2 tours, un buff de ${BUFFS.SHIELD} d'une valeur de 20 % de ses PV MAX. sur le Champion ressuscité.`,
          cooldown: 7,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 370",
        "ATQ": "936",
        "DEF": "1 134",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors des Cryptes de Faction de 30`,
};
