const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lame assoiffée",
          description: `Attaque un ennemi. Détruit les PV MAX de la cible de 30% des dégâts infligés. Soigne également ce Champion à hauteur de 30% des dégâts infligés.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Rendre exsangue",
          description: `Attaque tous les ennemis. Possède 75% de chances de placer un débuff ${DEBUFFS.LEECH} pendant 2 tours.${RETURN}${RETURN}

Possède également 75% de chances de voler 50% du Compteur de Tour des Champions Seigneurs de l'Oriflamme, de l'Ordre Sacré ou Hauts Elfes. Sinon, possède 75% de chances de réduire le Compteur de Tour de 50% contre les cibles qui n'appartiennent pas à ces Factions.`,
          damage: "4.7*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Voile d'Esprit",
          description: `Attaque tous les ennemis. Possède 75% de chances de placer un débuff ${DEBUFFS.DEF} de 60% et un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 2 tours.${RETURN}${RETURN}

Place un buff ${BUFFS.PERFECT_VEIL} sur ce Champion pendant 2 tours.`,
          damage: "4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Tristement célèbre [P]",
          description: `Place un buff ${BUFFS.REVIVE_ON_DEATH} sur ce Champion pendant 2 tours lorsqu'il tue un ennemi.${RETURN}${RETURN}

Soigne également totalement ce Champion et remplit son Compteur de Tour de 50% chaque fois qu'il tue un ennemi.${RETURN}${RETURN}

[Ne soignera et ne remplira le Compteur de Tour de ce Champion que lorsque Konstantin le Diurne se trouve dans la même équipe.]`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 030",
        "ATQ": "1 443",
        "DEF": "1 134",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Augmente la statistique TAUX DE C. des Alliés lors de toutes les Batailles de 24%`,
};
