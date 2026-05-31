const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Breaking Story",
          description: `Attacks 1 enemy. <br><br>Has a 50% chance of placing a [Stun], [Freeze], [Sleep], [Provoke], [Fear], [True Fear], or [Petrification] on the target for 1 turn. <br><br>Then places a [Perfect Veil] buff on this Champion for 2 turns.`,
          damage: "4*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Explosive Scoop",
          description: `Attacks 1 enemy. <br><br>Has a 75% chance of stealing all buffs from the target. Also has a 75% chance of stealing 100% of the target's current Turn Meter. Then has a 75% chance of placing a [Nullify] debuff and a [Seal] debuff on the target for 2 turns.<br><br>[Passive Effect]<br><br>Has a 25% chance of activating the Explosive Scoop skill on an enemy when they gain an Extra Turn or Instant Turn effect. If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.`,
          damage: "5.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Live on the Scene!",
          description: `Places a 50% [Increase ACC] buff on all allies for 2 turns. <br><br>Also decreases the Turn Meters of all enemies by 20%. <br><br>Then grants an Extra Turn.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Ace Reporter [P]",
          description: `[Passive Effect]<br><br>Decreases all enemies' Turn Meters by 10% whenever an enemy has their skill activated, teams up with allies to attack, gains an Extra Turn or an Instant Turn, has their skills' cooldowns decreased, gets their Shield's value increased, gets their destroyed HP restored, has their HP swapped by allies or by themselves, Evades an enemy effect or skill, has their Turn Meter equalized, or has their HP balanced from a skill. Occurs once per skill. If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.<br><br>[Active Effect]<br><br>Whenever enemies remove, transfer, or decrease the duration of any debuff to 0, decreases the Turn Meters of all enemies by 25%. If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.`,
          cooldown: 3,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 320",
        "ATQ": "1 046",
        "DEF": "1 244",
        "VIT": "108",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in Arena by 28%`,
};
