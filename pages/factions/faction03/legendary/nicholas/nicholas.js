const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lame Boréale",
          description: `Attaque un ennemi. Possède 50 % de chances de placer un débuff de ${DEBUFFS.GEL} d'1 tour.`,
          damage: "0.28*PV",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Protection Polaire",
          description: `Attaque tous les ennemis. Ignorera 30 % de la DÉF de chaque cible si Dame Noëlle se trouve dans la même équipe.${RETURN}${RETURN}

Place un buff ${BUFFS.STRENGTHEN} de 25 % et un buff ${BUFFS.SHIELD} sur tous les alliés pendant 2 tours. La valeur du ${BUFFS.SHIELD} est égale à 30 % des dégâts infligés.`,
          damage: "0.3*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Bienveillance",
          description: `Place un buff ${BUFFS.UNKILLABLE} et un buff ${BUFFS.HEALS} de 15 % sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

Place également un buff ${BUFFS.COUNTER} sur ce Champion pendant 2 tours.${RETURN}${RETURN}

Si Dame Noëlle se trouve dans la même équipe, place également un buff ${BUFFS.TAUNT} sur ce Champion pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Gardien de l'hiver [P]",
          description: `Les effets Ignorer la DÉF ennemis utilisés contre les alliés sous buffs ${BUFFS.SHIELD} sont réduits de 30 %. Les effets Ignorer la DÉF ennemis utilisés contre Dame Noëlle lorsqu'elle se trouve sous buff ${BUFFS.SHIELD} sont réduits de 60 %.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 800",
        "ATQ": "936",
        "DEF": "1 123",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 33%`,
};
