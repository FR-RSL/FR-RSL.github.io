const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Batteur de crâne",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

Possède 50 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours.`,
          damage: "1.8*ATQ",
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Bruit assourdissant",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Possède 75 % de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour.${RETURN}${RETURN}

Place une frappe supplémentaire sur les ennemis sous débuffs ${DEBUFFS.STUN}. Si Esmé la Danseuse se trouve dans la même équipe, placera toujours une frappe supplémentaire et ignorera 20 % de la DÉF de chaque ennemi.`,
          damage: "3.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Carillon de fracture",
          description: `Attaque tous les ennemis. Ignorera les buffs ${BUFFS.SHIELD}.${RETURN}${RETURN}

Les dégâts augmentent de 75 % lors d'une attaque sur des ennemis sous buffs ${BUFFS.STONE_SKIN}.${RETURN}${RETURN}

Si cette attaque retire un ou plusieurs buffs ${BUFFS.STONE_SKIN}, accorde un Tour supplémentaire à ce Champion.`,
          damage: "4*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Compagnon adoré [P]",
          description: `Dès que ce Champion tue un ennemi, place un débuff ${DEBUFFS.STUN} pendant 2 tours sur l'ennemi qui a le Compteur de Tour le plus élevé. Se produit une fois par compétence.${RETURN}${RETURN}

Si Esmé la Danseuse se trouve dans la même équipe, les compétences de ce Champion ignoreront 50 % de la RÉS de chaque ennemi. De plus, si Esmé la Danseuse se trouve dans la même équipe, place une pile d'${BUFFS.INTERCEPT} sur ce Champion au début de son tour.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 360",
        "ATQ": "1 498",
        "DEF": "1 057",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 30%`,
};
