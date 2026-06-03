const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Serre de faucon",
          description: `Attaque un ennemi. Place un buff ${BUFFS.HEALS} de 7,5 % pendant 1 tour sur l'allié ayant le moins de PV.`,
          damage: "0.22*PV",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fureur impassible",
          description: `Attaque 3 fois au hasard. Chaque frappe possède 50 % de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 1 tour.${RETURN}${RETURN}

Place également un buff ${BUFFS.REFLECT_DAM} de 30 % sur ce Champion pendant 2 tours.`,
          damage: "0.12*PV",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Barricade vivante",
          description: `Place un buff ${BUFFS.ALLY_PROTECT} de 25 % sur tous les alliés sauf ce Champion pendant 2 tours.${RETURN}${RETURN}

Place également un buff ${BUFFS.DEF} de 30 % sur ce Champion pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 320",
        "ATQ": "760",
        "DEF": "980",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
