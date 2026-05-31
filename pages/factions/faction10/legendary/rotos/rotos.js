const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Terror Scourge",
          description: `Attacks 1 enemy. Has a 75% chance of placing a 60% [Decrease DEF] debuff for 2 turns. Also has a 25% chance of granting an Extra Turn.`,
          damage: "1.9*ATK+0.19*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Vitality Plunder",
          description: `Attacks 1 enemy. Destroys the target's MAX HP by 20%, then adds that HP to this Champion's own MAX HP.<br><br>[Cannot destroy a single Champion's MAX HP by more than 60% in one Battle. Cannot increase this Champion's MAX HP by more than 60,000. Destroys the MAX HP of Bosses by 30% of the damage inflicted instead. This Champion's MAX HP will be increased by 15,000 when this Skill is used against Bosses.]`,
          damage: "3.5*ATK+0.3*HP",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Fated Destruction",
          description: `Attacks 1 enemy. Will ignore 60% of the target's DEF. Will also ignore [Unkillable] and [Block Damage] buffs. Enemies killed by this skill cannot be revived if this Champion has gained maximum amount of HP from the Vitality Plunder skill. Grants an Extra Turn if this skill kills an enemy.`,
          damage: "2.1*ATK+0.19*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Damage +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Spurn Oblivion [P]",
          description: `Will decrease damage from enemy hits so that incoming damage from any single hit will not exceed 50% of this Сhampion's MAX HP. Grants an Extra Turn if this damage reduction occurs. <br><br>[Does not work against Bosses.] <br><br>Decreases the damage taken from Bosses by 15%. Decreases the damage taken from Bosses by 30% if Siphi the Lost Bride is on the same team.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "11 895",
        "ATQ": "1 520",
        "DEF": "1 266",
        "VIT": "90",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
