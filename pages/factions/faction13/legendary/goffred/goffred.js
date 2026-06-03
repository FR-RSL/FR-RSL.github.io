const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Infliger la punition",
          description: `Attaque 2 fois un ennemi. La première frappe possède 50 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours. La seconde frappe possède 50 % de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 1 tour.`,
          damage: "1.8*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Commotion",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour.`,
          damage: "3.7*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Serment des Nains",
          description: `Place un buff ${BUFFS.DEF} de 60 % sur tous les alliés pendant 2 tours, puis retire tous les débuffs ${DEBUFFS.DEF} et ${DEBUFFS.WEAKEN} sur tous les alliés.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Blindé de cuivre [P]",
          description: `${PASSIVE}

Dès qu'un allié disposant d'un buff ${BUFFS.BLOCK_DAMAGE} placé par ce Champion se fait attaquer, possède 75 % de chances de placer un débuff ${DEBUFFS.STUN} sur l'assaillant pendant 1 tour.${RETURN}${RETURN}

${ACTIVE}

Si un allié est sur le point de se faire tuer par un coup fatal, bloque les dégâts en approche et lui accorde un buff ${BUFFS.BLOCK_DAMAGE} pendant 1 tour.`,
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 485",
        "ATQ": "848",
        "DEF": "1 432",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = null;
