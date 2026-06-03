const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Balafre vivifiante",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Place une frappe supplémentaire si la cible se trouve sous débuff ${DEBUFFS.DEF}.`,
          damage: "2.6*ATQ+2*DEF",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Épées englouties",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

A 50% de chances de placer un débuff ${DEBUFFS.DEF} de 60% pendant 2 tours. Les chances augmentent de 5% pour chaque ennemi vivant.`,
          damage: "4.4*ATQ",
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Défenseur d'Agaris",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Soigne ce Champion à hauteur de 20% des dégâts infligés. Soigne au lieu de cela ce Champion de 30% si la cible se trouve sous débuff ${DEBUFFS.DEF}.${RETURN}${RETURN}

Détruit les PV MAX de la cible de 20% des dégâts infligés. Détruit au lieu de cela les PV MAX de la cible de 30% si la cible se trouve sous débuff ${DEBUFFS.DEF}.`,
          cooldown: 2,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 825",
        "ATQ": "914",
        "DEF": "859",
        "VIT": "86",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors des Cryptes de Faction de 30`,
};
