const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sceptre d'Autorité",
          description: `Attaque un ennemi. Possède 35% de chances de placer un débuff ${DEBUFFS.ATK} de 50% pendant 2 tours.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Nécro Mutation",
          description: `Soigne tous tes alliés à hauteur de 20% des PV MAX de ce Champion. Après le soin, place un buff ${BUFFS.PERFECT_VEIL} pendant 2 tours sur tous les alliés ayant tous leurs PV. Sinon, place pendant 1 tour un buff ${BUFFS.HEALS} de 15% sur les alliés ayant moins de 100% de PV.`,
          cooldown: 5,
          levelInfo: ["Soins +5%", "Soins +5%", "Soins +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Forme Spirituelle",
          description: `Ranime un seul allié avec 60% de PV et remplit son Compteur de Tour de 60%. Place un buff ${BUFFS.PERFECT_VEIL} de 3 tours sur cet allié.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Master of Ghosts [P]",
          description: `Whenever an ally under a ${BUFFS.VEIL} or ${BUFFS.PERFECT_VEIL} buff gets a turn, heals them by 10% of their MAX HP. Also increases the RES of allies under ${BUFFS.VEIL} or ${BUFFS.PERFECT_VEIL} buffs by 50.<br><br>[Will only increase RES once per ally if there are multiple Rectors on the team.]<br><br>Heal Multiplier: 0.1*Target Max HP`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 010",
        "ATQ": "1 035",
        "DEF": "1 134",
        "VIT": "109",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors de la Tour du Malheur de 55`,
};
