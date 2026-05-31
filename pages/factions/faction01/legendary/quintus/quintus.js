const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Encore Performance",
          description: `Attacks 1 enemy. Places an extra hit if the target has no buffs. If this attack is critical, repeats the attack once.`,
          damage: "1.9*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Strip Away",
          description: `Attacks 1 enemy. Removes all buffs, then places a 60% [Decrease DEF] debuff on the target for 2 turns before attacking. These effects cannot be resisted or blocked.<br><br>Damage inflicted by this skill cannot be decreased by enemy Passive skills or Masteries, except by the Passive skills of Bosses. Damage inflicted by this skill cannot be increased by either this Champion's Masteries or ally Passive skills, except when attacking Bosses.<br><br>Resets the cooldown of the [Crowd Favorite] skill if this attack kills an enemy.`,
          damage: "5.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Crowd Favorite",
          description: `Attacks all enemies. Places a 50% [Increase ATK] buff and a 30% [Increase C. DMG] buff on this Champion for 3 turns before attacking. <br><br>Resets the cooldown of the [Strip Away] skill if this attack kills an enemy.`,
          damage: "3.8*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Percussion [P]",
          description: `Each of this Champion’s skills deals additional pure damage. The amount of pure damage dealt is equal to 10% of the target’s MAX HP for each buff on them. The additional pure damage dealt will ignore [Shield] buffs.`,
          damage: "(0.1*Target Buffs)*Target HP",
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 030",
        "ATQ": "1 608",
        "DEF": "969",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in Arena by 35%`,
};
