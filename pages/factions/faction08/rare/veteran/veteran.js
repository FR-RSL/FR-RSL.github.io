const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Désarmer",
          description: `Attaque 2 fois un ennemi. Offre 35% de chances de placer un débuff de ${DEBUFFS.ATK} de 50% pendant 2 tours. Les dégâts infligés sont proportionnels à la DÉF.`,
          damage: "1.6*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +15%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Chasseur de Têtes",
          description: `Attaque un ennemi. Place, pendant 3 tours, un buff d'${BUFFS.CRATE} de 30% sur tous les alliés si la cible est tuée. Les dégâts infligés sont proportionnels à la DÉF.`,
          damage: "3.7*DEF+ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +15%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Massacre",
          description: `Attaque tous les ennemis. Possède 50% de chances de placer un débuff de ${DEBUFFS.BLOCK_BUFFS} d'1 tour. Les dégâts augmentent en fonction des PV MAX de ce Champion.`,
          damage: "DEF+0.23*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 360",
        "ATQ": "683",
        "DEF": "1 321",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors des Donjons de 15%`,
};
