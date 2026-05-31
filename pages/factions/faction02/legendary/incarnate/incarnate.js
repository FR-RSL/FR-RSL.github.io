const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Attack Intruder",
          description: `Attacks 1 enemy 2 times. Each hit has a 45% chance of placing a [Provoke] debuff for 1 turn.<br><br>Has a 30% chance of counterattacking whenever an ally is hit. If the ally is from the High Elves Faction and not this Champion, the chance increases to 100%. Occurs once per hit.<br><br>Level 2 : +5% Damage<br>Level 3 : +5% Damage<br>Level 4 : +10% Buff/Debuff Chance<br>Level 5 : +10% Buff/Debuff Chance`,
          damage: "1.8*DEF",
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Formation: Phalanx",
          description: `Attacks all enemies. Has a 75% chance of removing all [Shield] buffs and 2 random buffs from all enemies.<br><br>Then, places a [Shield] buff on all allies for 2 turns. The value of the [Shield] is proportional to this Champion's DEF.<br><br>Level 2 : +10% Damage<br>Level 3 : +10% Damage<br>Level 4 : +10% Buff/Debuff Chance<br>Level 5 : +15% Buff/Debuff Chance<br>Level 6 : -1 Cooldown<br><br>Shield Multiplier: 4*DEF`,
          damage: "3.6*DEF",
          cooldown: 4,
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Defensive Measures",
          description: `Places a 50% [Ally Protection] buff on all allies except this Champion for 2 turns. Also places a 25% [Strengthen] buff on all allies for 2 turns.<br><br>Heals any ally Arbiters by 100% of their MAX HP.<br><br>Instantly activates this skill whenever this Champion is revived. This will not set this skill on cooldown.<br><br>Level 2 : -1 Cooldown<br>Level 3 : -1 Cooldown`,
          cooldown: 5,
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Crisis Response [P]",
          description: `Increases all allies' ACC by 20 for each ally under an [Ally Protection] buff.<br><br>When killed, resets the cooldown of the Destiny's Call skill for any ally Arbiters. If there are multiple Champions on the team with this skill, this effect will only activate once.<br><br>All ally Arbiters receive 30% less damage.`,
          cooldown: 4,
          isPassive: true
        },
        {
          img: "assets/passif1.webp",
          name: "Ultimate Purpose [P]",
          description: `Increases all allies' RES by 20 for each ally under an [Ally Protection] buff.<br><br>This Champion will also receive 20% of the damage of any ally Arbiters. If there are multiple Champions on the team with this skill, this effect will only activate once.<br><br>If any ally Arbiter is about to get killed by a fatal hit, places an [Unkillable] buff on her for 1 turn. If there are multiple Champions on the team with this skill, this effect will only activate once.`,
          cooldown: 4,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 320",
        "ATQ": "804",
        "DEF": "1 487",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "20"
      },
};

const aura = null;
