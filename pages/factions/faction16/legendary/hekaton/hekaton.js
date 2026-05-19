const championData = {
  type: "Defense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Rupture fulminante",
          description: `Attaque un ennemi.${RETURN}${RETURN}
A 75% de chances de placer un debuff ${DEBUFFS.PROVOKE} et un debuff ${DEBUFFS.UNFEEBLE} sur la cible pendant 1 tour.
A egalement 25% de chances qu'il soit impossible de resister a ces debuffs.${RETURN}${RETURN}

Si chaque ennemi possede un nombre de buffs inferieur ou egal a ceux de ce Champion, attaque au lieu de cela tous les ennemis. Cette attaque est toujours critique.
A 75% de chances de placer un debuff ${DEBUFFS.PROVOKE} et un debuff ${DEBUFFS.UNFEEBLE} sur tous les ennemis pendant 1 tour.
A egalement 25% de chances qu'il soit impossible de resister a ces debuffs.`,
          damage: "3.15*DEF | 2.3*DEF (Zone)",
          levelInfo: ["Dégâts +15%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Oeil de la tempete",
          description: `Attaque un ennemi. Avant d'attaquer, place un buff ${BUFFS.DEF} de 60% pendant 2 tours et 1 pile d'${BUFFS.STORMBREAKER} sur tous les allies. Cette attaque est toujours critique si le nombre de buffs de la cible est inferieur ou egal a ceux de ce Champion.${RETURN}${RETURN}

Ignorera le buff ${BUFFS.STONE_SKIN} et 50% de la DEF de la cible si le nombre de buffs sur la cible est inferieur ou egal a ceux de ce Champion.${RETURN}${RETURN}

Si l'attaque tue la cible, reduit les Compteurs de Tour de tous les autres ennemis d'une quantite egale au Compteur de Tour dont dispose la cible.`,
          damage: "4.7*DEF",
          cooldown: 5,
          levelInfo: ["Dégâts +20%", "Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Faveur du Pere-ciel",
          description: `Place un buff ${BUFFS.CRATE} de 30%, un buff ${BUFFS.BLOCK_DAMAGE} et un buff ${BUFFS.COUNTER} sur un allie cible pendant 2 tours.${RETURN}${RETURN}
Remplit les Compteurs de Tour de tous les allies de 25%.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Maitre de la foudre [P]",
          description: `Des qu'un allie sous pile d'${BUFFS.STORMBREAKER} place par ce Champion porte un coup critique, ce Champion inflige des degats bruts supplementaires a la cible.
Si la cible n'est pas un Boss ni un sbire, les degats bruts infliges sont egaux a 2% des PV MAX de la cible pour chaque buff sur ce Champion (s'accumule jusqu'a 10%).${RETURN}
Si la cible est un Boss ou un sbire, les degats bruts infliges sont egaux a 3% des PV MAX de la cible. Ces degats ne peuvent pas etre critiques.
Se produit une fois par competence et une fois par cible. Ne compte pas comme une frappe supplementaire.
Ces degats bruts ignorent les buffs ${BUFFS.SHIELD}, ${BUFFS.BLOCK_DAMAGE} et ${BUFFS.STRENGTHEN}.${RETURN}${RETURN}

Si plusieurs Champions de l'equipe disposent de cette Competence, une seule sera activee.
Cette competence ne s'activera pas sur les copies en double de ce Champion si ce Champion specifique est mort.`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "18 660",
        "ATQ": "727",
        "DEF": "1 608",
        "VIT": "99",
        "TAUX C.": "15%",
        "DEG C.": "63%",
        "RES": "50",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Allies lors de toutes les Batailles de 24%.`
};
