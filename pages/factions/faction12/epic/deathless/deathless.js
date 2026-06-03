const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Murmures de Tombe",
          description: `Attaque un ennemi. Possède 70 % de chances de placer 2 tours de débuff de ${DEBUFFS.DEF} de 60 % si un ou plusieurs alliés sont morts, 2 tours de débuff de ${DEBUFFS.SPD} de 30 % si 2 alliés ou plus sont morts, et 2 tours de débuff de ${DEBUFFS.PRE} de 50 % si 3 alliés ou plus sont morts.${RETURN}${RETURN}

Les dégâts infligés sont proportionnels à la DÉF.`,
          damage: "4.5*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Insultes Abominables",
          description: `Place, pendant 2 tours, un buff de ${BUFFS.REFLECT_DAM} de 30 % sur ce Champion, puis attaque un ennemi. Possède 80 % de chances de placer un débuff de ${DEBUFFS.PROVOKE} d'1 tour.`,
          damage: "6.2*DEF",
          cooldown: 3,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Revanche Lugubre",
          description: `Attaque tous les ennemis. Cette attaque passera toujours en critique si 2 alliés ou plus sont morts. Les dégâts augmentent en fonction du nombre d'alliés morts.`,
          damage: "(4+Allies Dead)*DEF",
          cooldown: 7,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 990",
        "ATQ": "881",
        "DEF": "1 156",
        "VIT": "92",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors des batailles d'Arène de 70`,
};
