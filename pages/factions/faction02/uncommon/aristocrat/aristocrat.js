const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Astuces d'Infection",
          description: `Attaque un ennemi. Possède 25% de chances de placer un débuff de ${DEBUFFS.HEALS} de 50% pendant 2 tours.`,
          damage: "3.9*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Réprimande Piquante",
          description: `Attaque 2 fois un ennemi. Possède 50% de chances de placer un débuff d'${DEBUFFS.WEAKEN} de 15% pendant 1 tour.`,
          damage: "3*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "11 070",
        "ATQ": "1 211",
        "DEF": "804",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
