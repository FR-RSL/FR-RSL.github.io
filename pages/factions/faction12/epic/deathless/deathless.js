const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Grave Whispers",
          description: `Attacks 1 enemy. Has a 70% chance of placing a 60% [Decrease DEF] debuff for 2 turns if 1 or more allies are dead, a 30% [Decrease SPD] debuff for 2 turns if 2 or more allies are dead, and a 50% [Decrease ACC] debuff for 2 turns if 3 or more allies are dead.<br><br>Damage inflicted is proportional to DEF.`,
          damage: "4.5*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Vile Insults",
          description: `Places a 30% [Reflect Damage] buff on this Champion for 2 turns, then attacks 1 enemy. Has an 80% chance of placing a [Provoke] debuff for 1 turn.`,
          damage: "6.2*DEF",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Grim Revenge",
          description: `Attacks all enemies. This attack will always be critical if there are 2 or more dead allies. Damage increases according to the number of dead allies.`,
          damage: "(4+Allies Dead)*DEF",
          cooldown: 7,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Cooldown -1", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 990",
        "ATQ": "881",
        "DEF": "1 156",
        "VIT": "92",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Increases Ally RES in Arena by 70`,
};
