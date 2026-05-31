const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bombarder",
          description: `Attaque un ennemi. Chaque frappe offre 5 % de chances d'augmenter d'1 tour la durée de tous les débuffs.`,
          damage: "3.8*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Escarmouche",
          description: `Attaque un ennemi. Place, pendant 2 tours, un buff d'${BUFFS.SPD} de 30 % sur ce Champion si cette attaque passe en critique.`,
          damage: "5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Tir Septique",
          description: `Attaque 3 fois un ennemi. Chaque frappe possède 50 % de chances de placer un débuff de ${DEBUFFS.POISON} de 2,5 % pendant 2 tours.`,
          damage: "1.6*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 555",
        "ATQ": "1 310",
        "DEF": "881",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Augmente la statistique TAUX DE C. des Alliés lors de toutes les Batailles de 12%`,
};
