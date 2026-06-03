const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Mord-serpent",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Place un débuff ${DEBUFFS.TRUE_FEAR} sur la cible pendant 1 tour. Il est impossible de résister à ce débuff et de le bloquer si ce Champion est mort.${RETURN}${RETURN}

Si ce Champion est mort, soigne également tous les alliés à hauteur de 20 % de leurs PV MAX.`,
          damage: "3.5*DEF",
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Résurrection au combat",
          description: `Attaque un ennemi. Ignorera 100 % de la DÉF de la cible.${RETURN}${RETURN}

Si la cible a été tuée, ranime un allié mort aléatoire avec 50 % de PV et 50 % de Compteur de Tour. Si la cible a été tuée et qu'il n'y a pas d'allié mort, réinitialise au lieu de ça le temps de recharge de la compétence.`,
          damage: "5*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Pour Valdemar !",
          description: `Attaque tous les ennemis. Détruit les PV MAX de tous les ennemis de 10 %.${RETURN}${RETURN}

Place un buff ${BUFFS.SHIELD} sur ce Champion pendant 2 tours. La valeur du ${BUFFS.SHIELD} est égale à la quantité totale de PV MAX détruits des ennemis.`,
          damage: "3.9*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Serment immortel [P]",
          description: `Dès que ce Champion est ranimé, augmente les dégâts infligés par ce Champion de 20 % (s'accumule jusqu'à 200 %).`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 660",
        "ATQ": "837",
        "DEF": "1 498",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/sup-defence.webp",
  description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 30%${RETURN}${RETURN}

(ne s'applique qu'à la Faction des Morts-vivants)${RETURN}${RETURN}

Augmente la statistique TAUX DE C. des Alliés lors de toutes les Batailles de 20%`,
};
