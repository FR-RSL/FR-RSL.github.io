const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Repère la Proie",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 30 % de chances de placer un débuff ${DEBUFFS.SPD} de 30 % pendant 2 tours.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Maître Chasseur",
          description: `Attaque tous les ennemis. Possède 70 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % et un débuff ${DEBUFFS.ATK} de 50% pendant 2 tours.`,
          damage: "3.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Mène la Meute",
          description: `Place, pendant 1 tour, un buff ${BUFFS.PRE} de 50 % sur un allié à chaque fois qu'un ennemi résiste à un débuff de l'allié.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 970",
        "ATQ": "859",
        "DEF": "1 046",
        "VIT": "107",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
