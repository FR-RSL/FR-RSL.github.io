const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Archetype d'habilete",
          description: `Attaque tous les ennemis. Possede 50% de chances de placer un debuff ${DEBUFFS.WEAKEN} de 25% pendant 2 tours. Il est impossible de resister a ce debuff.`,
          damage: "2.4*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Putrescence",
          description: `Attaque tous les ennemis. Possede 75% de chances de placer trois debuffs ${DEBUFFS.POISON} de 5% pendant 2 tours. Il est impossible de resister a ces debuffs.${RETURN}${RETURN}
Augmente egalement d'1 tour la duree de tous les debuffs ennemis. Il est impossible de resister a cet effet.`,
          damage: "4.6*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Ravages d'arcane",
          description: `Attaque tous les ennemis. Avant d'attaquer, place un buff ${BUFFS.PRE} de 50% sur tous les allies pendant 2 tours.${RETURN}${RETURN}
Possede egalement 75% de chances de placer un debuff ${DEBUFFS.RES} de 50% sur tous les ennemis pendant 2 tours. Il est impossible de resister a ce debuff. Remplit le Compteur de Tour de ce Champion de 10% pour chaque debuff ${DEBUFFS.RES} place par cette competence.`,
          damage: "4.4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Degrader [P]",
          description: `Reduit de 3% la PRE, le TAUX C. et les DEG C. de chaque cible pour chaque debuff ${DEBUFFS.POISON} dont elles sont affligees. Si plusieurs Champions de l'equipe disposent de cette Competence, une seule sera activee. Cette competence ne s'activera pas sur les copies en double de ce Champion si ce Champion specifique est mort.`,
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
