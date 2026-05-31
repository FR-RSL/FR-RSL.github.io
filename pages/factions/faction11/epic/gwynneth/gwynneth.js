const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Infiltrée",
          description: `Attaque tous les ennemis. Cette attaque ne déclenchera pas de contre-attaques.`,
          damage: "2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Apathie",
          description: `Attaque un ennemi. Avant d'attaquer, possède 80 % de chances de placer sur la cible un débuff ${DEBUFFS.WEAKEN} de 25 % pendant 2 tours. Soigne ce Champion de 30 % des dégâts infligés, puis soigne tous les alliés avec les soins en surplus.`,
          damage: "6*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort3.webp",
          name: "Flot de Malaise",
          description: `Transfère tous les débuffs de ce Champion sur une cible ennemie, puis attaque cet ennemi. Ignorera 10 % de la DÉF de la cible pour chaque débuff dont elle est affligée.`,
          damage: "4.8*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "14 370",
        "ATQ": "1 421",
        "DEF": "925",
        "VIT": "99",
        "TAUX C.": "15%",
        "DEG C.": "60%",
        "RES": "30",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Allies dans la Tour de Malheur de 25%.`
};
