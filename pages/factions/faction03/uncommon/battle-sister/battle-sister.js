const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sectionner",
          description: `Attaque 1 ennemi. Réduit de 10 % le Compteur de Tours si cette attaque passe en critique.`,
          damage: "4.2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Condamner",
          description: `Attaque 1 ennemi. Possède 15 % de chances de retirer 1 buff aléatoire sur chaque cible. Cette attaque passe toujours en critique.`,
          damage: "6.7*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 205",
        "ATQ": "1 090",
        "DEF": "716",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
