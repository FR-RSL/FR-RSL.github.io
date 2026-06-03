const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Rivière Rouge",
          description: `Attaque un ennemi. Possède 40% de chances de placer un débuff ${DEBUFFS.LEECH} pendant 2 tours.`,
          damage: "3.2*DEF",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Ruée Mortelle",
          description: `Attaque tous les ennemis. Possède 50% de chances de placer un débuff ${DEBUFFS.ATK} de 50% pendant 2 tours.`,
          damage: "4*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Icône Oni",
          description: `Place sur tous les alliés un buff ${BUFFS.DEF} de 60% pendant 2 tours et un buff ${BUFFS.HEALS} de 15% pendant 1 tour.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Touché Spirituel [P]",
          description: `Au début de chaque tour, retire un débuff aléatoire sur ce Champion. Retirera les débuffs ${DEBUFFS.STUN}, ${DEBUFFS.SLEEP}, ${DEBUFFS.GEL}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.PROVOKE} et ${DEBUFFS.PETRIFICATION} avant les autres débuffs.`,
          cooldown: 3,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 505",
        "ATQ": "760",
        "DEF": "1 376",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 25%`,
};
