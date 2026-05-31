const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tonnerre",
          description: `Attaque un ennemi. Possède 15 % de chances de placer un débuff de ${DEBUFFS.PRE} de 25 % pendant 1 tour.`,
          damage: "3.4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Vent Spirituel",
          description: `Place, pendant 2 tours, un buff d'${BUFFS.DEF} de 60 % sur ce Champion. Soigne la cible à hauteur de 20 % de ses PV MAX.`,
          cooldown: 4,
          levelInfo: ["Soins +10%", "Soins +10%", "Temps de recharge -1", "Soins +10%", "Soins +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 710",
        "ATQ": "903",
        "DEF": "936",
        "VIT": "87",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
