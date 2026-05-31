const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hematic Blades",
          description: `Attacks 1 enemy 3 times. <br><br>Each hit has a 33% chance of granting an Extra Turn. Cannot gain more than one Extra Turn. Cannot gain an Extra Turn if the target is a Boss.`,
          damage: "0.7*ATK",
          levelInfo: ["Level 2: Damage +15%", "Level 3: Damage +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Sanguine Fissure",
          description: `Attacks 1 enemy. <br><br>Will ignore 33% of the target’s DEF. Will ignore 99% of the target’s DEF, [Stone Skin] and [Block Damage] buffs instead if this skill is used on a Turn number that is divisible by 3. <br><br>If the target is killed, increases the cooldowns of all enemy skills by 3 turns. This effect cannot be resisted if this skill is used on a Turn number that is divisible by 3.`,
          damage: "5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +15%", "Level 3: Damage +15%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Gorescream",
          description: `Attacks 1 enemy. Before attacking, removes all buffs from all enemies. This effect cannot be resisted by enemies with a number of buffs that is divisible by 3. Will attack all remaining enemies with less than 66% HP.  <br><br>Grants an Extra Turn if this Champion is under a number of buffs that is divisible by 3.`,
          damage: "5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +15%", "Level 3: Damage +15%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Say Her Name [P]",
          description: `Each subsequent hit from this Champion deals 33% more damage (stacks up to 99%). Resets after the 99% damage bonus is applied. <br><br>Each subsequent hit this Champion receives deals 33% (11% from Bosses) less damage. Stacks up to 3 times. Resets after the damage reduction is applied for the third time.<br><br>Whenever an enemy is revived, revives this Champion with 33% HP and 66% Turn Meter. After being revived, places a [True Fear] debuff on all enemies for 2 turns. This debuff cannot be resisted or blocked.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 525",
        "ATQ": "1 520",
        "DEF": "1 024",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in All Battles by 33%`,
};
