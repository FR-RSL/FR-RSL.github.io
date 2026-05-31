const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Poigne Tombale",
          description: `Attaque 1 ennemi. Place une frappe supplémentaire si la cible a plus de PV que ce Champion.`,
          damage: "3*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Vigueur Artificielle",
          description: `Place, pendant 2 tours, un buff de ${BUFFS.ALLY_PROTECT} de 25 % sur tous les alliés. Place, pendant 2 tours, un buff de ${BUFFS.BLOCK_DEBUFFS} sur ce Champion. Retire tous les débuffs dont ce Champion est affligé.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Mort Refusée",
          description: `Ranime ce Champion avec 30 % de PV et attaque tous les ennemis après avoir été tué. La frappe ne peut pas passer en critique.`,
          damage: "6.2*ATQ",
          cooldown: 5,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 515",
        "ATQ": "925",
        "DEF": "1 002",
        "VIT": "91",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Augmente la statistique TAUX DE C. des Alliés lors des batailles d'Arène de 21%`,
};
