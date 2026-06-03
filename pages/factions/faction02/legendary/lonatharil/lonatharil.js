const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Galanterie",
          description: `Attaque un ennemi. Détruit les PV MAX de la cible de 30 % des dégâts infligés. Place sur l'allié ayant le moins de PV un buff ${BUFFS.SHIELD} équivalent à 10 % des PV MAX de ce Champion pendant 2 tours.`,
          damage: "0.23*PV",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Barrière vacillante",
          description: `Attaque tous les ennemis. Place sur tous les alliés un buff ${BUFFS.SHIELD} équivalent à 20 % des PV MAX de ce Champion pendant 3 tours.${RETURN}${RETURN}

S'il y a des alliés morts, place plutôt sur tous les alliés un buff ${BUFFS.SHIELD} équivalent à 30 % des PV MAX de ce Champion pendant 3 tours. Il est impossible pour les ennemis ou les alliés de retirer, voler, transférer ou propager ce buff, et d'augmenter ou de réduire sa durée.`,
          damage: "0.25*PV",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Heure de gloire",
          description: `Place un buff ${BUFFS.CDAM} sur tous les alliés pendant 2 tours, puis fais équipe avec eux pour attaquer un seul ennemi.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Perceur [P]",
          description: `Inflige 20 % de dégâts supplémentaires contre les cibles sous buffs ${BUFFS.SHIELD}.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "23 130",
        "ATQ": "848",
        "DEF": "1 189",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de la Tour du Malheur de 35%`,
};
