const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Skyfall Arrow",
          description: `Attacks all enemies. This attack will not trigger counterattacks. <br><br>Fills this Champion's Turn Meter by 5% for each living enemy after the attack.`,
          damage: "2.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Falcon Shot",
          description: `Attacks all enemies 2 times. The first hit has a 75% chance of placing a [Block Buffs] debuff for 2 turns. The second hit has a 75% chance of placing a 50% [Decrease ATK] debuff for 2 turns. <br><br>Fills this Champion's Turn Meter by 5% for each living enemy after the attack.`,
          damage: "1.5*ATK+0.035*Target Max HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Forever Marked",
          description: `Places a 50% [Increase ATK] buff, a 50% [Increase ACC] buff and a 30% [Increase SPD] buff on this Champion for 3 turns. Then grants an Extra Turn.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "No Foe Too Great [P]",
          description: `Increases this Champion’s MAX HP by 20% for each enemy killed or Hydra Head decapitated by this Champion (stacks up to 50,000).`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 690",
        "ATQ": "1 454",
        "DEF": "1 079",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
