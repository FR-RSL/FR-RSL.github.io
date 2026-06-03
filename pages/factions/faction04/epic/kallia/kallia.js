const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Marteau Surchauffé",
          description: `Attaque un ennemi. Possède 30 % de chances de placer un débuff de ${DEBUFFS.BURN} de 2 tours.${RETURN}${RETURN}

[Soigne ce Champion de 20 % des dégâts infligés lorsque Atur se trouve dans la même équipe.]`,
          damage: "3.2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Malédiction de Nullité",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff de ${DEBUFFS.HEALS} de 100 % pendant 2 tours.${RETURN}${RETURN}

[Soigne ce Champion de 10 % des dégâts infligés lorsque Atur se trouve dans la même équipe.]`,
          damage: "4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Tempête de Flammes",
          description: `Attaque 3 fois au hasard. Chaque frappe place un débuff ${DEBUFFS.BURN} pendant 2 tours.${RETURN}${RETURN}
 
[Soigne ce Champion de 15 % des dégâts infligés lorsque Atur se trouve dans la même équipe.]`,
          damage: "2*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 885",
        "ATQ": "1 597",
        "DEF": "848",
        "VIT": "106",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 25%`,
};
