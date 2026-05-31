const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Vorpal Sword",
          description: `Attacks 1 enemy 2 times. Places an extra hit if the target has any active skills on cooldown. <br><br>Each hit has an 80% chance of decreasing the duration of a random buff on the target by 1 turn.`,
          damage: "1.7*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Clockwork Cyclone",
          description: `Attacks all enemies. <br><br>Has a 75% chance of increasing the cooldowns of all enemy skills by 2 turns. <br><br>Also has a 75% chance of decreasing each target’s Turn Meter by 15%. If at least one of a target’s skills has its cooldown increased to the max, decreases their Turn Meter by 30% instead.`,
          damage: "4.2*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Queenslayer",
          description: `Attacks 1 enemy. Will ignore 20% of the target’s DEF. <br><br>If the initial target is killed, also attacks the enemy with the lowest HP. Will also ignore 20% of the target’s DEF.`,
          damage: "5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Tick Tock [P]",
          description: `[Passive Effect]<br><br>Whenever this Champion attacks, inflicts 3% more damage to each target for each turn remaining on all of their skills' cooldowns. The bonus damage is counted individually for each target. <br><br>[Active Effect]<br><br>Resets the cooldown of one of this Champion’s skills each time they kill an enemy. Occurs once per skill.`,
          cooldown: 3,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 020",
        "ATQ": "1 443",
        "DEF": "1 068",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in All Battles by 30%`,
};
