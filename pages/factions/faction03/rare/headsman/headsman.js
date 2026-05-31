const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Exécution Publique",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 10 % de chances de placer un débuff ${DEBUFFS.FEAR} pendant 1 tour.`,
          damage: "1.57*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Dû du Bourreau",
          description: `Attaque tous les ennemis. Possède 30 % de chances de placer un débuff ${DEBUFFS.HEALS} de 100 % pendant 2 tours.`,
          damage: "3.7*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Jugé Coupable [P]",
          description: `Inflige 15 % de dégâts supplémentaires sur les cibles affligées de débuffs ${DEBUFFS.HEALS}.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "10 740",
        "ATQ": "1 354",
        "DEF": "958",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
