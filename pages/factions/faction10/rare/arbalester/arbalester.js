const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Souffrances Propagées",
          description: `Attaque 1 ennemi. Possède 50 % de chances de transférer sur la cible 1 débuff aléatoire de ce Champion.`,
          damage: "3.3*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Léthargie",
          description: `Attaque 1 ennemi. Possède 60 % de chances de placer les compétences de la cible en recharge.`,
          damage: "5.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Brisâme",
          description: `Attaque 1 ennemi. Les dégâts augmentent en fonction du nombre de débuffs de la cible.`,
          damage: "ATQ*(2+Target Debuffs)",
          cooldown: 6,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 205",
        "ATQ": "1 421",
        "DEF": "661",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
