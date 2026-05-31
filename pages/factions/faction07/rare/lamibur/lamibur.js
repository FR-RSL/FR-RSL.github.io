const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Avancée pressante",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 25 % de chances de remplir le Compteur de Tour d'un allié aléatoire de
5 %.`,
          damage: "2.1*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Pluie de carnage",
          description: `Attaque tous les ennemis. Place un buff ${BUFFS.HEALS} de 15 % sur tous les alliés pendant 2 tours.`,
          damage: "3.4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Communion bestiale",
          description: `Soigne une cible alliée à hauteur de 25 % de ses PV MAX, puis lui accorde un buff ${BUFFS.REVIVE_ON_DEATH} pendant 2 tours.`,
          cooldown: 7,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 350",
        "ATQ": "1 013",
        "DEF": "925",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 10%`,
};
