const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bec plongeant",
          description: `Attaque un ennemi. Possède 50 % de chances d'augmenter de 2 tours le temps de recharge d'une des Compétences prise au hasard de la cible.`,
          damage: "3.3*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Dérouter",
          description: `Attaque un ennemi. Place un débuff ${DEBUFFS.STUN} pendant 2 tours. Ignorera les buffs ${BUFFS.BLOCK_DEBUFFS} et ${BUFFS.BLOCK_DAMAGE}.`,
          damage: "4.9*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Posture de sentinelle",
          description: `Place sur ce Champion un buff ${BUFFS.DEF} de 60 % pendant 3 tours et un buff ${BUFFS.COUNTER} pendant 2 tours.`,
          cooldown: 7,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Mouette rieuse [P]",
          description: `${PASSIVE}

Augmente la DÉF de ce Champion de 10 % chaque fois qu'il contre-attaque. La DÉF se réinitialise chaque fois que ce Champion joue un tour.${RETURN}${RETURN}

Lorsqu'il attaque, convertit la RÉS de ce Champion en PRÉ supplémentaire.${RETURN}${RETURN}

${ACTIVE}

À la fin du tour de ce Champion, place un débuff ${DEBUFFS.PROVOKE} d'1 tour sur tous les ennemis sous buffs ${BUFFS.ATK}.`,
          cooldown: 4,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 825",
        "ATQ": "936",
        "DEF": "1 387",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors de toutes les Batailles de 80`,
};
