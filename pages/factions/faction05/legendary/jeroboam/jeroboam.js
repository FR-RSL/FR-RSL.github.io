const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Écrasement vigoureux",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

Possède 35 % de chances de réduire d'1 tour le temps de recharge d'une compétence aléatoire d'un allié.${RETURN}${RETURN}

Si un allié voit son temps de recharge réduit, remplit également le Compteur de Tour de cet allié de 10 %.`,
          damage: "1.6*DEF",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "C'est ma tournée !",
          description: `Retire tous les débuffs sur tous les alliés.${RETURN}${RETURN}

Soigne tous les alliés à hauteur de 15 % des PV MAX de ce Champion. Soigne également chaque allié de 2 % supplémentaires pour chaque débuff retiré par cette compétence.${RETURN}${RETURN}

Place sur tous les alliés un buff ${BUFFS.SHIELD} équivalent à 15 % des PV MAX de ce Champion pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Soins +5%", "Soins +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Derniers ordres",
          description: `Possède 75 % de chances d'augmenter d'1 tour la durée de tous les débuffs ennemis. Possède également 75 % de chances d'augmenter d'1 tour la durée de tous les buffs alliés.${RETURN}${RETURN}

Remplit le Compteur de Tour de tous les alliés de 20 %.`,
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Vraie légende [P]",
          description: `${PASSIVE}

Les effets de réduction du Compteur de Tour utilisés contre ce Champion par les ennemis sont réduits de 50 %.${RETURN}${RETURN}

Remplit également le Compteur de Tour de ce Champion de 20 % dès qu'un débuff ${DEBUFFS.STUN}, ${DEBUFFS.GEL}, ${DEBUFFS.SLEEP}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.PETRIFICATION} ou ${DEBUFFS.SHEEP} est placé sur un allié. Si plusieurs Champions de l'équipe disposent de cette Compétence, cet effet ne sera activé qu'une fois.${RETURN}${RETURN}

${ACTIVE}

Dès qu'un débuff ${DEBUFFS.STUN}, ${DEBUFFS.GEL}, ${DEBUFFS.SLEEP}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.PETRIFICATION} ou ${DEBUFFS.SLEEP} est retiré ou expire sur un allié, remplit son Compteur de Tour de 20 %. Si plusieurs Champions de l'équipe disposent de cette Compétence, cet effet ne sera activé qu'une fois.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 165",
        "ATQ": "870",
        "DEF": "1 498",
        "VIT": "108",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 60`,
};
