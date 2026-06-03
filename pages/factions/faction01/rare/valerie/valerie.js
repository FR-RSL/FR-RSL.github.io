const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Crochet",
          description: `Attaque 1 ennemi.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Présence Énergisante",
          description: `Augmente d'1 tour la durée de tous les buffs de tous les alliés. Réduit également d'1 tour la durée de tous les débuffs de tous les alliés. Place, pendant 2 tours, un buff d'${BUFFS.ATK} de 25% sur tous les alliés.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Protection",
          description: `Place un buff de ${BUFFS.SHIELD} sur tous les alliés pendant 2 tours. La valeur de ce ${BUFFS.SHIELD} dépend du Niveau de ce Champion. Soigne chaque allié en fonction du nombre de buffs dont il bénéficie.`,
          cooldown: 5,
          levelInfo: ["Bouclier +5%", "Bouclier +5%", "Bouclier +5%", "Bouclier +5%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 855",
        "ATQ": "969",
        "DEF": "1 002",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors des Cryptes de Faction de 22%`,
};
