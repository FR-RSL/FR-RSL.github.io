const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.png",
          name: "Eclair Fracassant",
          description: `Attacks 1 enemy 3 times. Attacks 1 enemy 6 times instead if this Champion has 50% HP or less. Each hit decreases the enemy's Turn Meter by 7.5% and increases this Champion's Turn Meter by 7.5%. This effect cannot be resisted if this Champion is under a [Veil] or [Perfect Veil] buff.

`,
          damage: "1.85*ATQ",
          levelInfo: ["Degats +5%", "Degats +15%"],
        },
        {
          img: "assets/sort2.png",
          name: "Saignee Rapide",
          description: `Attacks 1 enemy. Before attacking, places a 60% [Decrease DEF] debuff and a [HP Burn] debuff on the target for 3 turns. These debuffs cannot be resisted if this Champion is under a [Veil] or [Perfect Veil] buff. Places a [Stun] debuff on all enemies for 1 turn if the damage dealt by this skill is more than 50% of target’s MAX HP. This debuff cannot be resisted if this Champion is under a [Veil] or [Perfect Veil] buff.`,
          damage: "6*ATQ",
          cooldown: 3,
          levelInfo: ["Temps de recharge -1"],
        },
        {
          img: "assets/sort3.png",
          name: "Yo",
          description: `Ciao Kombucha`,
          damage: "5*DEF (Soin)",
          cooldown: 8,
          levelInfo: ["Soin +20%"],
          isPassive: true,
        },
        {
          img: "assets/sort4.png",
          name: "Test",
          description: `efwfwe`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "17000",
        "ATQ": "1000",
        "DEF": "1000",
        "VIT": "115",
        "TAUX C.": "15",
        "DEG C.": "65",
        "RES": "30",
        "PRE": "10"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/attack.png",
  description: `Augmente la statistique ATQ des allies lors de toutes les Batailles de 33%.`
};
