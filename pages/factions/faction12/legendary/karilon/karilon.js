const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Glas",
          description: `Attaque tous les ennemis. Possède 35% de chances de réduire d'1 tour la durée de tous les buffs ennemis.`,
          damage: "2.6*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Cantique du froid",
          description: `Attaque tous les ennemis. Possède 75% de chances de placer un débuff ${DEBUFFS.HEX} et un débuff ${DEBUFFS.WEAKEN} de 25% pendant 2 tours.${RETURN}${RETURN}

Si la cible se trouve sous débuff ${DEBUFFS.GEL}, possède alors 75% de chances de placer un débuff ${DEBUFFS.HEX} et un débuff ${DEBUFFS.WEAKEN} de 25% pendant 3 tours.`,
          damage: "3.2*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Vortex polaire",
          description: `Place un débuff ${DEBUFFS.GEL} sur tous les ennemis pendant 1 tour.${RETURN}${RETURN}

Vide totalement le Compteur de Tour de tous les ennemis qui reçoivent des débuffs ${DEBUFFS.GEL} à cause de cette compétence.${RETURN}${RETURN}

Remplit le Compteur de Tour de tous les alliés de 10% pour chaque tentative de débuff ${DEBUFFS.GEL} que l'équipe ennemie a bloquée ou à laquelle elle a résisté.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Marteau de givre [P]",
          description: `Les alliés ignoreront 10% de la DÉF de la cible si la cible se trouve sous débuff ${DEBUFFS.GEL}.${RETURN}${RETURN}

Si le débuff ${DEBUFFS.GEL} a été placé par ce Champion, les alliés ignoreront alors 20% de la DÉF de la cible.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 155",
        "ATQ": "1 189",
        "DEF": "1 112",
        "VIT": "109",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors des batailles d'Arène de 30%`,
};
