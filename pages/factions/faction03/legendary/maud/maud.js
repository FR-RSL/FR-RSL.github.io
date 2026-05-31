const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lance bénie",
          description: `Attaque un ennemi. 

Possède 50 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % pendant 2 tours. 

Possède également 80 % de chances de placer un buff ${BUFFS.ATK} de 50 % sur l'allié ayant l'ATQ la plus élevée pendant 1 tour.`,
          damage: "4.5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Phalange sacrée",
          description: `Attaque tous les ennemis. 

Possède 75 % de chances de réduire de 2 tours la durée de tous les buffs sur les ennemis. 

Augmente ensuite la durée de tous les buffs des alliés d'1 tour. Soigne également tous tes alliés à hauteur de 20 % des PV MAX de cette Championne.`,
          damage: "4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Psaume de renaissance",
          description: `Ranime tous les alliés morts avec 50 % de PV et 50 % de Compteur de Tour. 

Si la DÉF d'un allié est supérieure ou égale à son ATQ, lui accorde un buff ${BUFFS.DEF} de 60 % pendant 2 tours. 

Si l'ATQ d'un allié est plus élevée que sa DÉF, lui accorde plutôt un buff ${BUFFS.ATK} de 50 % pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Vêpres éclatantes [P]",
          description: `Au début du tour de cette Championne, retire un débuff aléatoire sur tous les alliés.

À la fin du tour de cette Championne, place un buff ${BUFFS.HEALS} de 15 % pendant 1 tour sur l'allié ayant le moins de PV.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 805",
        "ATQ": "925",
        "DEF": "1 266",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 60`,
};
