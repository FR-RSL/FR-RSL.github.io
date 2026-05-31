const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lumière de Surveillance",
          description: `Attaque un ennemi. Possède 40 % de chances de retirer 1 buff aléatoire. Sinon, possède 50 % de chances de voler 1 buff aléatoire si la cible possède 3 buffs ou plus.`,
          damage: "3.9*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Cri de Triomphe",
          description: `Attaque tous les ennemis. Possède 50 % de chances de placer un débuff ${DEBUFFS.WEAKEN} de 15 % pendant 2 tours.`,
          damage: "4.25*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Concentrée",
          description: `Place un buff ${BUFFS.ATK} de 25 % et un buff ${BUFFS.CRATE} de 15 % sur ce Champion pendant 3 tours, puis attaque tous les ennemis.`,
          damage: "3.9*ATQ",
          cooldown: 6,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 195",
        "ATQ": "1 233",
        "DEF": "782",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
