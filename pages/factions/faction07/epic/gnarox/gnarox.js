const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Écrase-genou",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

Chaque frappe a 30 % de chances de placer un débuff ${DEBUFFS.SPD} de 30 % pendant 2 tours.`,
          damage: "1.7*DEF",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Arriver à ses fins",
          description: `Place un buff ${BUFFS.ALLY_PROTECT} de 50 % sur tous les alliés sauf ce Champion pendant 2 tours. Place également un buff ${BUFFS.COUNTER} sur ce Champion pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Combattant borné",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

A 50 % de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 1 tour. Il est impossible de résister à ce débuff si la DÉF de ce Champion est inférieure à celle de la cible.${RETURN}${RETURN}

Place un buff ${BUFFS.REFLECT_DAM} de 30 % sur tous les alliés pendant 2 tours.`,
          damage: "4*DEF",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Paria abhorré [P]",
          description: `Lorsqu'un ennemi attaque un allié sous buff ${BUFFS.ALLY_PROTECT}, a 15 % de chances de placer un débuff ${DEBUFFS.PROVOKE} sur l'assaillant pendant 1 tour.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 505",
        "ATQ": "749",
        "DEF": "1 387",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des Cryptes de Faction de 30%`,
};
