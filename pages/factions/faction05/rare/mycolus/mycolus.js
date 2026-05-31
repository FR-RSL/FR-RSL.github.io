const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Vigor Spores",
          description: `Attacks 1 enemy. Heals this Champion by 30% of the damage inflicted. <br><br>Also heals the ally with the lowest HP by 10% of their MAX HP. This heal will not affect this Champion.<br><br><br>Heal Multiplier: 0.3*Damage Dealt`,
          damage: "4.2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fungal Privilege",
          description: `Places a [Shield] buff on this Champion for 2 turns equal to 20% of their MAX HP, then places a 25% [Ally Protection] buff on all allies except this Champion for 2 turns. <br><br>Will also heal all allies except this Champion by 10% of their MAX HP.<br><br><br>Shield Multiplier: 0.2*HPHeal Multiplier: 0.1*Target Max HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Heal +5%", "Level 3: Heal +5%", "Level 4: Heal +5%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Absorbtion Roots [P]",
          description: `Decreases the damage all allies receive by 5%. This Champion will receive that damage instead.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 855",
        "ATQ": "892",
        "DEF": "1 079",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in Faction Wars by 21%`,
};
