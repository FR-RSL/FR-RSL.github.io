const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Restorative Violence",
          description: `Attacks 1 enemy 4 times. Each hit heals the ally with the lowest HP by 2% of this Champion’s MAX HP.<br><br><br>Heal Multiplier: 0.02*HP`,
          damage: "0.07*HP",
          levelInfo: ["Level 2: Heal +5%", "Level 3: Heal +5%", "Level 4: Heal +5%", "Level 5: Heal +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Shaman's Gift",
          description: `Heals all allies by 10% of this Champion’s MAX HP. <br><br>Also places a [Counterattack] buff on this Champion for 2 turns.<br><br><br>Heal Multiplier: 0.1*HP`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Tusked Protection",
          description: `Places a 30% [Reflect Damage] buff and a [Shield] buff equal to 20% of this Champion’s MAX HP on all allies for 2 turns.<br><br><br>Shield Multiplier: 0.2*HP`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Ogryn Restoration [P]",
          description: `Restores destroyed MAX HP whenever this Champion heals themselves or an ally. The amount of HP restored is equal to 30% of the heal.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 640",
        "ATQ": "881",
        "DEF": "1 046",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
