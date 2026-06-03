const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Zéphyr de conquête",
          description: `Attaque tous les ennemis. Possède 50 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % pendant 2 tours.`,
          damage: "2.7*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Règne de terreur",
          description: `Possède 75 % de chances de placer un débuff ${DEBUFFS.BLOCK_BUFFS} et un débuff ${DEBUFFS.TRUE_FEAR} sur tous les ennemis pendant 2 tours.${RETURN}${RETURN}

Si la cible est un Boss, possède au lieu de ça 75 % de chances de lui infliger un débuff |Blocage des Buffs] et un débuff ${DEBUFFS.SPD} de 30 %.`,
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Icône de domination",
          description: `Retire tous les débuffs sur un seul allié (sauf cette Championne) et lui accorde 2 piles d'${BUFFS.INTERCEPT}.${RETURN}${RETURN}

Remplit également le Compteur de Tour de l'allié ciblé de 50 % et réinitialise les temps de recharge de toutes ses compétences.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Manifeste d'autorité [P]",
          description: `Cette Championne est immunisée contre les débuffs ${DEBUFFS.SHEEP}.${RETURN}${RETURN}

Chaque débuff placé par cette Championne réduit le Compteur de Tour d'une cible de 5 %, et réduit de façon permanente sa RÉS et sa PRÉ de 10 points (s'accumule jusqu'à 100).`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 805",
        "ATQ": "936",
        "DEF": "1 255",
        "VIT": "115",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 24%`,
};
