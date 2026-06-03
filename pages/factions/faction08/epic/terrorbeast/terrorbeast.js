const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Morsure Douloureuse",
          description: `Attaque un ennemi. Possède 20% de chances d'augmenter d'1 tour le temps de recharge d'une des compétences de la cible prise au hasard.`,
          damage: "4.5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Cri Perçant",
          description: `Attaque 2 fois au hasard. Place, pendant 3 tours, un buff de ${BUFFS.REFLECT_DAM} de 30% sur tous les alliés.`,
          damage: "0.23*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Festin de Chair",
          description: `Attaque 2 fois un ennemi. Soigne totalement ce Champion si la cible est tuée par cette attaque. Place un débuff d'${DEBUFFS.STUN} de 2 tours si la cible survit.`,
          damage: "3.7*ATQ",
          cooldown: 6,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "20 970",
        "ATQ": "1 057",
        "DEF": "848",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 25%`,
};
