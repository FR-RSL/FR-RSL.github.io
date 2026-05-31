const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hellbinder",
          description: `Attacks 1 enemy 2 times. Has a 30% chance of placing a 60% [Decrease DEF] debuff for 2 turns. Countess Lix will team up and join the attack if they are on the same team. Countess Lix will use their default skill. <br><br>Countess Lix will not team up on this attack if this skill is used when counterattacking or when teaming up to attack with another Champion.`,
          damage: "1.7*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Divine Immanence",
          description: `Attacks 1 enemy. Will ignore [Increase DEF], [Strengthen], and [Ally Protection] buffs. <br><br>Revives a random ally with 40% HP and places a [Shield] buff on them equal to 20% of their MAX HP for 2 turns if this attack kills an enemy.<br><br>Also places a [Shield] buff on this Champion equal to 20% of their MAX HP for 2 turns if this attack kills an enemy.<br><br><br>Shield Multiplier: 0.2*Target Max HP`,
          damage: "5.8*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Light of Sanctity",
          description: `Removes all buffs from targets under [Veil] or [Perfect Veil] buffs, then places a 25% [Weaken] debuff on enemies who have [Veil] or [Perfect Veil] buffs removed, then attacks all enemies.<br><br>Also has a 75% chance of placing a [Stun] debuff on all enemies for 1 turn.`,
          damage: "4*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Emissary [P]",
          description: `Fills this Champion’s Turn Meter by 3% every time an ally is hit. Decreases incoming damage by 25% if the attacker’s ATK is lower than this Champion’s.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 845",
        "ATQ": "1 619",
        "DEF": "837",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
