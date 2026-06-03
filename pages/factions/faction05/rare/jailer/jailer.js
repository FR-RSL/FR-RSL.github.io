const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Confinement",
          description: `Attaque un ennemi. Possède 40% de chances de retirer un buff aléatoire sur la cible.`,
          damage: "4.5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Confisquer",
          description: `Attaque un ennemi. Possède 40% de chances de voler 2 buffs aléatoires à la cible. Place un coup supplémentaire en cas de vol de buff.`,
          damage: "6*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Représailles",
          description: `Attaque un ennemi. Dégâts augmentés de 20% si la cible ne possède aucun buff actif.`,
          damage: "6.2*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +15%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "11 235",
        "ATQ": "1 299",
        "DEF": "980",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors des Donjons de 20`,
};
