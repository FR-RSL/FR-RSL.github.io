const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hache Tournoyante",
          description: `Attaque tous les ennemis. Place, pendant 2 tours, un buff d'${BUFFS.ATK} de 25% sur ce Champion si cette attaque passe en critique.`,
          damage: "ATQ*3",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Cogne-crâne",
          description: `Attaque un ennemi. Place un débuff d'${DEBUFFS.STUN} d'1 tour.`,
          damage: "ATQ*6.5",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Résister [P]",
          description: `Ranime ce Champion avec 30 % de PV lorsqu'il se fait tuer et place un buff de ${BUFFS.BLOCK_DAMAGE} d'1 tour.`,
          cooldown: 8,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 525",
        "ATQ": "1 365",
        "DEF": "903",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
