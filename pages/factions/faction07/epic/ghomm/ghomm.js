const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Coup de gourdin d'os",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

La première frappe a 30% de chances de placer un débuff ${DEBUFFS.LEECH} pendant 2 tours. La seconde frappe a 30% de chances de placer un débuff ${DEBUFFS.HEALS} de 100% pendant 2 tours.`,
          damage: "2.3*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Liens tacites",
          description: `Place un buff ${BUFFS.SPD} de 30% sur tous les alliés pendant 2 tours. Place également un buff ${BUFFS.HEALS} de 15% sur tous les alliés pendant 1 tour.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Tabassage de Main-jaune",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Réduit les Compteurs de Tour de tous les ennemis de 15%.${RETURN}${RETURN}

A 50% de chances de placer un débuff ${DEBUFFS.STUN} sur tous les ennemis pendant 1 tour.`,
          damage: "3.3*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Protecteur pastoral [P]",
          description: `Dès qu'un allié est attaqué, remplit le Compteur de Tour de ce Champion de 5% (une fois par allié attaqué).`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 175",
        "ATQ": "1 167",
        "DEF": "991",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 25%`,
};
