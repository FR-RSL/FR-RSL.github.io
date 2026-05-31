const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Venin Juvénile",
          description: `Attaque tous les ennemis. Place un débuff ${DEBUFFS.POISON} de 5 % pendant 2 tours. Il est impossible de résister à cet effet ou de le bloquer.`,
          damage: "4*ATQ",
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Grâce Maternelle [P]",
          description: `Soigne Agreth l'Araignée de l'Au-delà de 10 % de ses PV MAX chaque fois que ce Bébé contre-attaque. 

Place un buff ${BUFFS.ALLY_PROTECT} de 50 % sur Agreth pendant 2 tours dès qu'un buff ${BUFFS.COUNTER} de ce Bébé est retiré ou expire. Ce buff ${BUFFS.ALLY_PROTECT} ne peut pas être retiré. Si Agreth possède déjà un buff ${BUFFS.ALLY_PROTECT}, augmente sa durée d'1 tour.`,
          damage: "1.8*ATQ + 0.1*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Marque Éclatante",
          description: `Possède 60 % de chances de placer, pendant 2 tours, un débuff de ${DEBUFFS.DEF} de 60 % sur tous les ennemis. Possède 30 % de chances de placer, pendant 1 tour, un débuff d'${DEBUFFS.WEAKEN} de 15 % sur tous les ennemis.`,
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
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Allies dans les Donjons de 25%.`
};
