const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Kanabo Jutsu",
          description: `Attaque un ennemi. Possède 15 % de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour.`,
          damage: "0.2*HP",
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Balayage Téméraire",
          description: `Attaque tous les ennemis. Possède 50 % de chances de placer un débuff ${DEBUFFS.ATK} de 25 % pendant 2 tours.`,
          damage: "0.2*HP",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Clameur de Défi",
          description: `Possède 50 % de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 1 tour.${RETURN}${RETURN}

Place sur ce Champion un buff ${BUFFS.SHIELD} égal à 20 % de ses PV MAX pendant 2 tours. Place également un buff ${BUFFS.REFLECT_DAM} de 15 % sur tous les alliés sauf ce Champion pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "21 810",
        "ATQ": "749",
        "DEF": "826",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 15%`,
};
