const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Behead",
          description: `Attacks 1 enemy. Will ignore 30% of the target's DEF.<br><br>Grants an Extra Turn and resets the cooldown on this Champion's Holy Sword skill if the target is killed. The cooldown will be reset even if this attack is a counterattack.`,
          damage: "3.6*ATK",
          levelInfo: ["Level 2: +5% Damage", "Level 3: +5% Damage", "Level 4: +5% Damage", "Level 5: +10% Damage"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Holy Sword",
          description: `Attacks all enemies. Will ignore [Shield] and [Block Damage] buffs. Damage increases according to enemies' MAX HP.`,
          damage: "3.5*ATK+0.1*TRG_HP",
          cooldown: 3,
          levelInfo: ["Level 2: +5% Damage", "Level 3: +5% Damage", "Level 4: +5% Damage", "Level 5: +10% Damage"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Giant Killer [P]",
          description: `Has a 30% chance of increasing the duration of all debuffs on the target by 1 turn whenever this Champion attacks. This effect cannot be resisted.<br><br>The damage inflicted by this Champion's skills increases by 30% if the enemy's MAX HP is higher than this Champion's MAX HP.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "13 710",
        "ATQ": "1 674",
        "DEF": "991",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in all Battles by 30%`,
};
