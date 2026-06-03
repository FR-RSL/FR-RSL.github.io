const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Gantelet Massacreur",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 30% de chances de placer un débuff ${DEBUFFS.ATK} de 25% pendant 2 tours.`,
          damage: "1.46*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Mettre en Lambeaux",
          description: `Attaque 3 fois un ennemi. Chaque frappe place un débuff ${DEBUFFS.HEALS} de 100% pendant 2 tours si ce Champion possède tous ses PV. Chaque frappe place un débuff ${DEBUFFS.HEALS} de 50% pendant 2 tours si ce Champion possède moins de 100% de PV.`,
          damage: "1.15*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Amas Sanglant [P]",
          description: `Place un buff ${BUFFS.ATK} de 25% sur ce Champion pendant 1 tour et réduit le temps de recharge de la compétence Mettre en Lambeaux chaque fois que les PV de ce Champion tombent sous 50%.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "13 380",
        "ATQ": "1 398",
        "DEF": "738",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
