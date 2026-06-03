const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Clouer",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 50% de chances de placer un débuff de ${DEBUFFS.POISON} de 5% pendant 2 tours.`,
          damage: "2.2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Aveuglé par Tocade",
          description: `Attaque tous les ennemis. Possède 75% de chances de placer un débuff de ${DEBUFFS.DEF} de 60% et un débuff d'${DEBUFFS.WEAKEN} de 25% pendant 2 tours.`,
          damage: "3.7*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Passion Brûlante",
          description: `Attaque tous les ennemis. Possède 75% de chances de placer un débuff de ${DEBUFFS.BURN} de 2 tours.`,
          damage: "4*ATQ",
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort4.webp",
          name: "Partenaire Pure",
          description: `Retire tous les buffs de tous les ennemis. Possède 50% de chances d'accorder un Tour Supplémentaire.${RETURN}${RETURN}

[Uniquement disponible lorsque Cupidon se trouve dans la même équipe.]`,
          cooldown: 4,
          isPassive: false
        }
      ],
  stats: {
        "PV": "22 635",
        "ATQ": "1 090",
        "DEF": "980",
        "VIT": "112",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 33%`,
};
