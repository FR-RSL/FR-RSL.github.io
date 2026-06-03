const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Chasse aux Démons",
          description: `Attaque un ennemi. Possède 30% de chances de placer un débuff ${DEBUFFS.DEF} de 30% pendant 2 tours. Sinon, possède 30% de chances de placer un débuff ${DEBUFFS.DEF} de 60% si la cible est affligée de 2 débuffs ou plus.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Porte-Malédiction",
          description: `Attaque un ennemi. Possède 75% de chances de transférer sur la cible 2 débuffs aléatoires de ce Champion.`,
          damage: "5.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Cri de Ralliement",
          description: `Place un buff ${BUFFS.ATK} de 50% sur tous les alliés pendant 2 tours, puis retire un débuff aléatoire sur chaque allié.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 865",
        "ATQ": "1 013",
        "DEF": "1 024",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
