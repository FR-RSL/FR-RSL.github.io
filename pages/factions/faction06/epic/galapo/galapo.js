const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Roll With The Times",
          description: `Attacks all enemies. Heals this Champion by 5% of their MAX HP.`,
          damage: "3.2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Reclusive Sage",
          description: `Heals all allies by 15% of this Champion's MAX HP, and fills the Turn Meters of all allies by 15%. <br><br>Also places a 25% [Increase RES] buff on all allies for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "You've Much To Learn",
          description: `Revives an ally with 75% HP and 50% Turn Meter. <br><br>Places an [Unkillable] buff and 30% [Reflect Damage] buff on that ally for 2 turns.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Outliver Of Empires [P]",
          description: `Heals this Champion by 25% of their MAX HP whenever an ally dies.<br><br>Heals all allies by 50% of this Champion's MAX HP whenever this Champion dies.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 340",
        "ATQ": "881",
        "DEF": "1 266",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Increases Ally RES in Faction Crypts by 45`,
};
