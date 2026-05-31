const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "United We Triumph",
          description: `Attacks 1 enemy. One random ally will team up and join the attack. The ally joining the attack will always use their default skill. <br><br>If Taras the Fierce is on the same team, they will always be the one to join this Champion’s attack.`,
          damage: "3.5*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Font of Tenacity",
          description: `Fully restores any allies’ decreased MAX HP, then heals all allies by 40% of this Champion’s MAX HP. <br><br>Places a [Shield] buff and a protected [Strengthen] buff on all allies for 2 turns. The value of the [Shield] buff is equal to 20% of this Champion’s MAX HP.<br><br><br>Heal Multiplier: 0.4*HP<br>Shield Multiplier: 0.2*HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Heal +10%", "Level 3: Shield +10%", "Level 4: Heal +10%", "Level 5: Shield +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Nurtured Friendship",
          description: `Removes all debuffs from all allies, then fills the Turn Meters of all allies by 15%. Fills the Turn Meters of each ally by an extra 5% for each debuff removed from them. <br><br>Increases the RES of all allies by 5 for each debuff removed. Grants an Extra Turn if 5 or more debuffs were removed.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Giving All [P]",
          description: `Revives all dead allies with 50% HP and 75% Turn Meter whenever this Champion is killed. <br><br>[Active Effect]<br><br>Places a [Block Damage] buff on all allies for 1 turn whenever an ally receives a [Bomb], [Poison] or [HP Burn] debuff.<br><br>If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.`,
          cooldown: 3,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 810",
        "ATQ": "892",
        "DEF": "1 233",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in all Battles by 24%`,
};
