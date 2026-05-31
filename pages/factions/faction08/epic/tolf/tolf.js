const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Blade Hand Butcher",
          description: `Attacks 1 enemy 2 times. Each hit heals this Champion by 30% of the damage inflicted.<br><br>This attack cannot be critical.<br><br><br>Heal Multiplier: 0.3*Damage Dealt`,
          damage: "0.21*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%", "Level 6: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Cut Wide Open",
          description: `Attacks 1 enemy. When not attacking Bosses, inflicts pure damage and decreases the target’s HP to 50%. Inflicts damage based on this Champion’s MAX HP instead and places a [Stun] debuff for 1 turn if the target already has less than 50% HP.<br><br>Inflicts damage based on this Champion’s MAX HP when attacking Bosses.<br><br>This attack cannot be critical.`,
          damage: "0.32*HPMultiplier: 1*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Damage +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Armor Cracker [P]",
          description: `Decreases the values of all enemy [Shield] buffs by 50% at the start of every turn, then increases this Champion’s MAX HP by the same amount (up to 25% of their MAX HP).`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 975",
        "ATQ": "793",
        "DEF": "1 046",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
