const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Massue Sanglante",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Possède 30 % de chances de placer un débuff ${DEBUFFS.LEECH} de 2 tours.`,
          damage: "2.6*DEF+2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tromper",
          description: `Place, pendant 2 tours, un buff ${BUFFS.VEIL} et un buff de ${BUFFS.HEALS} de 15 % sur un allié.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Noble Défi",
          description: `Place, pendant 2 tours, un buff de ${BUFFS.COUNTER} sur ce Champion.${RETURN}
Possède 50 % de chances de placer un débuff de ${DEBUFFS.PROVOKE} d'1 tour sur tous les ennemis.`,
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 980",
        "ATQ": "705",
        "DEF": "1 266",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
