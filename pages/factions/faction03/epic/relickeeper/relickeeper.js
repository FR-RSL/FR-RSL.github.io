const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Croisade",
          description: `Attaque 1 ennemi. Octroie un Tour Supplémentaire si la cible est tuée.`,
          damage: "3.75*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Poussée de Force",
          description: `Place, pendant 4 tours, un buff d'${BUFFS.ATK} de 50% sur ce Champion. Accorde un Tour Supplémentaire.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Endurance Éternelle [P]",
          description: `Lorsque touché par un ennemi, place, pour 2 tours, un buff de ${BUFFS.HEALS} de 15% sur ce Champion.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 370",
        "ATQ": "1 365",
        "DEF": "980",
        "VIT": "90",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de la Campagne de 40%`,
};
