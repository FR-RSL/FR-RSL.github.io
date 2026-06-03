const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Espadon Suintant",
          description: `Attaque un ennemi. Possède 40% de chances d'augmenter d'1 tour la durée de tous les débuffs ${DEBUFFS.POISON} sur la cible. Soigne ce Champion de 2,5% de ses PV MAX pour chaque débuff ${DEBUFFS.POISON} sur la cible.`,
          damage: "3.5*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Centre de Corruption",
          description: `Attaque un ennemi. Place une frappe supplémentaire pour chaque débuff ${DEBUFFS.POISON} sur la cible (jusqu'à 3 frappes supplémentaires).`,
          damage: "2*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Tempête de Vitriol",
          description: `Attaque tous les ennemis. Les dégâts augmentent en fonction du nombre de débuffs ${DEBUFFS.POISON} sur chaque cible.`,
          damage: "(3.5*ATQ)+(Poison Count*0.01*Target Max HP)",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Pestilence [P]",
          description: `Au début de chaque round, place quatre débuffs ${DEBUFFS.POISON} de 5% sur tous les ennemis pendant 2 tours.${RETURN}${RETURN}

Possède 50% de chances de placer au début de chaque tour un débuff ${DEBUFFS.POISON} de 5% sur tous les ennemis pendant 1 tour.${RETURN}${RETURN}

Dès qu'un ennemi place un débuff ${DEBUFFS.POISON} sur ce Champion, le retire instantanément et le remplace par un buff ${BUFFS.HEALS} de 15% pendant 2 tours.`,
          cooldown: 1,
          isPassive: true
        }
      ],
  stats: {
        "PV": "12 720",
        "ATQ": "1 663",
        "DEF": "1 068",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 19%`,
};
