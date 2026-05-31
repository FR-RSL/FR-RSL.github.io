const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Archétype d'habileté",
          description: `Attaque tous les ennemis. Possède 50 % de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25 % pendant 2 tours. Il est impossible de résister à ce débuff.`,
          damage: "2.4*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Putrescence",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer trois débuffs ${DEBUFFS.POISON} de 5 % pendant 2 tours. Il est impossible de résister à ces débuffs. 

Augmente également d'1 tour la durée de tous les débuffs ennemis. Il est impossible de résister à cet effet.`,
          damage: "4.6*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Ravages d'arcane",
          description: `Attaque tous les ennemis. Place un buff ${BUFFS.PRE} de 50 % sur tous les alliés pendant 2 tours avant d'attaquer. 

Possède également 75 % de chances de placer un débuff ${DEBUFFS.RES} de 50 % sur tous les ennemis pendant 2 tours. Il est impossible de résister à ce débuff. Remplit le Compteur de Tour de ce Champion de 10 % pour chaque débuff ${DEBUFFS.RES} placé par cette compétence.`,
          damage: "4.4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Dégrader [P]",
          description: `Réduit de 3 % la PRÉ, le TAUX C. et les DÉG C. de chaque cible pour chaque débuff ${DEBUFFS.POISON} dont elles sont affligées. Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de ce Champion si ce Champion spécifique est mort.`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "15 855",
        "ATQ": "1 531",
        "DEF": "991",
        "VIT": "110",
        "TAUX C.": "15%",
        "DEG C.": "63%",
        "RES": "30",
        "PRE": "0"
  }
};

const aura = null;
