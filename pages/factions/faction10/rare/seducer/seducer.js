const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Toucher Berçant",
          description: `Attaque un ennemi. Possède 30 % de chances de placer un débuff de ${DEBUFFS.SLEEP} pendant 1 tour.`,
          damage: "2.4*DEF",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Coup Désorientant",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff de ${DEBUFFS.ATK} de 25 % pendant 2 tours.`,
          damage: "3.6*DEF",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Dévouement Tordu",
          description: `Place 2 tours de buff d'${BUFFS.DEF} de 30 % et 2 tours de buff de ${BUFFS.BLOCK_DEBUFFS} sur tous les alliés.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort4.webp",
          name: "Partenaire Altruiste",
          description: `Place, pendant 2 tours, un buff de ${BUFFS.ALLY_PROTECT} de 50 % sur tous les alliés. Place, pendant 1 tour, un buff de ${BUFFS.BLOCK_DAMAGE} sur ce Champion.${RETURN}${RETURN}

[Uniquement disponible lorsque Tentatrice se trouve dans la même équipe.]`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 185",
        "ATQ": "628",
        "DEF": "1 321",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 25%`,
};
