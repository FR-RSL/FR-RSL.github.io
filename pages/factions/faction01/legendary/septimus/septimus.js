const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Décapiter",
          description: `Attaque 1 ennemi. Accorde un Tour Supplémentaire et réinitialise le temps de recharge de la Compétence Épée Sacrée de ce Champion si la cible est tuée.`,
          damage: "3.6*ATQ",
          levelInfo: ["+5% Damage", "+5% Damage", "+5% Damage", "+10% Damage"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Épée Sacrée",
          description: `Attaque 1 ennemi. Ignorera les buffs ${BUFFS.SHIELD} et ${BUFFS.BLOCK_DAMAGE}. Les dégâts augmentent en fonction des PV MAX de l'ennemi.`,
          damage: "3.5*ATQ+0.1*TRG_HP",
          cooldown: 3,
          levelInfo: ["+5% Damage", "+5% Damage", "+5% Damage", "+10% Damage"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Tueur Géant [P]",
          description: `Chaque attaque offre 30 % de chances d'augmenter d'1 tour la durée de tous les débuffs de la cible. Les dégâts infligés par chaque attaque augmentent de 30 % si les PV actuels de l'ennemi sont supérieurs à 50 %.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "13 710",
        "ATQ": "1 674",
        "DEF": "991",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 30%`,
};
