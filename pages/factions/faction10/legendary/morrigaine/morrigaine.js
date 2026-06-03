const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hanter avec réserve",
          description: `Attaque un ennemi. Possède 50% de chances de placer un débuff ${DEBUFFS.SPD} de 30% pendant 2 tours.`,
          damage: "4.9*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Hurlement de Banshee",
          description: `Possède 75% de chances de voler tous les buffs d'une cible ennemie.${RETURN}${RETURN}

Possède également 75% de chances de placer un débuff ${DEBUFFS.TRUE_FEAR} sur tous les ennemis pendant 1 tour. Placera sinon un débuff ${DEBUFFS.PRE} de 50% pendant 2 tours si la cible est un Boss.`,
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Vélocimancie",
          description: `Possède 75% de chances de réduire de 20% le Compteur de Tour de tous les ennemis.${RETURN}${RETURN}

Remplit le Compteur de tour de tous les alliés de 20% et place un buff ${BUFFS.SPD} de 30% sur tous les alliés pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "La morte [P]",
          description: `Au début de chaque tour, place pendant 2 tours un débuff ${DEBUFFS.HEALS} de 100% sur l'ennemi ayant le moins de PV. Il est impossible pour les ennemis ou les alliés de retirer, transférer ou propager ce buff, et d'augmenter ou de réduire sa durée.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 815",
        "ATQ": "1 068",
        "DEF": "1 189",
        "VIT": "112",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 19%`,
};
