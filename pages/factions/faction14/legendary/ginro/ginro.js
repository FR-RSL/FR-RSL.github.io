const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Plunging Beak",
          description: `Attacks 1 enemy. Has a 50% chance of increasing the cooldown of one of the target’s Skills by 2 turns at random.`,
          damage: "3.3*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Befuddle",
          description: `Attacks 1 enemy. Places a [Stun] debuff for 2 Turns. Will ignore [Block Debuffs] and [Block Damage] buffs.`,
          damage: "4.9*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Gatewatch Stance",
          description: `Places a 60% [Increase DEF] buff on this Champion for 3 turns and a [Counterattack] buff for 2 turns.`,
          cooldown: 7,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Laughing Gull [P]",
          description: `[Passive Effect]<br><br>Increases this Champion’s DEF each time they counterattack. DEF resets every time this Champion gets a turn.<br><br>When attacking, converts this Champion’s RES into additional ACC.<br><br>[Active Effect]<br><br>At the end of this Champion’s turn, places a [Provoke] debuff for 1 turn on all enemies under [Increase ATK] buffs.`,
          cooldown: 4,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 825",
        "ATQ": "936",
        "DEF": "1 387",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Increases Ally RES in All Battles by 80`,
};
