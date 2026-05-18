const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Dechirure de feu",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

A 75% de chances de placer un debuff ${DEBUFFS.DEF} de 60% pendant 2 tours.${RETURN}${RETURN}
A 50% de chances d'attaquer avec cette competence des qu'un debuff ${DEBUFFS.BURN} est active sur un ennemi. Se produit une fois par tour.`,
          damage: "1.8*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Marque brulante",
          description: `Attaque 2 fois un ennemi. Avant d'attaquer, place un debuff ${DEBUFFS.DEATHBRAND} sur la cible pendant 2 tours.${RETURN}${RETURN}
Ignorera les buffs ${BUFFS.UNKILLABLE} et ${BUFFS.SHIELD}, ainsi que 25% de la DEF de la cible.${RETURN}${RETURN}
Active la competence <span class="grn-t">Pouvoir de Pyrenei</span> de ce Champion si la cible est tuee. Si la cible survit, remplit au lieu de cela le Compteur de Tour de ce Champion de 50%.`,
          damage: "2.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Pouvoir de Pyrenei",
          description: `Attaque tous les ennemis. Avant d'attaquer, place un buff ${BUFFS.PRE} de 50% sur tous les allies pendant 2 tours.${RETURN}${RETURN}
A 75% de chances de placer un debuff ${DEBUFFS.BURN} sur tous les ennemis pendant 2 tours.${RETURN}${RETURN}
Remplit de 20% le Compteur de Tour de ce Champion pour chaque debuff ${DEBUFFS.BURN} place sur les ennemis et remplit de 10% le Compteur de Tour de ce Champion pour chaque debuff ${DEBUFFS.BURN} auquel les ennemis resistent.`,
          damage: "4.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Garde du Sous-flamme [P]",
          description: `${ACTIVE}
Active un effet <span class="grn-t">[Delai]</span> sur ce Champion des qu'il recoit un coup fatal.${RETURN}${RETURN}${PASSIVE}
Soigne ce Champion de 20% de ses PV MAX des qu'un debuff ${DEBUFFS.BURN} est active sur un ennemi.${RETURN}${RETURN}
Des qu'un debuff ${DEBUFFS.BURN} expire ou est retire a un ennemi, place un debuff ${DEBUFFS.TRUE_FEAR} sur cet ennemi pendant 1 tour.`,
          cooldown: 4,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "15 030",
        "ATQ": "1 454",
        "DEF": "1 123",
        "VIT": "99",
        "TAUX C.": "15%",
        "DEG C.": "63%",
        "RES": "30",
        "PRE": "10"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Allies lors de toutes les Batailles de 28%.`
};
