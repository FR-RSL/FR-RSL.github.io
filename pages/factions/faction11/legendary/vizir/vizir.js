const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lames Maudites",
          description: `Attaque 3 fois un ennemi.${RETURN}${RETURN}

Chaque frappe offre 35 % de chances d'augmenter d'1 tour la durée de tous les débuffs.`,
          damage: "1.3*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Maître de la Détresse",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

Chaque frappe possède 50 % de chances de placer, pendant 2 tours, un débuff de ${DEBUFFS.BLOCK_BUFFS}, un débuff de ${DEBUFFS.ATK} de 50 % et un débuff de ${DEBUFFS.HEALS} de 100 %.`,
          damage: "2.7*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
        },
        {
          img: "assets/sort3.webp",
          name: "Vizir des Poisons",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Applique un effet de [Propagation de Débuff], prenant 2 débuffs aléatoires sur la cible pour les placer sur tous les ennemis.`,
          damage: "6.6*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Assassin Invisible [P]",
          description: `Place un buff ${BUFFS.PERFECT_VEIL} de 2 tours sur ce Champion au début de chaque round.`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "16 350",
        "ATQ": "1 476",
        "DEF": "1 013",
        "VIT": "101",
        "TAUX C.": "15%",
        "DEG C.": "63%",
        "RES": "40",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Allies dans les Donjons de 34%.`
};
