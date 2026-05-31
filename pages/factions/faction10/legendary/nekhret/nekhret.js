const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tomb Glaive",
          description: `Attacks 1 enemy 3 times. Each hit has a 20% chance of placing a 50% [Decrease ATK] debuff for 1 turn. This effect cannot be resisted.`,
          damage: "1.3*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Legion of the Damned",
          description: `Teams up with allies to attack 1 enemy. All allies under [Ally Protection] buffs placed by this Champion will join the attack. Allies joining the attack will use their default skills.<br><br>Grants an Extra Turn if no enemies are killed during this attack.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Disturbing Infusion",
          description: `Places a [Block Debuffs] buff, a 50% [Ally Protection] buff, and a 25% [Strengthen] buff on an ally for 3 turns.<br><br>The [Ally Protection] buff cannot be removed.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Unsleeping Aegis [P]",
          description: `Whenever an ally is attacked while under an [Ally Protection] buff placed by this Champion, places a [Shield] buff on the ally equal to 30% of this Champion's MAX HP for 2 turns. Occurs only if the ally does not already have a [Shield] buff placed by this Champion.<br><br>Also decreases the cooldown of this Champion's Legion of the Damned skill by 2 turns if the [Shield] buff is placed.<br><br>Shield Multiplier: 0.3*HP`,
          isPassive: true
        },
        {
          img: "assets/passif1.webp",
          name: "Arise My Minions [P]",
          description: `Places a [Block Debuffs] buff and a 25% [Strengthen] buff for 3 turns on the ally with the lowest MAX HP at the start of each Round. Also places a 50% [Ally Protection] buff on them for 6 turns. <br><br>The [Ally Protection] buff cannot be removed.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 480",
        "ATQ": "793",
        "DEF": "1 354",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Increases Ally RES in All Battles by 60`,
};
