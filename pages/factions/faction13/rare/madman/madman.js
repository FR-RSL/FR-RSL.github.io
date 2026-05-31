const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Wild Slashing",
          description: `Attacks 1 enemy. Has a 50% chance of attacking all other enemies with a second hit, dealing 30% of the damage inflicted from the first hit. The second hit is always a normal hit.`,
          damage: "3*ATKMultiplier: 0.3*Damage Ouput",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Insane Resilience",
          description: `Attacks all enemies. Heals this Champion by 10% of the damage inflicted if this Champion's current HP is below 50%.<br><br><br>Heal Multiplier: 0.1*Damage Dealt`,
          damage: "3.4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Crazed Lunge",
          description: `Attacks 1 enemy. Will ignore 30% of the target's DEF. Will ignore [Block Damage] and [Shield] buffs.`,
          damage: "4.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +15%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 040",
        "ATQ": "1 343",
        "DEF": "749",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
