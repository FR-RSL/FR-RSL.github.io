const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Canonnade portable",
          description: `Attaque un ennemi.${RETURN}${RETURN}

A 80% de chances de transférer 1 débuff aléatoire de ce Champion sur la cible.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Barrage de tirs sporadiques",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

A 75% de chances de retirer 1 buff aléatoire à tous les ennemis. A 75% de chances de voler au lieu de cela 2 buffs aléatoires si la cible se trouve sous débuff ${DEBUFFS.BLOCK_BUFFS} ou ${DEBUFFS.LOCK_ACTIVE}.`,
          damage: "3.85*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Abatteur de bête",
          description: `Attaque 3 fois un ennemi.${RETURN}${RETURN}

La première frappe a 75% de chances de placer un débuff ${DEBUFFS.BLOCK_BUFFS} pendant 2 tours. La deuxième frappe a 75% de chances de placer un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 2 tours. La troisième frappe a 50% de chances d'appliquer un effet de ${PROP_DEBUFF}, qui prend 1 débuff aléatoire de la cible pour le placer sur tous les autres ennemis.`,
          damage: "2*ATQ",
          cooldown: 5,
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Yeux de Cherche-soleil [P]",
          description: `Ce Champion inflige 15% de dégâts supplémentaires aux ennemis dont la PRÉ est inférieure à la sienne.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 535",
        "ATQ": "1 365",
        "DEF": "969",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors des Cryptes de Factions de 33%`,
};
