const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Danse de bataille",
          description: `Attaque 2 fois un ennemi. Chaque coup critique remplit de 10 % le Compteur de Tour de ce Champion.`,
          damage: "2.4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Partenaire Mortelle",
          description: `Place un buff ${BUFFS.CRATE} de 30 % sur ce Champion pendant 2 tours, puis attaque deux fois un ennemi. Place un débuff ${DEBUFFS.POISON} de 5 % pendant 3 tours sur la cible si cette attaque passe en critique.

[Ignorera 50 % de la DÉF de la cible quand Roméro se trouve dans la même équipe.]`,
          damage: "3*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Feu de Purge",
          description: `Attaque un ennemi. Retire tous les buffs de la cible. Possède 75 % de chances de placer un débuff ${DEBUFFS.BURN} pendant 3 tours.`,
          damage: "6*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 360",
        "ATQ": "1 398",
        "DEF": "881",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Augmente la statistique TAUX DE C. des Alliés lors des batailles d'Arène de 20%`,
};
