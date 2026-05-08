const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.png",
          name: "Eclair Energetique",
          description: `Attaque un ennemi. Possede 50% de chances de placer un debuff ${DEBUFFS.DEF} de 60% pendant 2 tours.`,
          damage: "4.5*ATQ",
          levelInfo: ["Chances de Buff/Debuff +1%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +20%"],
        },
        {
          img: "assets/sort2.png",
          name: "Petrifier",
          description: `Attaque tous les ennemis. Possède 75% de chances de placer un debuff de ${DEBUFFS.HEALS} de 100% pendant 2 tours.`,
          damage: "ATQ*(2 + VIT/100)",
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.png",
          name: "Esprits Ancestraux",
          description: `Attaque tous les ennemis. Possede 75% de chances de placer un debuff ${DEBUFFS.DEF} de 60% pendant 2 tours. Il est impossible de resister a ce debuff.${RETURN}${RETURN}
Place egalement un buff ${BUFFS.ATK} de 50% sur tous les allies pendant 2 tours.`,
          damage: "3.8*ATQ",
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "18 825",
        "ATQ": "1 211",
        "DEF": "1 112",
        "VIT": "101",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "40",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/acc.png",
  description: `Augmente la statistique PRE des Allies dans les Cryptes de Faction de 65.`
};
