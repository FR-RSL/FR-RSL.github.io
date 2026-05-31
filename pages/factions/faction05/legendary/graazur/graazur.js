const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Defend The Wall!",
          description: `Attacks all enemies. Places a [Shield] buff on all allies except this Champion for 1 turn. The value of the [Shield] is proportional to this Champion’s DEF.<br><br><br>Shield Multiplier: 1.1*DEF`,
          damage: "3.1*DEF",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Shield +10%", "Level 4: Damage +10%", "Level 5: Shield +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Healing Bombardment",
          description: `Attacks all enemies. Heals this Champion by 10% of the damage dealt. <br><br>Increases the duration of all buffs on all allies by 1 turn.<br><br><br>Heal Multiplier: 0.1*Damage Dealt`,
          damage: "0.1*Target Max HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Let None Pass!",
          description: `Attacks all enemies. Has a 75% chance of placing a [Provoke] debuff for 1 turn. <br><br>Also places a 50% [Increase RES] buff and a 60% [Increase DEF] buff on all allies for 2 turns.`,
          damage: "4*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "This Wall Won't Fall! [P]",
          description: `[Passive Effect]<br><br>Whenever this Champion is attacked, heals all allies except this Champion by 70% of the damage received. Only heals by 35% of the damage received from Boss attacks. This effect has no cooldown. <br><br>[Active Effect]<br><br>Places an [Unkillable] buff on this Champion for 1 turn before receiving a fatal hit.<br><br>Heal Multiplier: 0.7*Damage Dealt`,
          cooldown: 4,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 660",
        "ATQ": "1 013",
        "DEF": "1 321",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in All Battles by 33%`,
};
