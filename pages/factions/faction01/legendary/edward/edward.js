const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Privateer Blitz",
          description: `Attacks 1 enemy 3 times. <br><br>Each hit has a 75% chance of decreasing the target's Turn Meter by 15%. Each hit will decrease the target's Turn Meter by 25% instead if the attack is critical. This effect cannot be resisted if this Champion is under a [Veil] or [Perfect Veil] buff.`,
          damage: "1.35*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fan The Hammer",
          description: `Attacks all enemies 2 times. <br><br>The first hit steals all buffs from all enemies and decreases each enemy's Turn Meter by 20%. This effect cannot be resisted if this Champion is under a [Veil] or [Perfect Veil] buff. <br><br>The second hit has a 75% chance of placing a [Sleep] debuff on all enemies for 1 turn. This debuff will ignore any [Block Debuffs] buffs if the attack is critical. This effect cannot be resisted if this Champion is under a [Veil] or [Perfect Veil] buff.`,
          damage: "2.15*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Between The Eyes",
          description: `Attacks 1 enemy. Before attacking, places a [Perfect Veil] buff on this Champion, as well as any other Assassins on the team for 2 turns.<br><br>Will ignore [Shield], [Stone Skin], and [Block Damage] buffs. <br><br>Places a [Block Revive] debuff if the target is killed.`,
          damage: "6.5*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Cooldown -1", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Everything is Permitted [P]",
          description: `Whenever an enemy's HP drops below 25% after receiving damage from any Assassin, they receive additional bonus damage proportional to this Champion's ATK. This bonus damage will ignore 100% of the target's DEF and cannot be critical.`,
          isPassive: true
        },
        {
          img: "assets/passif1.webp",
          name: "Keelhaul [P]",
          description: `Each hit inflicted by this Champion has a 50% chance of placing a 100% [Ensnare] debuff on their target for 2 turns. Whenever this Champion kills an enemy, places a 100% [Ensnare] debuff on all other enemies for 2 turns and decreases their Turn Meter by 20%. These effects cannot be resisted if this Champion is under a [Veil] or [Perfect Veil] buff. <br><br>This Champion inflicts 20% more damage against targets under [Ensnare] debuffs.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 195",
        "ATQ": "1 575",
        "DEF": "991",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
