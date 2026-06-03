const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Porteur d'Espoir",
          description: `Attaque 1 ennemi. Place, pendant 1 tour, un buff de ${BUFFS.HEALS} de 7,5% sur l'allié ayant le moins de PV.`,
          damage: "3.7*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Secours",
          description: `Place un buff ${BUFFS.HEALS} de 15% sur tous les alliés pendant 2 tours. Vole 1 buff sur chaque ennemi.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Bienfait Divin",
          description: `Place, sur tous les alliés, un buff de ${BUFFS.SHIELD} équivalent à 25% de leurs PV MAX pendant 2 tours. Place, pendant 2 tours, un buff d'${BUFFS.DEF} de 60% sur ce Champion.`,
          cooldown: 5,
          levelInfo: ["Bouclier +25%", "Bouclier +25%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort4.webp",
          name: "Partenaire Fidèle",
          description: `Attaque 3 fois tous les ennemis.${RETURN}${RETURN}

[Uniquement disponible lorsque Juliana se trouve dans la même équipe.]`,
          damage: "1.4*DEF",
          cooldown: 3,
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 000",
        "ATQ": "804",
        "DEF": "1 299",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
