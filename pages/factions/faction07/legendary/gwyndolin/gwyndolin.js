const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Serre-fourche",
          description: `Attaque 3 fois un ennemi. Chaque frappe possède 30 % de chances d'augmenter d'1 tour la durée de tous les débuffs de la cible.`,
          damage: "1.1*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Boomerangs faucilles",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.SPD} de 30 % et un débuff ${DEBUFFS.LEECH} sur tous les ennemis pendant 2 tours.${RETURN}${RETURN}

Place également un débuff ${DEBUFFS.PRE} de 50 % pendant 2 tours sur les ennemis affligés de 2 débuffs ou plus.`,
          damage: "3.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +20%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Dard de plume",
          description: `Attaque tous les ennemis. Avant d'attaquer, place un buff ${BUFFS.PRE} de 50 % sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

Possède 75 % de chances de voler tous les buffs ${BUFFS.BLOCK_DEBUFFS} dont disposent les ennemis.${RETURN}${RETURN}

Si au moins 1 buff ${BUFFS.BLOCK_DEBUFFS} a été volé à l'ennemi, place un buff ${BUFFS.BLOCK_DEBUFFS} sur tous les alliés pendant 1 tour.`,
          damage: "4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +20%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Oiseau de proie [P]",
          description: `Les DÉG C. de ce Champion augmentent de 1 % par tranche de 10 points de PRÉ qu'il possède.${RETURN}${RETURN}

Accorde un Tour supplémentaire après que ce Champion utilise 3 compétences, quelles qu'elles soient.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 855",
        "ATQ": "1 520",
        "DEF": "1 002",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 60`,
};
