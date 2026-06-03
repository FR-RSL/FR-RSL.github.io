const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lances de sombre-lumière",
          description: `Attaque 3 fois un ennemi.${RETURN}${RETURN}

Chaque frappe a 35% de chances de réduire le Compteur de Tour de la cible de 5%. Si la cible se trouve sous un débuff ${DEBUFFS.SPD}, chaque frappe a au lieu de cela 35% de chances de réduire le Compteur de Tour de la cible de 10%.`,
          damage: "1.55*ATQ",
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Réduire en cendres",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

A 50% de chances de placer un débuff ${DEBUFFS.SPD} de 15% pendant 2 tours.${RETURN}${RETURN}

Soigne tous tes alliés à hauteur de 15% de leurs PV MAX.`,
          damage: "4.6*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Rite de flamme",
          description: `Place un buff ${BUFFS.SPD} de 30% sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

Remplit le Compteur de Tour de tous les alliés de 15%.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "17 835",
        "ATQ": "848",
        "DEF": "991",
        "VIT": "107",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "30",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Allies dans les Donjons de 16%.`
};
