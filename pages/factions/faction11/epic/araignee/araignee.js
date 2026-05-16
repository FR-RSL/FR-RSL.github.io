const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.png",
          name: "Possession",
          description: `Attaque un ennemi. Possede 50% de chances de retirer 1 buff aleatoire sur chaque cible.`,
          damage: "4*ATQ",
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
        },
        {
          img: "assets/sort2.png",
          name: "Calamite",
          description: `Attaque tous les ennemis. Reduit d'1 tour la duree de tous les buffs ennemis. Possede 50% de chances de placer un debuff ${DEBUFFS.ATK} de 50% pendant 2 tours.`,
          damage: "1.8*ATQ + 0.1*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.png",
          name: "Marque Eclatante",
          description: `Possede 60% de chances de placer un debuff ${DEBUFFS.DEF} de 60% sur tous les ennemis pendant 2 tours. Possede 30% de chances de placer un debuff ${DEBUFFS.WEAKEN} de 15% sur tous les ennemis pendant 1 tour.`,
          cooldown: 6,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "18 330",
        "ATQ": "1 211",
        "DEF": "870",
        "VIT": "91",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "30",
        "PRE": "15"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/speed.png",
  description: `Augmente la statistique VIT des Allies dans les Donjons de 25%.`
};
