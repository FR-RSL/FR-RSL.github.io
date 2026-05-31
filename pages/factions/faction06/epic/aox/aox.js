const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Feathered Staff",
          description: `Attacks 1 enemy 2 times. Each hit has a 10% chance of placing a 5% [Poison] debuff for 2 turns.`,
          damage: "2.1*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Lore of Restoration",
          description: `Attacks 1 enemy. Heals all allies by 10% of their MAX HP.<br><br>Heals each ally by an extra 2.5% for each debuff on the target.<br><br><br>Heal Multiplier: 0.1*Target Max HP+(0.025*Target Max HP*Target Debuffs)`,
          damage: "5.7*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Heal +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Weight of Aeons",
          description: `Places a 50% [Decrease ATK] debuff on all enemies for 2 turns. Also has a 75% chance of decreasing each enemy's Turn Meter by 20%. Places a 30% [Decrease C. RATE] debuff on the target for 2 turns if they have 50% or more Turn Meter after the Turn Meter decrease.`,
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Steward of Time [P]",
          description: `Increases the duration of 2 random debuffs on the attacker by 1 turn when attacked. Occurs once per hit.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 010",
        "ATQ": "991",
        "DEF": "1 178",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in Doom Tower by 60`,
};
