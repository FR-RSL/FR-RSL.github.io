const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lancer",
          description: `Attacks 1 enemy. Has a 30% chance of stealing 1 random buff from the target.`,
          damage: "0.25*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Excoriating Light",
          description: `Attacks all enemies. <br><br>Before attacking, has a 50% chance of removing any [Block Debuffs] buffs from all enemies. <br><br>Also has a 50% chance of placing a [Block Buffs] debuff on all enemies for 2 turns after attacking.`,
          damage: "0.24*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Shield of Aravia",
          description: `Places a [Shield] buff on all allies for 2 turns equal to 20% of this Champion’s MAX HP. <br><br>Also places a 15% [Strengthen] buff on all allies for 2 turns.<br><br><br>Shield Multiplier: 0.2*HP`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Inviolable Nobility [P]",
          description: `Heals this Champion by 30% of their MAX HP whenever a [Shield] buff placed by the Shield of Aravia skill on this Champion expires, is removed, or is broken by an enemy attack.<br><br>Heal Multiplier: 0.3*HP`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 480",
        "ATQ": "749",
        "DEF": "1 123",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = null;
