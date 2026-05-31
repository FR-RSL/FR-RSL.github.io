const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Malédiction du Désir",
          description: `Attaque un ennemi. Possède 80 % de chances de placer un débuff ${DEBUFFS.SLEEP} d'1 tour si le Compteur de Tour de la cible est supérieur ou égal à 50 %. Il est impossible de résister à ce débuff. Soigne tous les alliés de 5 % de leurs PV MAX si le Compteur de Tour de la cible se trouve sous 50 %.`,
          damage: "5*ATQ",
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Romance Éclair",
          description: `Place un buff ${BUFFS.BLOCK_DEBUFFS} sur tous les alliés pendant 2 tours, puis remplit le Compteur de Tour de tous les alliés de 10 %, et place un buff ${BUFFS.DEF} de 60 % et un buff ${BUFFS.SPD} de 30 % sur tous les alliés pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Amour Éternel",
          description: `Ranime un seul allié avec 55 % de PV et un Compteur de Tour plein. Place un buff ${BUFFS.ATK} de 50 % et un buff ${BUFFS.CRATE} de 30 % sur cet allié pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Lien Éternel [P]",
          description: `Soigne tous les alliés de 10 % de leurs PV MAX au début de leur tour. 

A 40 % de chances de retirer les débuffs ${DEBUFFS.GEL}, ${DEBUFFS.FEAR} et ${DEBUFFS.TRUE_FEAR} des alliés au début de leur tour. Retire tous les débuffs de Rotos le Marié Égaré au début de son tour s'il se trouve dans la même équipe.`,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 480",
        "ATQ": "859",
        "DEF": "1 288",
        "VIT": "114",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors de toutes les Batailles de 80`,
};
