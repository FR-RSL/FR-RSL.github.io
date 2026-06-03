const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Coup double",
          description: `Attaque 2 fois un ennemi. La première frappe possède 30% de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25% pendant 2 tours. La seconde frappe possède 30% de chances de placer un débuff ${DEBUFFS.LEECH} pendant 2 tours.`,
          damage: "1.8*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Explosion de vigueur",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Retire 1 débuff aléatoire sur tous les alliés avant d'attaquer. Les dégâts augmentent de 5% pour chaque débuff retiré.`,
          damage: "3.9*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Mur de muscles",
          description: `Place un buff ${BUFFS.ALLY_PROTECT} de 50% sur tous les alliés sauf ce Champion pendant 2 tours.${RETURN}${RETURN}

Place un buff ${BUFFS.DEF} de 60% sur ce Champion pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Ignorer [P]",
          description: `Lorsque ce Champion se fait attaquer, possède 20% de chances de réduire d'1 tour la durée de tous les débuffs sur ce Champion.`,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 330",
        "ATQ": "749",
        "DEF": "1 332",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
