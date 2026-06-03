const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lame Corrompue",
          description: `Attaque 1 ennemi. Possède 30% de chances de placer un débuff de ${DEBUFFS.BLOCK_BUFFS} de 2 tours.`,
          damage: "2.9*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Renverser la Vapeur",
          description: `Attaque 1 ennemi. Vole 2 buffs aléatoires sur la cible.`,
          damage: "3.9*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
        },
        {
          img: "assets/sort3.webp",
          name: "Lien d'Âme",
          description: `Soigne de 25% l'allié ayant les PV les plus bas, puis nivèle les niveaux de PV de tous les alliés.`,
          cooldown: 5,
          levelInfo: ["Soins +5%", "Soins +5%", "Soins +10%", "Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "16 515",
        "ATQ": "804",
        "DEF": "1 123",
        "VIT": "88",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "30",
        "PRE": "10"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés dans les Donjons de 25%.`
};
