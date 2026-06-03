const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Balafre Croisée",
          description: `Attaque 2 fois un ennemi.`,
          damage: "1.5*ATQ + 50",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fauteur de Troubles",
          description: `Attaque tous les ennemis. Possède 15% de chances de porter un coup critique. Place, pendant 2 tours, un buff d'${BUFFS.SPD} de 30% sur ce Champion.`,
          damage: "4.5*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Lame Maudite",
          description: `Attaque 4 fois au hasard. Possède 30% de chances de placer un débuff de ${DEBUFFS.DEF} de 30% pendant 2 tours. Possède 30% de chances de placer un débuff de ${DEBUFFS.DEF} de 60% pendant 2 tours si la cible est affligée de plus de 2 débuffs.`,
          damage: "1.6*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 710",
        "ATQ": "1 200",
        "DEF": "914",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 15%`,
};
