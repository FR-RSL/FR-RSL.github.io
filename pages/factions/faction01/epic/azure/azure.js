const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Fente",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 30% de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour. Ces chances passent à 100% si la cible dispose d'un buff ${BUFFS.SPD}.`,
          damage: "ATQ*2.1",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Égide",
          description: `Place, pendant 2 tours, un buff de ${BUFFS.ALLY_PROTECT} de 50% sur tous les alliés, sauf sur ce Champion. Place, sur ce Champion, un buff de ${BUFFS.SHIELD} équivalent à 40% des PV MAX de ce Champion pendant 2 tours. Il est impossible de retirer ce buff.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Coup de Grâce",
          description: `Attaque un ennemi. Place une frappe supplémentaire si la cible est affligée d'un débuff ${DEBUFFS.STUN}. La frappe supplémentaire passe toujours en critique. Vole 50% du Compteur de Tour de la cible si elle ne se trouve pas sous débuff ${DEBUFFS.STUN}.`,
          damage: "2*ATQ+0.2*PV",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Temps de recharge -1", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 320",
        "ATQ": "958",
        "DEF": "1 057",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 25%`,
};
