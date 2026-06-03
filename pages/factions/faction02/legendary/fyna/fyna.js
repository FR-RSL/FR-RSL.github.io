const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Épée temporelle",
          description: `Attaque un ennemi. Possède 50% de chances d'augmenter de 2 tours le temps de recharge d'une compétence aléatoire sur la cible.${RETURN}${RETURN}

Lorsqu'elle contre-attaque avec cette compétence, fait équipe avec un allié aléatoire. L'allié qui rejoint l'attaque utilisera sa compétence par défaut.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tu ne faibliras pas !",
          description: `Place un buff ${BUFFS.BLOCK_DEBUFFS}, un buff ${BUFFS.BLOCK_DAMAGE} et un buff ${BUFFS.COUNTER} sur un allié ciblé pendant 2 tours. Si la cible de la compétence n'est pas cette Championne, réinitialise le temps de recharge de toutes les compétences de la cible.${RETURN}${RETURN}

Le temps de recharge de cette compétence ne peut être ni réduit ni réinitialisé.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Lignée exaltée",
          description: `Place un buff ${BUFFS.ATK} de 50%, un buff ${BUFFS.CRATE} de 30% et un buff ${BUFFS.CDAM} de 30% sur tous les alliés pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Monter au front [P]",
          description: `Dès qu'un buff est placé sur un allié, remplit son Compteur de Tour de 3%.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 660",
        "ATQ": "1 123",
        "DEF": "1 211",
        "VIT": "113",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/sup-speed.webp",
  description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 20%${RETURN}${RETURN}

(ne s'applique qu'à la Faction des Hauts Elfes)${RETURN}${RETURN}

Augmente la statistique TAUX DE C. des Alliés lors de toutes les Batailles de 15%`,
};
