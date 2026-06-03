const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lame Givrécorce",
          description: `Attaque 3 fois un ennemi. Chaque frappe possède 25% de chances de placer un débuff ${DEBUFFS.GEL} pendant 1 tour.`,
          damage: "1.2*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Grêle de rasoirs",
          description: `Attaque 2 fois tous les ennemis. Chaque frappe possède 45% de chances de placer un débuff ${DEBUFFS.GEL} pendant 1 tour.`,
          damage: "1.9*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Bénédiction du Bleu",
          description: `Place un buff ${BUFFS.SPD} de 30% sur tous les alliés pendant 2 tours. Remplit également le Compteur de Tour de tous les alliés de 15%.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Danseur de neige [P]",
          description: `Remplit le Compteur de Tour de ce Champion de 5% pour chaque débuff ${DEBUFFS.GEL} placé par ce Champion.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 835",
        "ATQ": "1 090",
        "DEF": "1 024",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = null;
