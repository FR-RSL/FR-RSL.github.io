const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Dread Scythe",
          description: `Attacks 1 enemy. This attack ignores [Shield] buffs. <br><br>Has a 60% chance of increasing the duration of all debuffs on the target by 1 turn. <br><br>Also has an 80% chance of applying a [Debuff Spread] effect, taking 2 random debuffs from the target and placing them on all enemies under a [Hex] debuff.`,
          damage: "3.6*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Hex of Blades",
          description: `Attacks all enemies. This attack deals single-target damage to each target individually, rather than AoE damage.<br><br>Before attacking, has an 80% chance of placing a [Hex] debuff on all enemies for 2 turns. Will ignore 20% of each enemy's RES for each dead ally. <br><br>Damage of this skill increases by 10% for each debuff on each enemy.`,
          damage: "4.2*ATK+((4.2*ATK)*0.1*Target Debuffs)",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Death's Bargain",
          description: `Target an ally.<br><br>If the ally is alive, kills them and unlocks a secret skill, Malice Unleashed. Also places a 25% [Weaken] debuff for 2 turns and [True Fear] debuff for 1 turn on all enemies. These debuffs cannot be resisted or blocked. Then, fills this Champion's Turn Meter by 75%. <br><br>If the ally is dead, heals this Champion by 50% of the dead ally's MAX HP. If all allies are dead, also unlocks a secret skill, Malice Unleashed. Places a [Shield] buff on this Champion for 2 turns. The value of the [Shield] is equal to any surplus heal. If this Champion already has a [Shield] buff, the value of the [Shield] is increased by any surplus heal. Then, fills this Champion's Turn Meter by 75%.<br><br><br>Heal Multiplier: 0.5*Target Max HPShield Multiplier: Remaining Heal Amount`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort4.webp",
          name: "Malice Unleashed",
          description: `Attacks 1 enemy. Before attacking, steals all buffs from the target. This effect cannot be resisted. If the target has ATK equal to or higher than this Champion's ATK, this attack gains a bonus damage multiplier, equal to the target's ATK. Not applicable to Bosses. If the target's ATK is less than this Champion's ATK, this attack will ignore 50% of the target's DEF. This attack will also ignore [Block Damage], [Unkillable], [Shield] and [Ally Protection] buffs. Places a [Block Revive] debuff if the target is killed.`,
          damage: "(If Boss*(7.5*ATK))+((TRG_ATK>=ATK)*(!If Boss*7.5*(ATK+TRG_ATK)))+((TRG_ATK<ATK)*(!If Boss*(7.5*ATK)))",
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Phantom Bulwark [P]",
          description: `[Active Effect] <br><br>Places a [Shield] buff on this Champion each time an ally or enemy Champion dies. The value of the [Shield] buff is equal to 50% of the dead Champion's MAX HP. This [Shield] buff cannot be removed, stolen, or transferred. <br><br>If this Champion is already under a [Shield] buff, the value of the [Shield] is increased by 50% of the dead Champion's MAX HP. Does not activate when a Boss or minion dies. <br><br>[Passive Effect] <br><br>Whenever an enemy hits this Champion while they are under a [Shield] buff, places a random debuff on the attacking enemy. [True Fear], [Freeze], [Provoke], [Petrification], [Sleep], and [Stun] debuffs are placed for 1 turn. Any other debuffs are placed for 2 turns. Will ignore 20% of enemy RES for each dead ally. <br><br>Cannot place Boss-exclusive debuffs, [Sheep] or [Smite] debuffs.<br><br>Shield Multiplier: 0.5*Target Max HP`,
          cooldown: 1,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 865",
        "ATQ": "1 531",
        "DEF": "1 057",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in Arena by 30%`,
};
