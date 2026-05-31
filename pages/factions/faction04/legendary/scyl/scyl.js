const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Célérité du Drake",
          description: `Attaque un ennemi. Possède 20 % de chances de placer un débuff ${DEBUFFS.SPD} de 30 % pendant 2 tours. Possède 30 % de chances de réduire de 15 % le Compteur de Tour de la cible.`,
          damage: "3.5*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Battements d'Ailes",
          description: `Attaque 2 fois tous les ennemis. Chaque frappe possède 20 % de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour.`,
          damage: "1.55*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rite du Phénix",
          description: `Ranime un allié avec 50 % de PV, puis place un buff de ${BUFFS.ALLY_PROTECT} de 50 % sur cet allié pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Vie Intarissable [P]",
          description: `Soigne tous les alliés de 10 % de leurs PV MAX au début de chaque tour. Place également, pendant 2 tours, un buff ${BUFFS.SPD} de 30 % sur un allié pris au hasard.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 980",
        "ATQ": "859",
        "DEF": "1 387",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
