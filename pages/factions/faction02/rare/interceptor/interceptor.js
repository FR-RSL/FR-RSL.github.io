const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Perce-Jambe",
          description: `Attaque un ennemi. Offre 25% de chances de placer un débuff de ${DEBUFFS.SPD} de 15% pendant 2 tours.`,
          damage: "4.4*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Toxine Soporifique",
          description: `Attaque un ennemi. Possède 45% de chances de placer un débuff de ${DEBUFFS.SLEEP} pendant 2 tours. Place un débuff d'${DEBUFFS.WEAKEN} de 15% pendant 2 tours si la Compétence ne place pas un débuff de ${DEBUFFS.SLEEP}.`,
          damage: "5.8*DEF",
          cooldown: 6,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Parer",
          description: `Réduit de 15% le Compteur de Tour de tous les ennemis.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 360",
        "ATQ": "881",
        "DEF": "1 123",
        "VIT": "84",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
