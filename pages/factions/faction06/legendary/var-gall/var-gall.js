const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Gleeful Ripping",
          description: `Attacks 1 enemy 2 times. <br><br>Each hit fills this Champion's Turn Meter by 5%. <br>Has a 30% chance to repeat the attack. <br><br>Each hit places a 100% [Heal Reduction] debuff on the target for 2 turns. This debuff cannot be resisted if there is at least 1 ally Champion from the Lizardmen Faction on your team.`,
          damage: "1.35*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Skull Claim",
          description: `Has a 75% chance of placing a [Provoke] debuff on a target enemy for 1 turn. This debuff cannot be resisted if there is at least 1 ally Champion from the Lizardmen Faction on your team.<br><br>Places a 25% [Strengthen] buff on all allies for 2 turns.`,
          cooldown: 3,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Abyssal Clutch",
          description: `Attacks all enemies. Has a 75% chance of placing a 50% [Decrease ATK] debuff for 2 turns.<br><br>This debuff cannot be resisted if there is at least 1 ally Champion from the Lizardmen Faction on your team.`,
          damage: "3.85*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Horrific Foe [P]",
          description: `When attacked, destroys the attacker's MAX HP by 5%. Destroys the MAX HP of Bosses by 2.5% instead (except the Scarab King, whose MAX HP will be destroyed by 5%). Cannot destroy a single enemy's MAX HP by more than 50%. Occurs once per attack. <br><br>Has a 50% chance of placing a [True Fear] debuff on targets with any destroyed MAX HP.`,
          isPassive: true
        },
        {
          img: "assets/passif1.webp",
          name: "Skull Brood [P]",
          description: `At the start of this Champion's turn, revives a random ally from the Lizardmen Faction with 50% HP and 50% Turn Meter.`,
          cooldown: 3,
          isPassive: true
        }
      ],
  stats: {
        "PV": "27 420",
        "ATQ": "1 112",
        "DEF": "1 310",
        "VIT": "107",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "90",
        "PRÉ": "70"
      },
};

const aura = null;
