const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bâton Secousse",
          description: `Attaque tous les ennemis. Possède 30% de chances de placer un débuff ${DEBUFFS.PRE} de 50% pendant 2 tours.`,
          damage: "2.4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Pétrification Rampante",
          description: `Retire tous les buffs d'un ennemi ciblé avant de l'attaquer.${RETURN}${RETURN}

Sinon, vole tous les buffs si la cible se trouve sous un débuff ${DEBUFFS.BURN} placé par ce Champion.${RETURN}${RETURN}

Réduit le temps de recharge de Prise Bourbier de 2 tours si la cible est tuée par cette Compétence alors qu'elle se trouve sous un débuff ${DEBUFFS.BURN} placé par ce Champion.`,
          damage: "6*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Prise Bourbier",
          description: `Vide totalement le Compteur de Tour de la cible. Remplit le Compteur de Tour de ce Champion de la quantité perdue par la cible.${RETURN}${RETURN}

Possède 75% de chances de placer un débuff ${DEBUFFS.BURN} et un débuff ${DEBUFFS.WEAKEN} de 25% sur la cible pendant 3 tours.`,
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Garde de pierre [P]",
          description: `Réduit de 15% les dégâts reçus par les alliés et dévie ces dégâts sur chaque ennemi affligé d'un débuff ${DEBUFFS.BURN} placé par ce Champion. Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de ce Champion si ce Champion spécifique est mort.${RETURN}${RETURN}

Lorsque ce Champion est attaqué, dévie au lieu de cela 30% des dégâts. Lorsque des dégâts sont déviés, lors de chaque frappe ennemie, a 30% de chances d'infliger des dégâts supplémentaires équivalents à 3% des PV MAX de la cible.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 525",
        "ATQ": "1 343",
        "DEF": "925",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 25%`,
};
