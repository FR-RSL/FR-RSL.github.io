const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Fente protectrice",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Place sur ce Champion un buff ${BUFFS.SHIELD} équivalent à 10 % des dégâts infligés pendant 2 tours. Soigne également ce Champion à hauteur de 10 % des dégâts infligés si ses PV sont inférieurs à 50 %.`,
          damage: "3.4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Pals paralysants",
          description: `Attaque 2 fois tous les ennemis.${RETURN}${RETURN}

La première frappe possède 75 % de chances de placer un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 2 tours. La seconde frappe possède 75 % de chances de placer un débuff ${DEBUFFS.TRUE_FEAR} pendant 1 tour si les ennemis ne se trouvent pas sous débuff ${DEBUFFS.LOCK_ACTIVE}.`,
          damage: "2.1*ATQ",
          cooldown: 6,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Or scintillant",
          description: `Place sur ce Champion un buff ${BUFFS.CDAM} de 30 % pendant 3 tours et un buff ${BUFFS.PRE} de 50 % pendant 2 tours.${RETURN}${RETURN}

Accorde ensuite un Tour supplémentaire.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Frapper au Coeur [P]",
          description: `Ignore 10 % de la DÉF lors d'une attaque sur les Champions de Soutien, DÉF et PV.${RETURN}${RETURN}

[Ne fonctionne pas contre les Boss]`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "13 215",
        "ATQ": "1 432",
        "DEF": "991",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 40`,
};
