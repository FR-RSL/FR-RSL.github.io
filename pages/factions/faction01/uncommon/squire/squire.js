const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Crochet Aérien",
          description: `Attaque 1 ennemi.`,
          damage: "3.5*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Briseur d'Arme",
          description: `Attaque tous les ennemis. Possède 30 % de chances de placer un débuff de ${DEBUFFS.ATK} de 25 % pendant 2 tours.`,
          damage: "3.9*DEF",
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 690",
        "ATQ": "760",
        "DEF": "947",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
