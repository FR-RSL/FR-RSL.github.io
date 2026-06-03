const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lames Surs",
          description: `Attaque 2 fois un ennemi. Chappe frappe vole tous les buffs ${BUFFS.ATK}. Chaque frappe possède également 30% de chances de voler un buff aléatoire.${RETURN}${RETURN}

Il est impossible de résister au vol de buff ${BUFFS.ATK}.`,
          damage: "2*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Raid Cruel",
          description: `Attaque tous les ennemis. Possède 80% de chances de réduire d'1 tour la durée de tous les buffs. Il est impossible de résister à cet effet lors de frappes critiques.`,
          damage: "4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Transe d'Épée",
          description: `Place un buff ${BUFFS.CRATE} de 30% et un buff ${BUFFS.CDAM} de 30% sur ce Champion pendant 3 tours, puis accorde un Tour Supplémentaire.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Intransigeant [P]",
          description: `Immunisé contre les débuffs ${DEBUFFS.ATK}. Ignorera les buffs ${BUFFS.UNKILLABLE} lors d'attaques sous buff ${BUFFS.ATK}.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 040",
        "ATQ": "1 409",
        "DEF": "958",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors des batailles d'Arène de 20%`,
};
