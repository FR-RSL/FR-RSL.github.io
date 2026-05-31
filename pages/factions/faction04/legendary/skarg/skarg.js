const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tide of Steel",
          description: `Attacks 1 enemy. Places a 30% [Increase SPD] buff on this Champion for 2 turns if this attack is critical. Places a 30% [Increase C. RATE] buff on this Champion for 2 turns if this attack is not critical.`,
          damage: "3*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Hunt the Marked",
          description: `Attacks 1 enemy 3 times. Places an extra hit for each buff or debuff on the target. Can place up to 3 extra hits. Places a [HP Burn] debuff for 2 turns and a [True Fear] debuff for 1 turn on all enemies if this attack places all 3 extra hits. Steals all the buffs from the target after the attack.`,
          damage: "2*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +15%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Elder's Clarion",
          description: `Places a 60% [Increase DEF] buff on this Champion for 3 turns. Places a [Fear] debuff on all enemies for 1 turn. Places a [True Fear] debuff for 1 turn on targets under [Block Damage] buffs. Places a 30% [Decrease SPD] debuff for 2 turns on targets under [Shield] buffs. These debuffs cannot be resisted. Also places a [Provoke] debuff on Legendary Champions for 1 turn.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Kingslayer [P]",
          description: `Receives 15% less damage from Legendary and Mythical Champions. <br><br>Inflicts damage equal to this Champion's ATK when attacked by Legendary and Mythical Champions. The extra hit cannot be critical.`,
          damage: "ATK",
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 185",
        "ATQ": "1 630",
        "DEF": "870",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Increases Ally C.RATE in Arena by 30%`,
};
