const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Couteaux Serres",
          description: `Attaque tous les ennemis. Soigne de 15 % des dégâts infligés si cette Championne possède moins de 50 % de PV. Sinon, booste de 20 % le Compteur de Tour de cette Championne si elle possède 50 % de PV ou plus.`,
          damage: "2.2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Cieux Immortels",
          description: `Retire tous les débuffs de tous les alliés, puis place un buff ${BUFFS.BLOCK_DEBUFFS} et un buff ${BUFFS.REVIVE_ON_DEATH} sur tous les alliés pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Rituel Ensanglanté [P]",
          description: `Blesse cette Championne de 10 % de ses PV MAX au début de chaque tour. Soigne tous les alliés, sauf cette Championne, à hauteur de la moitié des PV perdus actuels de cette Championne. Au début de chaque tour, place un débuff ${DEBUFFS.SPD} de 30 % sur cette Championne pendant 1 tour. Possède également 50 % de chances de placer un débuff ${DEBUFFS.FEAR} sur cette Championne pendant 1 tour.`,
          levelInfo: ["Soins +5%", "Soins +5%", "Soins +5%", "Soins +5%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 330",
        "ATQ": "958",
        "DEF": "1 123",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 25%`,
};
