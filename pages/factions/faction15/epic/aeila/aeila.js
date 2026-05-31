const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Restorative Blow",
          description: `Attacks 1 enemy. Restores destroyed MAX HP of this Champion or the ally with the most destroyed HP by 25% of their destroyed MAX HP.`,
          damage: "4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Song Strike",
          description: `Attacks 1 enemy. Before attacking, places a 50% [Increase ACC] buff on all allies for 2 turns. <br><br>Has a 75% chance of placing a [Sleep] debuff for 1 turn.`,
          damage: "5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Healing Haven",
          description: `Places a [Block Debuffs] buff on all allies for 2 turns. <br><br>Then, heals all allies by 30% of their MAX HP.<br><br><br>Heal Multiplier: 0.3*Target Max HP`,
          cooldown: 6,
          levelInfo: ["Level 2: Heal +5%", "Level 3: Heal +10%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Rhythmic Flow [P]",
          description: `Has a 12% chance of activating an [Instant Turn] effect on this Champion or an ally after using any active skill. If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.`,
          cooldown: 1,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 000",
        "ATQ": "1 123",
        "DEF": "980",
        "VIT": "108",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
