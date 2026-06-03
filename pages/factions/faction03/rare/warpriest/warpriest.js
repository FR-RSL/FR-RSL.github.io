const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Admonester",
          description: `Attaque 1 ennemi. Possède 15% de chances de placer un débuff de ${DEBUFFS.GEL} d'1 tour.`,
          damage: "5.5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Lumière Divine",
          description: `Soigne une cible alliée à hauteur de 20% de ses PV max. Soigne tous tes alliés, sauf la cible, à hauteur de 10% des PV MAX de la cible.`,
          cooldown: 4,
          levelInfo: ["Soins +5%", "Soins +5%", "Soins +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Armes Bénies",
          description: `Place, pendant 2 tours, un buff d'${BUFFS.ATK} de 25% sur tous les alliés.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 165",
        "ATQ": "683",
        "DEF": "1 134",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
