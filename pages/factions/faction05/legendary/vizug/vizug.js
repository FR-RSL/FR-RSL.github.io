const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Chair fondue",
          description: `Attaque tous les ennemis. Possède 35% de chances d'activer instantanément les débuffs ${DEBUFFS.POISON} et ${DEBUFFS.BURN} sur chaque ennemi.`,
          damage: "0.16*PV",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Feu-vengeur",
          description: `Attaque tous les ennemis. Possède 75% de chances de placer deux débuffs ${DEBUFFS.POISON} de 5% et un débuff ${DEBUFFS.BURN} pendant 2 tours.`,
          damage: "0.26*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Pillard d'Anhelt",
          description: `Attaque tous les ennemis. Avant d'attaquer, place un buff ${BUFFS.PRE} de 50% sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

Augmente ensuite d'1 tour la durée de tous les débuffs des ennemis. Réduit également d'1 tour la durée de tous les débuffs des alliés.`,
          damage: "0.29*PV",
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Marque de Broyeur d'os [P]",
          description: `Augmente la PRÉ de chaque allié de 10 points pour chaque débuff ${DEBUFFS.BURN} et ${DEBUFFS.POISON} sur l'équipe ennemie. Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de ce Champion si ce Champion spécifique est mort.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 470",
        "ATQ": "881",
        "DEF": "1 200",
        "VIT": "106",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/sup-hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 30%${RETURN}${RETURN}

(ne s'applique qu'à la Faction des Tribus Ogryn)${RETURN}${RETURN}

Augmente la statistique VIT des Alliés lors de toutes les Batailles de 15%`,
};
