const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Fracas Déconcertant",
          description: `Attaque un ennemi. Possède 35 % de chances d'augmenter d'1 tour le temps de recharge d'une des Compétences de la cible prise au hasard.`,
          damage: "4.2*DEF",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Repousser",
          description: `Attaque 2 fois un ennemi. Possède 75 % de chances de réduire le Compteur de Tour de 5 %. Sinon, réduit le Compteur de Tour de 10 % si la cible est affligée d'un débuff ${DEBUFFS.ATK}.`,
          damage: "3.2*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Coup Destructeur",
          description: `Attaque tous les ennemis. Offre 75 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % pendant 2 tours.`,
          damage: "3.9*DEF",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Brutalité d'ours ${PASSIVE}",
          description: `Chaque frappe possède également 50 % de chances de réduire le Compteur de Tour de la cible de 7,5 %. Chaque frappe possède également 50 % de chances de placer une des Compétences de la cible en temps de recharge si la cible souffre d'un débuff ${DEBUFFS.CRATE}.`,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +20%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 320",
        "ATQ": "793",
        "DEF": "1 222",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
