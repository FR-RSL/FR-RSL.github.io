const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Volcanic Rend",
          description: `Attacks 1 enemy. Fills this Champion’s Turn Meter by 15%. <br><br>Also fills the Turn Meters of all allies, except this Champion, by 10%, when attacking a target under a [HP Burn] debuff.`,
          damage: "4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Blazing Barrier",
          description: `Places a [HP Burn] debuff on all enemies for 3 turns, and instantly activates one tick of all [HP Burn] debuffs on all enemies. <br><br>Then places a [Shield] buff on all allies for 2 turns equal to the damage inflicted by the [HP Burn] activation. The value of the [Shield] buff cannot exceed 25,000 HP.<br><br><br>Shield Multiplier: Total Burn Damage`,
          cooldown: 5,
          levelInfo: ["Level 2: Shield +10%", "Level 3: Cooldown -1", "Level 4: Shield +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rise From Ash",
          description: `Revives all dead allies with 50% HP and 40% Turn Meter. <br><br>Grants an Extra Turn.`,
          cooldown: 7,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Pyroclastic Boon [P]",
          description: `Fills the Turn Meters of all allies by 5% for each [HP Burn] debuff placed. <br><br>Whenever a [HP Burn] debuff is activated, heals all allies by 5% of their MAX HP. Whenever a [HP Burn] debuff is activated on Skavag, Tainted Skavag, Spiderlings, or Tainted Spiderlings, heals all allies by 1% of their MAX HP. <br><br>Whenever a [HP Burn] debuff is removed from an enemy, places a 50% [Decrease RES] debuff on that enemy for 1 turn. <br><br>Whenever an ally is killed by an enemy under a [HP Burn] debuff, fills this Champion’s Turn Meter by 20%. <br><br>Increases this Champion’s SPD by 7 for each active [HP Burn] debuff.<br><br>Heal Multiplier: Spider: 1% * Target Max HP or Other: 5% * Target Max HP`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 825",
        "ATQ": "1 112",
        "DEF": "1 211",
        "VIT": "109",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 33%`,
};
