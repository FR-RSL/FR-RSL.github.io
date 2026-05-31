const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lame de Bénédictions",
          description: `Attaque un ennemi. Soigne l'allié ayant le moins de PV à hauteur de 5 % de ses PV MAX. 

Ne peut pas soigner ce Champion.`,
          damage: "3.6*DEF",
          levelInfo: ["Dégâts +5%", "Soins +5%", "Dégâts +5%", "Soins +5%", "Dégâts +5%", "Soins +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Quête de Sens",
          description: `Attaque tous les ennemis. Soigne tous les alliés de 15 % de leurs PV MAX, puis réduit d'1 tour la durée de tous les buffs sur tous les ennemis et augmente d'1 tour la durée de tous les buffs sur tous les alliés.`,
          damage: "3*DEF",
          cooldown: 4,
          levelInfo: ["Soins +5%", "Soins +5%", "Soins +5%", "Soins +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Essor Glorieux",
          description: `Ranime un allié tombé avec 50 % de PV, puis remplit son Compteur de Tour de 50 %, avant de réinitialiser les temps de recharge de ses compétences.`,
          cooldown: 7,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Guardian Angel [P]",
          description: `${PASSIVE}<br><br>Increases the amount of healing allies receive by 10%.<br><br>${ACTIVE}<br><br>If an ally is about to get killed by a fatal hit, preempts that hit and instantly places a ${BUFFS.REVIVE_ON_DEATH} buff on them for 1 turn before the damage is taken.`,
          cooldown: 7,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 195",
        "ATQ": "1 046",
        "DEF": "1 244",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
