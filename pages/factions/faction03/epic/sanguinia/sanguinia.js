const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Punition Rouge",
          description: `Attaque 3 fois un ennemi. Chaque frappe possède 20 % de chances de réduire d'1 tour la durée de 2 débuffs aléatoires de la cible.`,
          damage: "2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Sang Sacré",
          description: `Place sur tous les alliés un buff ${BUFFS.BLOCK_DEBUFFS} pendant 1 tour et un buff ${BUFFS.HEALS} de 15 % pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Agneau Sacrificiel",
          description: `Attaque un ennemi. Possède 75 % de chances de transférer tous les débuffs de ce Champion sur la cible. Retire tous les débuffs sur tous les alliés sauf ce Champion.`,
          damage: "7.6*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "20 475",
        "ATQ": "760",
        "DEF": "1 178",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de la Tour du Malheur de 55`,
};
