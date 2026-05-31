const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Phaseclaw",
          description: `Attacks 1 enemy. If this Champion is under a [Veil] or [Perfect Veil] buff, attacks all enemies instead. <br><br>Places a [Perfect Veil] buff on this Champion for 1 turn.`,
          damage: "ATK*(1+SPD/100)",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Feline Frenzy",
          description: `Attacks 1 enemy 3 times. <br><br>Each hit will decrease the enemy's SPD by 1% (stacks up to 10%). This effect does not work against Bosses. Each hit will also increase this Champion’s SPD by 1% (stacks up to 10%). <br><br>If this skill kills an enemy, places a [Perfect Veil] buff on this Champion and the ally with the lowest Turn Meter for 2 turns.`,
          damage: "ATK*(0.5*SPD/100)",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Grinning Helix",
          description: `Attacks all enemies. Before attacking, places a [Perfect Veil] buff and a 50% [Increase ATK] on this Champion for 2 turns. <br><br>Grants an Extra Turn if this attack kills an enemy.`,
          damage: "ATK*(1+SPD/100)",
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Shadowsmile [P]",
          description: `[Passive Effect]<br><br>If this Champion is under a [Veil] or [Perfect Veil] buff, Turn Meter fill effects are 30% more effective. Also, if this Champion is under a [Veil] or [Perfect Veil] buff, this Champion’s attacks will ignore 15% of the target’s DEF and inflict 15% more damage. <br><br>[Active Effect]<br><br>Whenever this Champion is about to receive a hit that would drop their HP below 20%, blocks the incoming damage and places a [Block Damage] and a [Perfect Veil] buff on this Champion for 1 turn.`,
          cooldown: 3,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 360",
        "ATQ": "1 520",
        "DEF": "1 035",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in All Battles by 19%`,
};
