const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lance Ardente",
          description: `Attaque 1 ennemi. Place un débuff de ${DEBUFFS.ATK} de 25 % pendant 2 tours si cette attaque passe en critique.`,
          damage: "100+3.1*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Voie des Flammes",
          description: `Attaque 3 fois 1 ennemi. Chaque frappe possède 30 % de chances de placer un débuff de ${DEBUFFS.POISON} de 2,5 % pendant 2 tours.`,
          damage: "2.3*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "10 080",
        "ATQ": "1 178",
        "DEF": "903",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
