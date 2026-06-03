const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Furie Sauvage",
          description: `Attaque un ennemi. Possède 50% de chances de placer un buff ${BUFFS.DEF} de 60% sur ce Champion pendant 2 tours.`,
          damage: "3.4*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Carnage Maximum",
          description: `Attaque 3 fois au hasard. Chaque frappe possède 75% de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25% pendant 2 tours.`,
          damage: "2*DEF",
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Apaisement de l'Esprit",
          description: `Ranime un allié avec 40% de PV et un Compteur de Tour à 40%, puis soigne tous les alliés de 15% de leurs PV MAX.`,
          cooldown: 3,
          levelInfo: ["Soins +5%", "Soins +5%", "Soins +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 350",
        "ATQ": "826",
        "DEF": "1 387",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors des Cryptes de Faction de 20%`,
};
