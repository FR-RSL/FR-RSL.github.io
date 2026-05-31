const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Mournsword",
          description: `Attacks 1 enemy. <br><br>Heals this Champion by 50% of the damage inflicted. If there is any surplus heal, places a [Shield] buff on this Champion for 2 turns equal to the surplus heal. <br><br>Will attack using the Burning Courage skill instead if the target is from the Corrupted Alliance.<br><br><br>Heal Multiplier: 0.5*Damage DealtShield Multiplier: Remaining Heal Amount`,
          damage: "3.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "In Lumaya's Name",
          description: `Attack all enemies. <br><br>Damage inflicted by this skill increases by 5% for each buff and debuff on the target. Will ignore 25% DEF of targets that have no buffs.`,
          damage: "3.7*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Burning Courage",
          description: `Attacks 1 enemy. Before attacking, removes all buffs from the target. Damage increases by 20% for each buff removed.<br><br>[Sacred Order Unity]<br><br>1 Faction ally:<br>Before attacking, steals all buffs from the target instead. This effect cannot be resisted. Damage increases by 20% for each buff stolen.<br><br>2 Faction allies:<br>The damage inflicted by this skill increases by 20% for each turn taken by an ally or enemy before this Champion’s next turn. Resets at the end of this Champion’s turn.<br><br>3 Faction allies:<br>Will attack all remaining enemies with any surplus damage if the initial target is killed. This attack cannot be critical. If the initial target survives, places a guaranteed [True Fear] debuff on all enemies for 1 turn.`,
          damage: "6*ATK+(0.2*6*ATK*HeroCounterWithId(2))Multiplier: Remaining Damage Amount",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Til My Last Breath [P]",
          description: `Decreases the damage from hits taken by this Champion by 10% for each turn taken by an ally or enemy before this Champion's next turn. Resets at the end of this Champion's next turn.<br><br>[Sacred Order Unity]<br><br>1 Faction ally:<br>Fills an ally’s Turn Meter by 2% whenever they place a buff or debuff.<br><br>2 Faction allies:<br>Places a [Revive On Death] buff for 1 turn on an ally whenever their HP drops below 50%.<br><br>3 Faction allies:<br>All allies are immune to cooldown increasing effects.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 535",
        "ATQ": "1 564",
        "DEF": "1 046",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/sup-attack.webp",
  description: `Increases Ally ATK in All Battles by 30%

[Sacred Order only]

Increases Ally C.RATE in all battles by 15%`,
};
