const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Thirsting Blade",
          description: `Attacks 1 enemy. Destroys the target’s MAX HP by 30% of the damage inflicted. Also heals this Champion by 30% of the damage inflicted.<br><br><br>Heal Multiplier: 0.3*Damage Dealt`,
          damage: "4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Exsanguinate",
          description: `Attacks all enemies. Has a 75% chance of placing a [Leech] debuff for 2 turns.<br><br>Also has a 75% chance of stealing 50% of the Turn Meter from Champions from the Banner Lord, Sacred Order, or High Elf Factions. Has a 75% chance of decreasing the Turn Meter by 50% instead against targets not from those Factions.`,
          damage: "4.7*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Mind Shroud",
          description: `Attacks all enemies. Has a 75% chance of placing a 60% [Decrease DEF] debuff and a [Block Active Skills] debuff for 2 turns.<br><br>Places a [Perfect Veil] buff on this Champion for 2 turns.`,
          damage: "4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Notorious [P]",
          description: `Places a [Revive On Death] buff on this Champion for 2 turns every time this Champion kills an enemy. <br><br>Also fully heals this Champion and fills their Turn Meter by 50% every time they kill an enemy. <br><br>[Will only heal and fill this Champion’s Turn Meter when Konstantin the Dayborn is on the same team.]<br><br>Heal Multiplier: 1*HP`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 030",
        "ATQ": "1 443",
        "DEF": "1 134",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Increases Ally C.RATE in All Battles by 24%`,
};
