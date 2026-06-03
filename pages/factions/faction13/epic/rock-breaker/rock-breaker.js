const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Marteaux Tournoyants",
          description: `Attaque un ennemi.${RETURN}
Augmente de 4 % la DÉF de ce Champion à chaque fois que cette Compétence est utilisée. S'additionne jusqu'à 20 %.`,
          damage: "2.5*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Frappe-Poitrine",
          description: `Possède 75 % de chances de placer un débuff de ${DEBUFFS.PROVOKE} d'1 tour sur tous les ennemis.${RETURN}
Place un buff de ${BUFFS.COUNTER} sur ce Champion pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Peau de Fer [P]",
          description: `Possède 25 % de chances de réduire de 50 % les dégâts infligés à ce Champion à chaque fois que ce Champion se fait attaquer.`,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 495",
        "ATQ": "716",
        "DEF": "1 354",
        "VIT": "91",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "75",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des batailles d'Arène de 30%`,
};
