const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "As Tactique",
          description: `Attaque 1 ennemi. Possède 40% de chances de voler 2 buffs aléatoires sur la cible.`,
          damage: "4.3*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Frappe Fixante",
          description: `Attaque tous les ennemis. Possède 50% de chances de placer un débuff de ${DEBUFFS.BLOCK_BUFFS} de 2 tours.`,
          damage: "4.2*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Aura Invincible",
          description: `Place, pendant 1 tour, un buff de ${BUFFS.BLOCK_DAMAGE} sur tous les alliés.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "20 145",
        "ATQ": "1 013",
        "DEF": "947",
        "VIT": "106",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Augmente la statistique TAUX DE C. des Alliés Néant lors de toutes les Batailles de 23%`,
};
