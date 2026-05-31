const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Trample",
          description: `Attacks 1 enemy. Will attack all remaining enemies with any surplus damage if the target is killed.`,
          damage: "Remaining Damage Amount",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Split Asunder",
          description: `Attacks 1 enemy. Places a 60% [Decrease DEF] debuff for 2 turns. This debuff is guaranteed.`,
          damage: "5.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Righteous Charge",
          description: `Attacks 1 enemy. Damage increases according to the number of buffs on this Champion.`,
          damage: "ATK*3*(1+Active Buff Count*0.25)",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort4.webp",
          name: "Skypiercer",
          description: `Attacks all enemies. Will ignore [Shield] buffs and [Block Damage] buffs, as well as 50% of the target's DEF.`,
          damage: "4.3*ATK",
          cooldown: 4,
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 030",
        "ATQ": "1 575",
        "DEF": "1 002",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `
Increases Ally ATK in all Battles by 33%`,
};
