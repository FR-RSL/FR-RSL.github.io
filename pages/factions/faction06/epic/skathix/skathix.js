const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Varech de Jambe",
          description: `Attaque un ennemi. Possède 30% de chances de placer un débuff ${DEBUFFS.SPD} de 30% pendant 2 tours.`,
          damage: "4.2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Transfert d'Assaut",
          description: `Attaque tous les ennemis. Possède 75% de chances de voler 1 buff aléatoire à chaque ennemi.`,
          damage: "4.1*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Écailles des Âges",
          description: `Retire tous les débuffs de tous les alliés, puis place un buff ${BUFFS.BLOCK_DEBUFFS} et un ${BUFFS.SHIELD} sur tous les alliés pendant 2 tours. Le buff ${BUFFS.SHIELD} est équivalent à 20% des PV MAX de ce Champion.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Ultime Halètement [P]",
          description: `Place un buff ${BUFFS.BLOCK_DAMAGE} sur ce Champion pendant 1 tour lorsque ses PV tombent sous 30%.`,
          cooldown: 6,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 165",
        "ATQ": "1 035",
        "DEF": "1 057",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors de toutes les Batailles de 40`,
};
