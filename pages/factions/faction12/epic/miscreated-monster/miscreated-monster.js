const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Poings Massifs",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 15 % de chances de placer un débuff d'${DEBUFFS.STUN} d'1 tour.${RETURN}${RETURN}

Possède 50 % de chances de placer un débuff de ${DEBUFFS.DEF} de 60 % pendant 1 tour si le débuff d'${DEBUFFS.STUN} est placé.`,
          damage: "0.1*HP",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Orage Électrique",
          description: `Attaque tous les ennemis. Possède 50 % de chances de placer un débuff d'${DEBUFFS.STUN} d'1 tour.${RETURN}${RETURN}

Place, sur tous les alliés, 3 tours de buff de ${BUFFS.SHIELD} égal à 25 % des dégâts infligés.`,
          damage: "0.21*HP",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "C'est vivant",
          description: `Place, pendant 3 tours, un buff de ${BUFFS.ALLY_PROTECT} de 50 % sur tous les alliés, sauf sur ce Champion.${RETURN}${RETURN}

Soigne ce Champion à hauteur de 50 % de ses PV MAX.${RETURN}
Place, pendant 3 tours, un buff de ${BUFFS.HEALS} de 15 % sur ce Champion.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Plainte Effrayante [P]",
          description: `Place un débuff ${DEBUFFS.FEAR} d'1 tour sur l'assaillant lorsqu'un allié se fait attaquer alors qu'il bénéficie d'un buff de ${BUFFS.ALLY_PROTECT}.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 965",
        "ATQ": "958",
        "DEF": "815",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors des batailles d'Arène de 33%`,
};
