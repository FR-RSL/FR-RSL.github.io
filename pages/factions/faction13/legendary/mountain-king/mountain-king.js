const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Thunder Cleave",
          description: `Attacks 1 enemy.<br><br>Fills this Champion's Turn Meter by 10%. Fills by an additional 2% for each buff on the target.`,
          damage: "0.27*HP+1*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Enchanted Axe",
          description: `Attacks 1 enemy.<br><br>Will ignore 50% of the target's DEF.<br><br>Grants an Extra Turn if this attack kills an enemy.`,
          damage: "0.3*HP+1.8*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Regal Force",
          description: `Attacks 1 enemy.<br><br>Will ignore [Shield], [Strengthen], [Unkillable], [Ally Protection], and [Block Damage] buffs.<br><br>Decreases the cooldown of the Enchanted Axe skill by 2 turns if this attack kills an enemy.`,
          damage: "0.35*HP+1.8*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Fabled Skill [P]",
          description: `Increases this Champion's ATK by 50% each time this Champion kills an enemy. Stacks up to 100%. <br><br>Immune to [Decrease ATK] and [Block Active Skills] debuffs.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "31 050",
        "ATQ": "1 432",
        "DEF": "1 112",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "90",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in All Battles by 25%`,
};
