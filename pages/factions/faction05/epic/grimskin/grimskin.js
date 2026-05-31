const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Poing Goudronneux",
          description: `Attaque un ennemi. Offre 40 % de chances de placer un débuff de ${DEBUFFS.SPD} de 30 % pendant 2 tours.`,
          damage: "3.4*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Crasse Frustrante",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 50 % de chances de placer un débuff de ${DEBUFFS.PROVOKE} d'1 tour. Possède 40 % de chances de placer un débuff de ${DEBUFFS.PROVOKE} d'1 tour sur tous les ennemis si le débuff de ${DEBUFFS.PROVOKE} est placé.`,
          damage: "2.8*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Lancer d'Ichor",
          description: `Attaque tous les ennemis. Possède 80 % de chances de retirer un buff aléatoire de chaque cible.`,
          damage: "3.9*DEF",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +20%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 350",
        "ATQ": "793",
        "DEF": "1 421",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
