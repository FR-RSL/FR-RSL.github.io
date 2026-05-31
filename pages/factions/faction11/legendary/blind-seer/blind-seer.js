const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Visions of Death",
          description: `Attacks 3 times at random. Each hit has a 80% chance of decreasing the Turn Meter by 10%.`,
          damage: "1.3*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Dark Shroud",
          description: `Heals all allies by 20% of this Champion’s MAX HP.<br><br>Also places a [Block Debuffs] buff on all allies for 2 turns, then places a [Shield] buff on all allies equal to 30% of this Champion's MAX HP for 2 turns.<br><br><br>Heal Multiplier: 0.2*HPShield Multiplier: 0.3*HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Shield +5%", "Level 3: Shield +5%", "Level 4: Shield +5%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Self Sacrifice",
          description: `Revives all dead allies with 50% HP and 30% Turn Meter. <br><br>Also places a [Block Damage] buff on all allies except this Champion for 1 turn.`,
          cooldown: 5,
          levelInfo: ["Level 2: Heal +5%", "Level 3: Heal +5%", "Level 4: Heal +5%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 165",
        "ATQ": "1 332",
        "DEF": "1 035",
        "VIT": "115",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in All Battles by 34%`,
};
