const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Intimide le Malfaisant",
          description: `Attaque un ennemi. Soigne tous tes alliés à hauteur de 7,5% de leurs PV max.${RETURN}${RETURN}

Place également un débuff ${DEBUFFS.TRUE_FEAR} pendant 1 tour si la cible est un Champion des Factions Rejetons Démoniaques, Morts-vivants ou Revenants Chevaliers.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +5%", "Soins +5%", "Dégâts +5%", "Soins +5%", "Dégâts +10%", "Soins +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Chant Angélique",
          description: `Retire tous les débuffs de tous les alliés, puis place un buff ${BUFFS.BLOCK_DEBUFFS} et un buff ${BUFFS.REVIVE_ON_DEATH} sur tous les alliés pendant 2 tours. Les buffs ${BUFFS.REVIVE_ON_DEATH} ne peuvent pas être retirés.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Hôte Paradisiaque",
          description: `Place un buff ${BUFFS.CRATE} de 30% et un buff ${BUFFS.CDAM} de 30% sur tous les alliés pendant 2 tours, puis s'associe avec tous les alliés pour attaquer une cible ennemie.${RETURN}
Réduit d'1 tour le temps de recharge de cette compétence si un ennemi est tué lors de cette attaque.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Gardien de Démons [P]",
          description: `Les alliés subissent 20% de dégâts en moins de la part des Champions des Factions Rejetons Démoniaques, Morts-vivants ou Revenants Chevaliers.${RETURN}${RETURN}

Dès qu'un allié attaque, ce Champion possède 15% de chances de faire équipe avec lui et de rejoindre l'attaque. Ce Champion attaquera avec sa compétence par défaut. Rejoint toujours les attaques de Sicia Languefeu si elle se trouve dans la même équipe.${RETURN}${RETURN}

Ne peut rejoindre une attaque alliée qu'une fois par tour. Cardiel ne s'associera pas à des attaques alliées lors d'une contre-attaque ou lorsqu'il fait équipe pour attaquer avec un autre Champion.`,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 650",
        "ATQ": "1 013",
        "DEF": "1 255",
        "VIT": "106",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 19%`,
};
