const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Guide Gracieuse",
          description: `Attaque un ennemi. Place, pendant 2 tours, un buff de ${BUFFS.HEALS} de 15 % sur l'allié ayant le moins de PV.`,
          damage: "4.5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Degrés de Guérison",
          description: `Attaque un ennemi. Soigne cette Championne et l'allié ayant le moins de PV à hauteur de 30 % des PV MAX de cette Championne. Possède 75 % de chances de placer un débuff ${DEBUFFS.HEALS} de 100 % et un débuff ${DEBUFFS.LEECH} sur tous les ennemis pendant 2 tours.

Il est impossible de résister à ces débuffs lorsque Khoronar se trouve dans la même équipe.`,
          damage: "5.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Attrait de la Beauté",
          description: `Soigne tous tes alliés à hauteur de 40 % de leurs PV MAX. Place un buff ${BUFFS.BLOCK_DEBUFFS} sur tous les alliés pendant 2 tours.

Si un Champion est totalement soigné par cette compétence, lui accorde également un buff ${BUFFS.SHIELD} équivalent à 25 % des PV du Champion pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Soins +10%", "Soins +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Sacrifice d'Amante [P]",
          description: `Remplit le Compteur de Tour de tous les alliés de 20 %, puis les soigne à hauteur de 20 % des PV MAX de cette Championne lorsqu'elle est tuée. 

Ranime cette Championne avec 75 % de PV lorsqu'elle est tuée si Khoronar se trouve dans la même équipe.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 645",
        "ATQ": "1 002",
        "DEF": "1 134",
        "VIT": "111",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 19%`,
};
