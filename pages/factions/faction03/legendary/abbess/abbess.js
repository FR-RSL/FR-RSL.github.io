const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Arrow of Rebuke",
          description: `Attacks 1 enemy. Removes 1 random debuff from this Champion and places it on the target.`,
          damage: "2.8*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Mass Impalement",
          description: `Attacks all enemies. Has a 75% chance of placing a 60% [Decrease DEF] debuff for 2 turns.`,
          damage: "5.1*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Divine Wrath",
          description: `Attacks all enemies. Damage inflicted is proportional to either this Champion's ATK or the target's DEF or ATK stat, whichever is highest. <br><br>Deals an extra 30% C. DMG if the target's ATK is highest. Will ignore 30% of the target's DEF if the target's DEF is highest.`,
          damage: "4.5*ATKMultiplier: TRG_ATK*4.5Multiplier: 4.5*TRG_DEF",
          cooldown: 6,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 040",
        "ATQ": "1 564",
        "DEF": "1 079",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in Faction Wars by 34%`,
};
