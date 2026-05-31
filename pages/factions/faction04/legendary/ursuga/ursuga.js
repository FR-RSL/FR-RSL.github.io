const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Gigantesque Gourdin",
          description: `Attaque un ennemi. Possède 45 % de chances de placer un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 1 tour.`,
          damage: "0.23*HP",
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Foncer dans le tas",
          description: `Attaque tous les ennemis. Place, pendant 2 tours, un débuff ${DEBUFFS.CDAM} de 25 % et un débuff ${DEBUFFS.ATK} de 50 % sur les cibles dont l'ATQ est plus élevée que la DÉF. Place, pendant 2 tours, un débuff ${DEBUFFS.SPD} de 30 % et un débuff ${DEBUFFS.DEF} de 60 % sur les cibles dont l'ATQ est inférieure ou égale à la DÉF.`,
          damage: "0.23*HP",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Cul Sec",
          description: `Place, pendant 3 tours, un buff ${BUFFS.ALLY_PROTECT} de 50 % sur tous les alliés sauf sur ce Champion. Place un buff ${BUFFS.STRENGTHEN} de 25 % sur ce Champion pendant 3 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Garde Dorée [P]",
          description: `Réduit de 30 % les dégâts infligés à tous les alliés par les coups critiques. Ce Champion subira les dégâts à leur place.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "23 460",
        "ATQ": "485",
        "DEF": "1 531",
        "VIT": "108",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 33%`,
};
