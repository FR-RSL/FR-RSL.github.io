const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Fendeur de viande",
          description: `Attaque 1 ennemi. Attaque une fois tous les ennemis si la première attaque passe en critique.`,
          damage: "0.18*PV",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Marais grinçant",
          description: `Attaque tous les ennemis. Place sur ce Champion un buff ${BUFFS.SHIELD} de 2 tours, équivalent à 20% des dégâts infligés.${RETURN}${RETURN}

Soigne également ce Champion de 10% de ses PV MAX pour chaque coup critique.`,
          damage: "0.3*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Superprédateur",
          description: `Place un buff ${BUFFS.CRATE} de 30% et un buff ${BUFFS.CDAM} de 30% sur tous les alliés pendant 3 tours, puis accorde un Tour Supplémentaire.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Faim insatiable [P]",
          description: `Dès que ce Champion attaque, réduit l'ATQ ou la DÉF de la cible de 5%, et sa PRÉ ou sa RÉS de 5%, selon la statistique la plus élevée (s'accumule jusqu'à 30%).`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 140",
        "ATQ": "991",
        "DEF": "1 112",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
