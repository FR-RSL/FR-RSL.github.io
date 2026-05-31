const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Poigne Tombale",
          description: `Attaque 2 fois au hasard.

Chaque frappe possède 35 % de chances de placer un débuff de ${DEBUFFS.SPD} de 30 % pendant 2 tours.`,
          damage: "1.7*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Froid Engourdissant",
          description: `Attaque tous les ennemis.

Place un débuff ${DEBUFFS.ATK} de 50 % pendant 2 tours. Possède également 50 % de chances de placer un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 2 tours.`,
          damage: "3.7*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Arrivée Fatidique [P]",
          description: `Joue toujours en premier lors de chaque round.

Si plusieurs Hégémons participent au combat, l'Hégémon ayant la VIT la plus élevée jouera en premier, suivi du deuxième sur la liste et ainsi de suite.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 150",
        "ATQ": "1 487",
        "DEF": "815",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Augmente la statistique TAUX DE C. des Alliés lors de toutes les Batailles de 19%`,
};
