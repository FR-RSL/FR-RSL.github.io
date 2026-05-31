const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Double Coupe",
          description: `Attaque 2 fois un ennemi.`,
          damage: "0.1*HP",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Acier Supérieur",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 30 % de chances de placer un débuff de ${DEBUFFS.ATK} de 50 % pendant 2 tours.`,
          damage: "0.15*HP",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rune de Survie",
          description: `Place un buff de ${BUFFS.REFLECT_DAM} de 15 % et un buff de ${BUFFS.HEALS} de 7,5 % sur tous les alliés pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 155",
        "ATQ": "848",
        "DEF": "903",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "55",
        "PRÉ": "0"
      },
};

const aura = null;
