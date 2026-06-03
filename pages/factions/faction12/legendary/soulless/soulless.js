const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Coup Ahurissant",
          description: `Attaque un ennemi. A 35 % de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour.${RETURN}${RETURN}

Ignorera 30 % de la DÉF de la cible si la cible est affligée d'un débuff ${DEBUFFS.PROVOKE}.`,
          damage: "3.6*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Vague de Désespoir",
          description: `Attaque tous les ennemis. 75 % de chances de retirer tous les buffs.${RETURN}${RETURN}

A également 75 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % et un débuff ${DEBUFFS.HEX} pendant 2 tours.`,
          damage: "3.9*DEF",
          cooldown: 3,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Règne de Terreur",
          description: `Attaque tous les ennemis. Augmente d'1 tour la durée de tous les débuffs sur chaque cible, puis place un débuff ${DEBUFFS.PROVOKE}sur tous les ennemis pendant 1 tour.${RETURN}${RETURN}

Place un buff ${BUFFS.SHIELD} sur tous les alliés pendant 2 tours, égal à 30 % des dégâts infligés, ainsi qu'un buff ${BUFFS.COUNTER} sur ce Champion pendant 2 tours. Les dégâts augmentent de 10 % pour chaque débuff dont est affligée la cible.`,
          damage: "4.9*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Bouclier +10%", "Bouclier +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Provocation grossière [P]",
          description: `Ignorera 30 % de la RÉS d'une cible si la DÉF de la cible est inférieure à celle de ce Champion.${RETURN}${RETURN}

Les alliés infligent 25 % de dégâts en plus aux cibles sous débuff ${DEBUFFS.PROVOKE} placé par ce Champion.${RETURN}${RETURN}

Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de ce Champion si ce Champion spécifique est mort.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 650",
        "ATQ": "848",
        "DEF": "1 421",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des Cryptes de Faction de 44%`,
};
