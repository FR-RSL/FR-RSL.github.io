const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Double-entaille",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 35 % de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 1 tour. Lors d'une contre-attaque, les chances augmentent jusqu'à 50 %.`,
          damage: "1.8*DEF",
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Entrave",
          description: `Attaque tous les ennemis. Avant d'attaquer, possède 75 % de chances de réduire d'1 tour la durée de tous les buffs ennemis. 

Possède 75 % de chances de placer un débuff ${DEBUFFS.SPD} de 30 % pendant 2 tours.`,
          damage: "3.8*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Parfait stratagème",
          description: `Place un buff ${BUFFS.ALLY_PROTECT} de 50 % sur tous les alliés sauf ce Champion pendant 2 tours et place un buff ${BUFFS.DEF} de 60 % sur tous les alliés pendant 2 tours. 

Place également un buff ${BUFFS.COUNTER} sur ce Champion pendant 2 tours. Ensuite, place un buff ${BUFFS.SHIELD} sur ce Champion pendant 2 tours. La valeur du ${BUFFS.SHIELD} est proportionnelle à la DÉF de ce Champion.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Protéger les troupes [P]",
          description: `Dès que ce Champion se fait attaquer, il se soigne de 1 % par tranche de 500 DÉF qu'il possède. 

Soigne tous les autres alliés sous buffs ${BUFFS.ALLY_PROTECT} placés par ce Champion de 30 % du soin initial de cette compétence.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 485",
        "ATQ": "760",
        "DEF": "1 520",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 60`,
};
