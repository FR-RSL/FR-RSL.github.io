const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sword of Redemption",
          description: `Attacks 1 enemy 2 times. Will ignore 3% of the target’s DEF for each buff on the target.<br><br>Will also ignore [Shield] buffs if the target is under 2 or more buffs or debuffs.`,
          damage: "1.8*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Chakram Cyclone",
          description: `Attacks all enemies. Will ignore 5% of the target’s DEF for each buff on the target.<br><br>Steals 20% of the Turn Meter from each enemy. This effect cannot be resisted if the target is under 2 or more buffs or debuffs.`,
          damage: "4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Whip of Destiny",
          description: `Attacks all enemies. Will ignore 10% of the target’s DEF for each buff on the target.<br><br>Resets the cooldown of this skill if it kills 2 or more enemies.`,
          damage: "4.1*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "For the Greater Good! [P]",
          description: `[Passive Effect]<br><br>Increases this Champion’s ATK by 10% every time they use an active skill (stacks up to 100%). Resets each Round.<br><br>Also has a 50% chance of randomly changing this Champion’s weak hits to normal, strong, or critical hits. The chance increases to 100% when attacking enemies under 2 or more buffs or debuffs.<br><br>[Active Effect]<br><br>Fills this Champion’s Turn Meter by 100% and places a 50% [Increase ATK] buff on this Champion for 1 turn whenever 8 or more buffs are placed on the enemy team in a single turn.`,
          cooldown: 3,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 690",
        "ATQ": "1 542",
        "DEF": "1 046",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in Arena by 33%`,
};
