const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Griffes sur Griffes",
          description: `Attaque 3 fois un ennemi. Chaque coup critique possède également 50% de chances de réduire le Compteur de Tour de la cible de 3%.`,
          damage: "0.9*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Dévitaliser",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 85% de chances de placer un débuff ${DEBUFFS.HEALS} de 100% pendant 2 tours.`,
          damage: "2.7*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Évanouie dans l'Ombre",
          description: `Place un buff ${BUFFS.PERFECT_VEIL} et un buff ${BUFFS.REFLECT_DAM} de 30% sur ce Champion pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 545",
        "ATQ": "1 277",
        "DEF": "848",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors des Donjons de 40`,
};
