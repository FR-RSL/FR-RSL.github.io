const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Ring Of Dissonance",
          description: `Attacks all enemies.<br><br>Has a 50% chance of placing a 30% ${DEBUFFS.CRATE} debuff for 1 turn.`,
          damage: "0.15*HP",
          levelInfo: ["+10% Damage", "+10% Damage", "+10% Buff/Debuff Chance", "+15% Buff/Debuff Chance"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Redemptive Fervor",
          description: `Attacks 1 enemy. Before attacking, has a 75% chance of transferring all debuffs from all allies to the target.<br><br>Heals all allies by 25% of this Champion’s MAX HP and places a 25% ${BUFFS.STRENGTHEN} buff on all allies for 2 turns.`,
          damage: "0.35*HP",
          cooldown: 4,
          levelInfo: ["+10% Damage", "+10% Buff/Debuff Chance", "+15% Buff/Debuff Chance", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Humble Savior",
          description: `Attacks all enemies. Before attacking, revives all dead allies with 50% HP and 50% Turn Meter. This skill can be used even if there are no dead allies.<br><br>Has a 75% chance of placing a ${DEBUFFS.STUN} debuff for 1 turn and a ${DEBUFFS.BLOCK_BUFFS} debuff for 2 turns. Has a 75% chance of placing a 30% ${DEBUFFS.SPD} debuff and a ${DEBUFFS.BLOCK_BUFFS} debuff for 2 turns instead, if the target is a Boss.`,
          damage: "0.25*HP",
          cooldown: 5,
          levelInfo: ["+10% Damage", "+10% Buff/Debuff Chance", "+15% Buff/Debuff Chance", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "For My Sins [P]",
          description: `All allies receive 1% less damage for each turn taken by enemies and allies while they remain alive (stacks up to 15%). Each Champion’s damage reduction resets when they die, or between Rounds. If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.<br><br>Allies revived by this Champion are immune to ${DEBUFFS.STUN}, ${DEBUFFS.GEL}, ${DEBUFFS.SLEEP}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, and ${DEBUFFS.PETRIFICATION} debuffs until the start of their turn. Resets when the revived ally takes their turn, is killed, or between Rounds. If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "24 450",
        "ATQ": "782",
        "DEF": "1 167",
        "VIT": "109",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés Force lors de toutes les Batailles de 25%`,
};
