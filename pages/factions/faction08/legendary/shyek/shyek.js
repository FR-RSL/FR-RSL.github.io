const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Kill Command",
          description: `Attacks 1 enemy. Has a 50% chance of placing a 60% [Decrease DEF] debuff for 2 turns. <br><br>Then, teams up with any ally Terrorbeasts, Goremasks, Hound Spawns, Hellfangs, Fellhounds, Stitched Beasts, and Kro'khad the Throatrippers to attack. The allies joining the attack will use their default skills.`,
          damage: "0.2*HP",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Pack Alpha",
          description: `Removes all debuffs from this Champion and heals them by 50% of their MAX HP. <br><br>Then, places a [Shield] buff on this Champion for 2 turns. The value of the [Shield] is equal to any surplus heal. The [Shield] buff cannot be removed, stolen, or transferred if at least one Terrorbeast, Goremask, Hound Spawn, Hellfang, Fellhound, Stitched Beast, or Kro'khad the Throatripper is on the same team. <br><br>Finally, places a [Taunt] buff and a 30% [Reflect Damage] buff on this Champion for 2 turns. These buffs cannot be removed, stolen, or transferred if at least one Terrorbeast, Goremask, Hound Spawn, Hellfang, Fellhound, Stitched Beast, or Kro'khad the Throatripper is on the same team.<br><br><br>Heal Multiplier: 0.5*HPShield Multiplier: Remaining Heal Amount`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Blood Howl",
          description: `Fills the Turn Meters of all allies by 25%. <br><br>Also has an 80% chance of placing a [Block Buffs] debuff on all enemies for 2 turns. This debuff cannot be resisted if at least one Terrorbeast, Goremask, Hound Spawn, Hellfang, Fellhound, Stitched Beast, or Kro'khad the Throatripper is on the same team.`,
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "We Hunt As One [P]",
          description: `When attacked, places a [Hex] debuff on the attacker for 1 turn. Ally attacks on targets under a [Hex] debuff placed by this Champion deal 20% more damage. <br><br>When this Champion is attacked, all ally Terrorbeasts, Goremasks, Hound Spawns, Hellfangs, Fellhounds, Stitched Beasts, and Kro'khad the Throatrippers will counterattack.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 305",
        "ATQ": "870",
        "DEF": "1 222",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in All Battles by 19%`,
};
