const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Entaille argentée",
          description: `Attaque un ennemi. Possède 30% de chances de placer un débuff ${DEBUFFS.DEF} de 60% pendant 2 tours.`,
          damage: "3.3*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Miroitement",
          description: `Attaque 3 fois au hasard. Chaque frappe possède 75% de chances d'augmenter d'1 tour la durée d'un débuff aléatoire de la cible.`,
          damage: "1.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Chaîne d'illusion",
          description: `Attaque tous les ennemis. Possède 75% de chances de placer un débuff ${DEBUFFS.LEECH} sur tous les ennemis pendant 2 tours.`,
          damage: "3.4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Cycle lunaire [P]",
          description: `Augmente la VIT de ce Champion de 2 points pour chaque ennemi sous débuff ${DEBUFFS.LEECH}.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 040",
        "ATQ": "1 476",
        "DEF": "892",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
