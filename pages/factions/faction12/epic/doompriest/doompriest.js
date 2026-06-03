const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tisse Destin",
          description: `Attaque 1 ennemi. Si le coup passe en critique, place, pendant 2 tours, un buff d'${BUFFS.CRATE} de 15% sur un allié pris au hasard.`,
          damage: "4.1*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Possession de Masse",
          description: `Place, pendant 2 tours, un buff d'${BUFFS.ATK} de 50% sur tous les alliés.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Soutenir [P]",
          description: `Soigne tous les alliés de 7,5% de leurs PV et retire un de leurs débuffs choisi au hasard au début du tour de ce Champion.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 320",
        "ATQ": "980",
        "DEF": "1 035",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés Force lors de toutes les Batailles de 15%`,
};
