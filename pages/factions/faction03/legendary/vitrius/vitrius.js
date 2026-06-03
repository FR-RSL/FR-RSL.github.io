const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sainte terreur",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

La première frappe soigne ce Champion à hauteur de 30% des dégâts infligés.${RETURN}${RETURN}

La seconde frappe possède 65% de chances de placer un débuff ${DEBUFFS.TRUE_FEAR} pendant 1 tour. Il est impossible de résister à ce débuff si la première frappe a totalement soigné ce Champion.${RETURN}${RETURN}

Si la cible est un Boss, la seconde frappe possède 65% de chances de placer un débuff ${DEBUFFS.SPD} de 30% pendant 2 tours.`,
          damage: "1.7*ATQ",
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tempête de rectitude",
          description: `Attaque tous les ennemis. Avant d'attaquer, retire tous les buffs ${BUFFS.DEF}, ${BUFFS.ALLY_PROTECT} et ${BUFFS.STRENGTHEN} de tous les ennemis. Il est impossible de résister à cet effet.${RETURN}${RETURN}

Si au moins un buff a été retiré, place également un buff ${BUFFS.ATK} de 50% et un buff ${BUFFS.CDAM} de 30% sur ce Champion pendant 2 tours.${RETURN}${RETURN}

Ignorera également 30% de la DÉF de chaque cible. Booste le Compteur de Tour de ce Champion de 30% pour chaque ennemi vivant après l'attaque.`,
          damage: "3.1*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "De ma main !",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

Chaque frappe ignore 30% de la DÉF de la cible et détruit les PV MAX de l'ennemi de 25% des dégâts infligés. Ne peut pas détruire les PV MAX d'un seul ennemi de plus de 75%. Si la cible est un Boss, détruit les PV MAX à hauteur de 35% des dégâts infligés.${RETURN}${RETURN}

Si la cible a des compétences actives en temps de recharge, les deux frappes ignoreront au lieu de ça 50% de la DÉF de la cible.${RETURN}${RETURN}

Ignore les buffs ${BUFFS.SHIELD}, ${BUFFS.UNKILLABLE} et ${BUFFS.BLOCK_DAMAGE}.`,
          damage: "2.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Inexorable [P]",
          description: `Réinitialise instantanément le temps de recharge d'une compétence active aléatoire de ce Champion dès qu'un ennemi augmente le temps de recharge de n'importe laquelle de ses compétences. Accorde un Tour supplémentaire si le temps de recharge d'une compétence a été réinitialisé. Après avoir accordé un Tour supplémentaire, place cette compétence en recharge.${RETURN}${RETURN}

Accordera également un Tour supplémentaire si un allié, une Maîtrise, un Jeu d'Artefacts ou un Accessoire réduit le temps de recharge de n'importe laquelle des compétences de ce Champion. Après avoir accordé un Tour supplémentaire, place cette compétence en recharge.`,
          cooldown: 4,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 855",
        "ATQ": "1 707",
        "DEF": "815",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Augmente la statistique TAUX DE C. des Alliés lors de toutes les Batailles de 24%`,
};
