const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Taille et Tranche",
          description: `Attaque 3 fois un ennemi.`,
          damage: "1.2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "À la hauteur du Devoir",
          description: `Place un buff ${BUFFS.ATK} de 25 % et un buff ${BUFFS.CRATE} de 30 % sur ce Champion pendant 2 tours, puis attaque tous les ennemis.

[Possède 75 % de chances de placer un débuff ${DEBUFFS.BOMB} qui explosera après 3 tours lorsque Fenax se trouve dans la même équipe.]`,
          damage: "3.9*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Présence Imposante",
          description: `Place, pendant 2 tours, un buff ${BUFFS.COUNTER} sur ce Champion. Possède 75 % de chances de placer, pendant 2 tours, un débuff d'${DEBUFFS.WEAKEN} de 25 % sur les ennemis.`,
          cooldown: 6,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 390",
        "ATQ": "1 343",
        "DEF": "1 134",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Augmente la statistique TAUX DE C. des Alliés lors des Donjons de 15%`,
};
