const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Blind Hunger",
          description: `Attacks 1 enemy 2 times. <br><br>Each hit will ignore 10% of the target’s DEF. Will ignore an additional 5% DEF for each debuff on the target. Also steals 10% of the target’s Turn Meter. <br><br>Has a 50% chance of repeating the attack against another target, except the initial target, who is under 2 or more debuffs. Occurs once per attack.`,
          damage: "1.8*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Inducer of Panic",
          description: `Attacks 1 enemy 2 times. <br><br>The first hit places a [Block Passive Skills] debuff and a 60% [Decrease DEF] debuff for 2 turns. <br><br>The second hit applies a [Debuff Spread] effect, taking all debuffs from the target and placing them on all enemies. The [Debuff Spread] effect will work even if the initial target is killed. <br><br>Grants an Extra Turn if this attack kills an enemy.`,
          damage: "3*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Unrelenting Violence",
          description: `Attacks all enemies. Before attacking, places a 50% [Increase ACC] buff on this Champion for 2 turns. <br><br>Decreases the duration of all enemy buffs by 2 turns, and places a 30% [Decrease SPD] debuff on all enemies for 2 turns.`,
          damage: "4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Bottomless Maw [P]",
          description: `This Champion is immune to [Stun], [Freeze], [Sleep], [Provoke], [Fear], [True Fear], and [Petrification] debuffs.<br><br>Whenever an enemy attempts to place one of these debuffs on this Champion, instantly activates Inducer of Panic skill against that enemy. Doesn't set Inducer of Panic skill on cooldown. <br><br>Increases damage dealt by 5% for each debuff placed by this Champion or an ally. The damage increase resets each time a skill is used on this Champion's turn (stacks up to 50%).`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 525",
        "ATQ": "1 542",
        "DEF": "1 002",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in All Battles by 70`,
};
