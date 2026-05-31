const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Flicker Strike",
          description: `Attacks 1 enemy. Damage increases by 20% while attacking under a [Veil] buff. Heals this Champion by 25% of the damage inflicted while attacking without a [Veil] buff.<br><br><br>Heal Multiplier: 0.25*Damage Dealt`,
          damage: "3.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Neck Snapper",
          description: `Attacks 1 enemy. Damage increases by 35% while attacking under a [Veil] buff. While attacking under a [Veil] buff, enemies killed by this skill cannot be revived.<br><br>While attacking without a [Veil] buff, fully depletes the target's Turn Meter and fills this Champion's Turn Meter equal to the amount the target loses. Can only decrease the Turn Meter by up to 50% against Bosses. This Turn Meter decrease cannot be resisted.`,
          damage: "5.2*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Invisible Predator [P]",
          description: `Places a [Veil] buff on this Champion for 1 turn at the beginning of each Round.<br><br>Places a [Veil] buff on this Champion for 1 turn each time they kill an enemy.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "12 720",
        "ATQ": "1 597",
        "DEF": "859",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
