const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Défendez le mur !",
          description: `Attaque tous les ennemis. Place un buff ${BUFFS.SHIELD} sur tous les alliés sauf ce Champion pendant 1 tour. La valeur du ${BUFFS.SHIELD} est proportionnelle à la DÉF de ce Champion.`,
          damage: "3.1*DEF",
          levelInfo: ["Dégâts +10%", "Bouclier +10%", "Dégâts +10%", "Bouclier +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Bombardement curatif",
          description: `Attaque tous les ennemis. Soigne ce Champion à hauteur de 10 % des dégâts infligés. 

Augmente d'1 tour la durée de tous les buffs de tous les alliés.`,
          damage: "0.1*Target Max HP",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Personne ne passera !",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 1 tour. 

Place également un buff ${BUFFS.RES} de 50 % et un buff ${BUFFS.DEF} de 60 % sur tous les alliés pendant 2 tours.`,
          damage: "4*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Ce mur résistera [P]",
          description: `${PASSIVE}

Lorsque ce Champion se fait attaquer, soigne tous les alliés sauf ce Champion à hauteur de 70 % des dégâts reçus. Soigne uniquement à hauteur de 35 % des dégâts reçus lors des attaques de Boss. Cet effet n'a pas de temps de recharge. 

${ACTIVE}

Place instantanément un buff ${BUFFS.UNKILLABLE} pendant 1 tour sur ce Champion avant qu'il reçoive un coup fatal.`,
          cooldown: 4,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 660",
        "ATQ": "1 013",
        "DEF": "1 321",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 33%`,
};
