const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Dénigrement",
          description: `Attaque 2 fois un ennemi. Réduit de 10% le Compteur de Tours lors de chaque frappe si la cible possède des buffs.`,
          damage: "1.7*ATQ+0.6*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tiens bon",
          description: `Attaque tous les ennemis. Place 3 tours de buff de ${BUFFS.SHIELD} et 2 tours de buff de ${BUFFS.COUNTER} sur tous les alliés. La valeur du ${BUFFS.SHIELD} et les dégâts infligés sont proportionnels à la DÉF de ce Champion.`,
          damage: "3*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Bouclier +10%", "Dégâts +5%", "Bouclier +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Jalousie [P]",
          description: `Le Compteur de Tours de ce Champion sera augmenté de 10% à chaque fois qu'un Champion ennemi place un buff. Les Champions ennemis verront leurs Compteurs de Tours réduits de 10% pour chaque buff qu'ils reçoivent.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 835",
        "ATQ": "793",
        "DEF": "1 597",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des Cryptes de Faction de 33%`,
};
