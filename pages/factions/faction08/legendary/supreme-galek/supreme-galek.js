const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Exemplar of Rage",
          description: `Attacks 1 enemy 2 times. Each hit has an extra 10% chance of inflicting a critical hit. <br><br>Each hit also has a 40% chance of increasing the duration of any [HP Burn] debuffs on the target by 1 turn.`,
          damage: "2.1*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Bloodshed Tempest",
          description: `Attacks 4 times at random. Places a 50% [Increase ATK] buff on this Champion for 3 turns before attacking. <br><br>Each hit has an extra 10% chance of inflicting a critical hit. Each hit also has a 75% chance of instantly activating any [HP Burn] debuffs on each target and decreasing the duration of those [HP Burn] debuffs by 1 turn. <br><br>Fills this Champion’s Turn Meter by 30% if 3 or more [HP Burn] debuffs are activated during the attack.`,
          damage: "1.65*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Unreasoning Outburst",
          description: `Attacks all enemies. Has an extra 10% chance of inflicting a critical hit. Has a 75% chance of placing [HP Burn] and [Block Buffs] debuffs for 2 turns. <br><br>Also places a 30% [Decrease SPD] debuff on targets whose Turn Meter is higher than 50%.`,
          damage: "4.6*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Laugh At Danger [P]",
          description: `Whenever this Champion receives a [Fear], [True Fear], [Freeze], [Provoke], [Sleep], [Stun], or [Petrification] debuff, instantly removes it. Then, fully heals this Champion, and grants an Extra Turn.<br><br>Heal Multiplier: HP`,
          cooldown: 4,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 010",
        "ATQ": "1 509",
        "DEF": "936",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in All Battles by 33%`,
};
