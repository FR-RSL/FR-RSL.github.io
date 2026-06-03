const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Appliquer",
          description: `Attaque 1 ennemi. Possède 30% de chances de placer un débuff d'${DEBUFFS.WEAKEN} de 15% pendant 2 tours.`,
          damage: "3.6*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Symphonie de Lame",
          description: `Attaque 2 fois un ennemi. Réduit de 10% le Compteur de Tours de la cible si cette attaque passe en critique. Remplit de 10% le Compteur de Tours de ce Champion si l'attaque passe en critique.`,
          damage: "3*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Forer",
          description: `Attaque 1 ennemi. Ignorera 25% de la DÉF de la cible.`,
          damage: "4*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "13 050",
        "ATQ": "1 443",
        "DEF": "716",
        "VIT": "96",
        "TAUX C.": "15%",
        "DEG C.": "57%",
        "RES": "30",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés dans les Donjons de 21%.`
};
