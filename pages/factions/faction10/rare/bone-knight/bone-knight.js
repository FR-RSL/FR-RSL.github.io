const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Mutilation",
          description: `Attaque 2 fois un ennemi. Possède 15% de chances de placer un débuff d'${DEBUFFS.WEAKEN} de 15% pendant 2 tours.`,
          damage: "1.8*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Sceau Ancestral",
          description: `Attaque 1 ennemi. Possède 80% de chances de placer un débuff de ${DEBUFFS.HEALS} de 100% pendant 2 tours.`,
          damage: "7*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Vigueur de la Mort",
          description: `Attaque tous les ennemis. Place, pendant 2 tours, un buff d'${BUFFS.CRATE} de 15% sur tous les alliés.`,
          damage: "4.2*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 370",
        "ATQ": "1 090",
        "DEF": "980",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
