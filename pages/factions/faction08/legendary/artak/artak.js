const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Chaosrazor",
          description: `Attacks all enemies. Has a 35% chance to extend the duration of any [HP Burn] debuffs on each target by 1 turn.`,
          damage: "0.1*HP",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Dogs of War",
          description: `Attacks all enemies. Before attacking, instantly activates one tick of all [HP Burn] debuffs on all enemies. <br><br>Has a 75% chance of placing a 50% [Decrease ATK] debuff on all enemies for 2 turns.`,
          damage: "0.25*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Purifyre",
          description: `Attacks all enemies 2 times. The first hit has a 75% chance of placing a [HP Burn] debuff on all enemies for 2 turns. <br><br>Restores this Champion’s destroyed MAX HP by 10% for each [HP Burn] debuff placed by this skill. Heals this Champion by 5% of their MAX HP for each [HP Burn] debuff attempt blocked or resisted by the enemy team.<br><br><br>Heal Multiplier: 0.05*HP`,
          damage: "0.14*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Burning Blood [P]",
          description: `Whenever a [HP Burn] debuff is activated, destroys this Champion’s MAX HP by 5%. Stacks up to 50%. <br><br>Increases this Champion’s DMG, C. DMG, and DEF by 1% for each 1% of their destroyed MAX HP. Also increases this Champion’s SPD and RES by 2 for each 1% of their destroyed MAX HP.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 140",
        "ATQ": "936",
        "DEF": "1 167",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
