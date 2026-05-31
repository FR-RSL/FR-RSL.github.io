const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Soul Reaper",
          description: `Attacks 1 enemy. Has an 85% chance of placing a 100% [Heal Reduction] debuff for 2 turns.`,
          damage: "4.1*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Spikes",
          description: `Places a 50% [Increase ATK] buff on this Champion for 2 turns, then attacks 4 times at random. The attacks will be critical if the target has any buffs.`,
          damage: "1.6*ATK",
          cooldown: 6,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Bleeding Wounds",
          description: `Attacks all enemies 2 times. Damage increases according to the amount of HP this Champion has lost.<br><br>This is a secret skill and only becomes available when this Champion has lost 50% of their HP.`,
          damage: "(1.9+((1-Current HP %)*100)/30)*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Damage +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 865",
        "ATQ": "1 222",
        "DEF": "1 090",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in Arena by 33%`,
};
