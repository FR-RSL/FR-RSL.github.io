const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lances de sombre-lumière",
          description: `Attaque 3 fois un ennemi.${RETURN}${RETURN}

Chaque frappe a 35 % de chances de réduire le Compteur de Tour de la cible de 5 %. Si la cible se trouve sous un débuff ${DEBUFFS.SPD}, chaque frappe a au lieu de cela 35 % de chances de réduire le Compteur de Tour de la cible de 10 %.`,
          damage: "4.6*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Réduire en cendres",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

A 50 % de chances de placer un débuff ${DEBUFFS.SPD} de 15 % pendant 2 tours.${RETURN}${RETURN}

Soigne tous tes alliés à hauteur de 15 % de leurs PV MAX.`,
          damage: "6.3*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Dégâts +15%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rite de flamme",
          description: `Place un buff ${BUFFS.SPD} de 30 % sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

Remplit le Compteur de Tour de tous les alliés de 15 %.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 195",
        "ATQ": "749",
        "DEF": "1 266",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors des batailles d'Arène de 30%`,
};
