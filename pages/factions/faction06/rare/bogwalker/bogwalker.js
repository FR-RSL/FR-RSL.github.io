const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Katars en Os",
          description: `Attaque un ennemi. Offre 30 % de chances de placer un débuff de ${DEBUFFS.ATK} de 50 % pendant 2 tours.`,
          damage: "3.8*DEF",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Attaque Combo",
          description: `Attaque tous les ennemis. Place un buff d'${BUFFS.DEF} de 30 % sur tous les alliés pendant 2 tours.`,
          damage: "2*ATQ+2.3*DEF",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Temps de recharge -1", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Éclaireur [P]",
          description: `Place un buff de ${BUFFS.REFLECT_DAM} de 30 % sur tous les alliés, pendant 1 tour, si l'attaque passe en critique.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 020",
        "ATQ": "848",
        "DEF": "1 112",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors des Donjons de 25%`,
};
