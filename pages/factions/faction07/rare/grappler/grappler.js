const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Porte-malheur",
          description: `Attaque 2 fois au hasard. Possède 15 % de chances de placer un débuff d'${DEBUFFS.WEAKEN} de 15 % pendant 2 tours.`,
          damage: "2.3*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Grille Âme",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 50 % de chances de placer, pendant 2 tours, deux débuffs de ${DEBUFFS.POISON} de 2,5 %.`,
          damage: "3.7*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Envelopper",
          description: `Place un buff de ${BUFFS.SHIELD} sur tous les alliés, équivalent à 20 % de leurs PV, et possède 15% de chances de placer un buff de ${BUFFS.REFLECT_DAM} de 2 tours sur tous les alliés.`,
          cooldown: 5,
          levelInfo: ["Bouclier +5%", "Bouclier +5%", "Bouclier +5%", "Bouclier +5%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 700",
        "ATQ": "859",
        "DEF": "1 189",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés Esprit lors de toutes les Batailles de 19%`,
};
