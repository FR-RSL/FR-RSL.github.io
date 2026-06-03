const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Corne-marteau",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Transfère un débuff aléatoire de ce Champion sur la cible.${RETURN}${RETURN}

Soigne ce Champion à hauteur de 10 % de ses PV MAX.`,
          damage: "0.24*PV",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Charge grondante",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

A 75 % de chances de retirer 2 buffs aléatoires sur tous les ennemis.${RETURN}${RETURN}

Soigne ce Champion de 10 % de ses PV MAX pour chaque buffs retiré par cette compétence.`,
          damage: "0.25*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Porte-bonheur",
          description: `Retire 1 débuff aléatoire à tous les alliés.${RETURN}${RETURN}

Soigne tous les alliés de 20 % des PV MAX de ce Champion et place un buff ${BUFFS.BLOCK_DEBUFFS} sur tous les alliés pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Âme charitable [P]",
          description: `Dès que ce Champion se soigne à l'aide d'une de ses compétences, soigne également tous les alliés de 20 % des soins en surplus.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 980",
        "ATQ": "705",
        "DEF": "1 266",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors de toutes les Batailles de 40`,
};
