const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Cold Comfort",
          description: `Attacks 1 enemy 2 times. Places an extra hit if the target is under a [Freeze] debuff. Heals this Champion by 10% of the damage inflicted.<br><br><br>Heal Multiplier: 0.1*Damage Dealt`,
          damage: "1.8*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Frost Jutsu",
          description: `Attacks 3 times at random. Each hit has a 75% chance of placing a [Freeze] debuff for 1 turn.`,
          damage: "2.1*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Frost Breaker",
          description: `Attacks 1 enemy. Will ignore [Increase DEF] and [Shield] buffs. Will also ignore 50% of the target’s DEF if they are under a [Freeze] debuff. <br><br>Places a [Counterattack] buff and a 50% [Increase ATK] buff on this Champion for 2 turns if this attack kills an enemy.`,
          damage: "5.6*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Dignity [P]",
          description: `Counterattacks with the Cold Comfort skill whenever an enemy places a [Stun], [Sleep], [Freeze], [Provoke], [Fear], [True Fear], [Petrification] debuff on an ally.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 535",
        "ATQ": "1 476",
        "DEF": "859",
        "VIT": "90",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
