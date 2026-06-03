const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Infâme distillation",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

Chaque frappe a 25 % de chances de voler un buff aléatoire. Chaque frappe a également 75 % de chances d'appliquer un effet de ${PROP_DEBUFF}, prenant 1 débuff aléatoire de la cible pour le placer sur tous les ennemis sous débuff ${DEBUFFS.HEX}.`,
          damage: "0.1*PV",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Mélange vraiment infect",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Possède 75 % de chances de placer un débuff ${DEBUFFS.HEX} et un débuff ${DEBUFFS.WEAKEN} de 25 % sur tous les ennemis pendant 2 tours.${RETURN}${RETURN}

L'allié qui a les DÉG C. les plus élevés fera équipe et rejoindra l'attaque. L'allié qui rejoint l'attaque utilisera sa compétence par défaut. Les dégâts infligés par l'allié qui rejoint l'attaque augmenteront de 10 % pour chaque débuff sur la cible.`,
          damage: "0.2*PV",
          cooldown: 5,
          levelInfo: ["Dégâts +15%", "Chances de Buff/Debuff +10%", "Temps de recharge -1", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Une effluve de folie",
          description: `Augmente d'1 tour la durée de tous les buffs sur tous les alliés et réduit d'1 tour la durée de tous les débuffs sur tous les alliés.${RETURN}${RETURN}

Remplit également le Compteur de Tour de tous les alliés de 20 %.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Time For Tea! [P]",
          description: `Every 10 turns taken by allies, heals all allies by 20% of their MAX HP. Every 6 turns taken by enemies, places a ${DEBUFFS.TRUE_FEAR} debuff on all enemies for 1 turn.<br><br>If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.<br><br>Heal Multiplier: 0.2*Target Max HP`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "23 295",
        "ATQ": "859",
        "DEF": "1 167",
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
