const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Service dans la mort",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

Chaque frappe vole 10% du Compteur de Tour de la cible. Place un débuff ${DEBUFFS.TRUE_FEAR} pendant 2 tours si le Compteur de Tour de la cible est totalement vidé.`,
          damage: "2*ATQ",
          levelInfo: ["Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Invité importun",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Place un débuff ${DEBUFFS.PETRIFICATION} pendant 1 tour. A 75% de chances de placer un débuff ${DEBUFFS.TRUE_FEAR} pendant 2 tours sur tous les ennemis qui ne sont pas sous débuff ${DEBUFFS.FEAR} ou ${DEBUFFS.TRUE_FEAR}.${RETURN}${RETURN}

${PASSIVE}

Active cette compétence dès qu'un ennemi sous débuff ${DEBUFFS.FEAR} ou ${DEBUFFS.TRUE_FEAR} utilise une compétence avec succès.. Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de ce Champion si ce Champion spécifique est mort.`,
          damage: "5.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Fioriture spectrale",
          description: `Attaque tous les ennemis. Avant d'attaquer, a 75% de chances de réduire de 3 tours la durée de tous les buffs ennemis. Accordera un Tour supplémentaire s'il n'y a aucun buff sur l'équipe ennemie avant l'attaque.${RETURN}${RETURN}

A également 75% de chances d'augmenter de 3 tours les temps de recharge de toutes les compétences des ennemis.`,
          damage: "4*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Le meilleur fantôme [P]",
          description: `Dès qu'un ennemi est ranimé, place un débuff ${DEBUFFS.TRUE_FEAR} sur cet ennemi pendant 2 tours. Si plusieurs Champions de l'équipe disposent de cette Compétence, cet effet ne sera activé qu'une fois.${RETURN}${RETURN}

Retire les débuffs ${DEBUFFS.STUN}, ${DEBUFFS.GEL}, ${DEBUFFS.SLEEP}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR} et ${DEBUFFS.PETRIFICATION} sur ce Champion avant le début de son tour.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 990",
        "ATQ": "1 211",
        "DEF": "1 101",
        "VIT": "109",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 19%`,
};
