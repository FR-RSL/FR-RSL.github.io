const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Arme d'hast du Roi-sauvage",
          description: `Attaque un ennemi. Soigne tous les alliés ayant moins de 50% de PV jusqu'à 50% de leurs PV MAX.`,
          damage: "0.26*PV",
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Stratagème sacrificiel",
          description: `Attaque un allié. Les dégâts infligés sont égaux à 50% des PV actuels de la cible.${RETURN}${RETURN}

Place ensuite un buff ${BUFFS.SHIELD} sur cet allié pendant 2 tours. La valeur du ${BUFFS.SHIELD} est égale à la quantité de PV qui manque à cet allié.${RETURN}${RETURN}

Remplit également le Compteur de Tour de cet allié d'une quantité égale au pourcentage de PV qui lui manque. Enfin, remplit le Compteur de Tour de ce Champion de la même valeur.`,
          damage: "0.5*Target Current HP",
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Ricanement de lames",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Possède 100% de chances de placer un débuff ${DEBUFFS.PROVOKE} sur tous les ennemis pendant 1 tour. Place également un buff ${BUFFS.STRENGTHEN} de 25% sur tous les alliés pendant 2 tours.`,
          damage: "0.3*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Outsiders [P]",
          description: `Les alliés ayant 50% de PV ou moins infligent 30% de dégâts en plus.`,
          cooldown: 1,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 305",
        "ATQ": "881",
        "DEF": "1 211",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/sup-defence.webp",
  description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 33%${RETURN}${RETURN}

(ne s'applique qu'à la Faction des Orcs)${RETURN}${RETURN}

Augmente la statistique PV des Alliés lors de toutes les Batailles de 25%`,
};
