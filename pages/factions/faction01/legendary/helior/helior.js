const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sunshine Halberd",
          description: `Attacks 1 enemy. Increases this Champion’s DEF by 5% if this attack is critical (Stacks up to 20%). <br><br>Will also heal this Champion by 75% of their DEF after attacking if their DEF has already been increased by 20%.<br><br><br>Heal Multiplier: 0.75*DEF`,
          damage: "3.2*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Solar Blessing",
          description: `Attacks all enemies. Places a [Shield] buff on all allies for 2 turns equal to 20% of the damage inflicted.<br><br><br>Shield Multiplier: 0.2*Damage Dealt`,
          damage: "3*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Damage +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Harsh Light",
          description: `Transfers all debuffs from all allies to a target enemy, then attacks that enemy with the default skill. <br><br>Converts this Champion’s RES into additional ACC when using this skill.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Intercessor [P]",
          description: `Whenever an ally that has 2 or more debuffs is attacked, this Champion will absorb 30% of the damage inflicted on that ally.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 495",
        "ATQ": "804",
        "DEF": "1 542",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Increases Ally RES in all Battles by 60`,
};
