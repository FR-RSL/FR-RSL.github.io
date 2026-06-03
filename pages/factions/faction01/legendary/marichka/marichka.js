const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Unis nous triomphons",
          description: `Attaque un ennemi. Un allié aléatoire fera équipe et rejoindra l'attaque. L'allié rejoignant l'attaque utilisera toujours sa compétence par défaut.${RETURN}${RETURN}

Si Taras le Farouche se trouve dans la même équipe, il sera toujours celui qui rejoint l'attaque de cette Championne.`,
          damage: "3.5*ATQ",
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Source de ténacité",
          description: `Restaure totalement tous les PV MAX réduits des alliés, puis soigne tous les alliés de 40% des PV MAX de cette Championne.${RETURN}${RETURN}

Place un buff ${BUFFS.SHIELD} et un buff ${BUFFS.STRENGTHEN} protégé sur tous les alliés pendant 2 tours. La valeur du ${BUFFS.SHIELD} est égale à 20% des PV MAX de cette Championne.`,
          cooldown: 4,
          levelInfo: ["Soins +10%", "Bouclier +10%", "Soins +10%", "Bouclier +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Amitié nourrie",
          description: `Retire tous les débuffs sur tous les alliés, puis remplit les Compteurs de tour de tous les alliés de 15%. Remplit le Compteur de Tour de chaque allié de 5% supplémentaires pour chaque débuff qui leur a été retiré.${RETURN}${RETURN}

Augmente la RÉS de tous les alliés de 5 pour chaque débuff retiré. Accorde un Tour supplémentaire si 5 débuffs ou plus ont été retirés.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Tout donner [P]",
          description: `Ranime tous les alliés morts avec 50% de PV et 75% de Compteur de Tour dès que cette Championne est tuée.${RETURN}${RETURN}

${ACTIVE}

Place un buff ${BUFFS.BLOCK_DAMAGE} sur tous les alliés pendant 1 tour dès qu'un allié reçoit un débuff ${DEBUFFS.BOMB}, ${DEBUFFS.POISON} ou ${DEBUFFS.BURN}.${RETURN}${RETURN}

Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de cette Championne si cette Championne spécifique est morte.`,
          cooldown: 3,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 810",
        "ATQ": "892",
        "DEF": "1 233",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 24%`,
};
