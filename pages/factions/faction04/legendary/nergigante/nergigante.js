const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tir chargé",
          description: `Attaque un ennemi. Place un buff ${BUFFS.PRE} de 50% sur cette Championne pendant 2 tours.`,
          damage: "3*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tir tournoyant",
          description: `Attaque tous les ennemis. Possède 75% de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour.${RETURN}${RETURN}

Si la cible est un Boss, possède au lieu de ça 75% de chances de placer un débuff ${DEBUFFS.SPD} de 30% pendant 2 tours.${RETURN}${RETURN}

Réduit également de 20% le Compteur de Tour des ennemis affligés d'un débuff ${DEBUFFS.STUN} placé par cette compétence.${RETURN}${RETURN}

Remplit le Compteur de Tour de tous les alliés de 10% si un débuff ${DEBUFFS.SPD} de 30% est placé au lieu de ça par cette compétence.`,
          damage: "3.1*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Tir rapide",
          description: `Attaque tous les ennemis. Place un débuff ${DEBUFFS.HEX} pendant 2 tours et un débuff ${DEBUFFS.PROVOKE} pendant 1 tour.${RETURN}${RETURN}

Si la cible est un Boss, place au lieu de ça un débuff ${DEBUFFS.HEX} pendant 3 tours et un débuff ${DEBUFFS.PROVOKE} pendant 2 tours.`,
          damage: "3*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Nergigante Ambition [P]",
          description: `Heals all allies by 10% of their MAX HP when attacking enemies under a ${DEBUFFS.HEX} debuff. If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead. <br><br>Increases this Champion’s DEF by 5% each time this Champion receives a hit from an enemy under a ${DEBUFFS.HEX} debuff (stacks up to 30%).<br><br>Heal Multiplier: 0.1*Target Max HP`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 990",
        "ATQ": "848",
        "DEF": "1 465",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des Donjons de 30%`,
};
