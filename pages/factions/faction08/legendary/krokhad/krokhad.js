const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tyran de meute",
          description: `Attaque tous les ennemis. Cette attaque inflige à chaque cible individuelle des dégâts sur cible unique plutôt que des dégâts de zone. Ignorera également tous les buffs et effets ${BUFFS.REFLECT_DAM}, les buffs et effets ${BUFFS.ALLY_PROTECT}, et les débuffs ${DEBUFFS.PAIN_LINK}. 

Cette attaque inflige également le double de dégâts lorsque ce Champion contre-attaque si Chef de meute Shy'ek se trouve dans l'équipe.`,
          damage: "2.2*ATQ",
          levelInfo: ["Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Mâchoire fétide",
          description: `Attaque tous les ennemis. Place une frappe supplémentaire sur les ennemis affligés de 2 débuffs ou plus. 

A 75 % de chances de placer un débuff ${DEBUFFS.LEECH} et un débuff ${DEBUFFS.WEAKEN} de 25 % pendant 2 tours. Il est impossible de résister à ces débuffs lorsque Chef de meute Shy'ek se trouve dans la même équipe.`,
          damage: "3.3*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Prédateur dominant",
          description: `Attaque un ennemi. 

Ignorera 50 % de la DÉF de la cible, ainsi que les buffs ${BUFFS.LIFE_BARRIER} et ${BUFFS.POISON_CLOUD}, et les effets qui redirigent les attaques, les dégâts ou les débuffs sur une autre cible. Répète cette attaque une fois si Chef de meute Shy'ek se trouve dans l'équipe.`,
          damage: "3.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Ambition primale [P]",
          description: `Augmente l'ATQ de ce Champion de 5 % lorsqu'il tue un ennemi ou décapite une Tête d'Hydre (s'accumule jusqu'à 25 %). Augmente au lieu de cela l'ATQ de Champion de 10 % lorsqu'il tue un ennemi ou décapite une Tête d'Hydre si Chef de meute Shy'ek se trouve dans l'équipe (s'accumule jusqu'à 50 %).

Active instantanément la compétence Prédateur dominant contre une Tête d'Hydre, lorsqu'un allié est dévoré par cette Tête, si Chef de meute Shy'ek se trouve dans l'équipe.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 700",
        "ATQ": "1 729",
        "DEF": "870",
        "VIT": "100",
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
