const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Corruption Scepter",
          description: `Attacks 1 enemy. <br><br>Has a 30% chance of randomly increasing the cooldown of one of the target’s skills by 2 turns. <br><br>This effect cannot be resisted if Wight Queen Ankora is on the same team.`,
          damage: "0.24*HP",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Desecration Blast",
          description: `Attacks all enemies. Will ignore 25% of the target’s DEF. Places an extra hit on targets under [Shield] or [Strengthen] buffs. <br><br>Damage inflicted by this skill cannot be decreased by enemy Passive skills or Masteries, except by the Passive skills of Bosses. Damage inflicted by this skill cannot be increased by either this Champion's Masteries or ally Passive skills, except when attacking Bosses.`,
          damage: "0.28*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Spirits, Claim You",
          description: `Attacks 1 enemy 2 times. Increases the damage inflicted with this skill by 10% for each buff on the target (stacks up to 50%) and by an additional 10% for each buff on this Champion (stacks up to 50%). <br><br>If this attack kills a target under 3 or more buffs, places a [Block Revive] debuff. <br><br>Also grants an Extra Turn if this attack kills an enemy when Wight Queen Ankora is on the same team.`,
          damage: "0.2*HP+(0.2*HP*0.1*Active Target Buffs)+(0.2*HP*0.1*Active Buff Count)",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Mantle of Undeath [P]",
          description: `This Champion will receive 50% less damage when attacked by enemies, including Bosses and their minions, out of their active turn. <br><br>If Wight Queen Ankora is on the same team, this Champion will receive no damage when attacked by enemies out of their active turn <br><br>[This effect does not apply against Bosses and their minions].<br><br>This Champion’s skills will also ignore [Shield] and [Strengthen] buffs.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "23 955",
        "ATQ": "705",
        "DEF": "1 277",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 33%`,
};
