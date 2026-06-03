const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Goutte de ruine",
          description: `Attaque un ennemi. Possède 50% de chances de placer un débuff ${DEBUFFS.POISON} de 5% pendant 2 tours.`,
          damage: "3.5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Bouillon intérieur",
          description: `Attaque un ennemi. Possède 75% de chances de placer deux débuffs ${DEBUFFS.POISON} de 5% et un débuff ${DEBUFFS.POISON_S} de 25% pendant 2 tours.`,
          damage: "5.1*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Fleur vigoureuse",
          description: `Place un buff ${BUFFS.DEF} de 60% et un buff ${BUFFS.ATK} de 50% sur tous les alliés pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Irradier [P]",
          description: `Lorsqu'il est attaqué, possède 50% de chances d'augmenter d'1 tour la durée de tous les débuffs ${DEBUFFS.POISON} de l'assaillant.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 010",
        "ATQ": "1 123",
        "DEF": "1 046",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = null;
