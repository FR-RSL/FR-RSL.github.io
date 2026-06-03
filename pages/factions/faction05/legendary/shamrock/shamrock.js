const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Troc de Chance",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 60 % de chances de retirer un buff aléatoire de la cible. Si un buff est retiré, possède 35 % de chances de voler ce buff.`,
          damage: "2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Porte-bonheur",
          description: `Place un buff ${BUFFS.DEF} de 60 % sur tous les alliés pendant 2 tours. Place, pendant 2 tours, un buff ${BUFFS.SPD} de 30 % sur tous les alliés ayant plus de 50 % de PV. Possède également 50 % de chances de placer un buff ${BUFFS.CRATE} de 30 % sur ces alliés pendant 2 tours.${RETURN}${RETURN}

Place, pendant 2 tours, un buff ${BUFFS.REVIVE_ON_DEATH} sur tous les alliés ayant moins de 50 % de PV. Possède également 50 % de chances de placer un buff ${BUFFS.HEALS} de 15 % sur ces alliés pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Insaisissable",
          description: `Place un débuff ${DEBUFFS.SPD} de 30 % sur tous les ennemis. Réduit de 15 % le Compteur de Tour de tous les ennemis.${RETURN}${RETURN}

Remplit de 15 % le Compteur de Tour de tous les alliés si le Compteur de Tour de n'importe quel ennemi est inférieur à 50 %.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "20 805",
        "ATQ": "1 002",
        "DEF": "1 189",
        "VIT": "111",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 70`,
};
