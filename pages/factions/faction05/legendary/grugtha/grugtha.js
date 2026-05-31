const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "If Looks Could Kill",
          description: `Attacks all enemies. Places an extra hit on targets whose ATQ is less than or equal to this Champion’s.`,
          damage: "3.2*ATQ",
          levelInfo: ["+10% Damage", "+10% Damage"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Siroth's Favoured",
          description: `Attacks all enemies. Before attacking, equalizes the HP of all enemies. The HP levels of all enemies will be set to the average of the enemy team.<br><br>Will ignore 30% of each target's DEF if the average HP of the enemy team is above 50%. Places an extra hit if the average HP of the enemy team is equal to or below 50%.<br><br>Increases this Champion’s ATQ by 10% per each enemy killed by this skill.`,
          damage: "4.5*ATQ ×2",
          cooldown: 4,
          levelInfo: ["+10% Damage", "+10% Damage", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Bloody Poleax",
          description: `Attacks all enemies 2 times. Before attacking, places a 30% ${BUFFS.CDAM} buff and a 15% ${BUFFS.SHATTER} buff on this Champion for 2 turns.<br><br>The first hit decreases each target’s DEF by 10% (stacks up to 30%). The second hit destroys each target's MAX HP by 10% (stacks up to 60%).<br><br>Grants an Extra Turn if this attack kills an enemy.`,
          damage: "2.4*ATQ",
          cooldown: 4,
          levelInfo: ["+10% Damage", "+10% Damage", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Lover Of Slaughter [P]",
          description: `Whenever this Champion lands a critical hit, heals them by 5% of their MAX HP. If this Champion’s HP is full, critical hits fill their Turn Meter by 5% instead.<br><br>Whenever this Champion receives any surplus healing from this skill, places a ${BUFFS.SHIELD} buff on this Champion for 2 turns, equal to the value of the surplus heal. The value of the ${BUFFS.SHIELD} cannot exceed 30% of this Champion’s MAX HP. If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 340",
        "ATQ": "1 398",
        "DEF": "1 024",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 30%`,
};
