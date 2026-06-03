const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lames de Haine",
          description: `Attaque 3 fois un ennemi. Chaque frappe possède 30% de chances de placer un débuff ${DEBUFFS.SPD} de 30% pendant 2 tours.`,
          damage: "1.1*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Nulle part où Fuir",
          description: `Attaque 3 fois un ennemi. Chaque frappe possède également 50% de chances de réduire le Compteur de Tour de la cible de 15%.`,
          damage: "2*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Irascibilité de Tueur",
          description: `Attaque 2 fois un ennemi. Chaque frappe place un débuff ${DEBUFFS.POISON} de 5% sur la cible pendant 3 tours.${RETURN}${RETURN}

Ignorera 10% de la DÉF de la cible pour chaque débuff ${DEBUFFS.POISON} dont la cible est affligée.`,
          damage: "2.7*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 515",
        "ATQ": "1 465",
        "DEF": "738",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
