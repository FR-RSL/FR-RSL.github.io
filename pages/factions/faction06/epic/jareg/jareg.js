const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Griffes Déchirantes",
          description: `Attaque un ennemi. Offre 35 % de chances de placer un débuff de ${DEBUFFS.ATK} de 50 % pendant 2 tours.`,
          damage: "6.7*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Chef de Meute",
          description: `Place, pendant 2 tours, un buff de ${BUFFS.ALLY_PROTECT} de 50 % et un buff de ${BUFFS.DEF} de 60 % sur tous les alliés.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Écailles Protectrices [P]",
          description: `Place, pendant 1 tour, un buff de ${BUFFS.HEALS} de 15 % sur un allié dès qu'un allié perd 20 % de ses PV MAX suite à une frappe.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "23 460",
        "ATQ": "683",
        "DEF": "1 057",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 33%`,
};
