const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lance ancestrale",
          description: `Attaque un ennemi. Possède 50% de chances d'augmenter de 2 tours le temps de recharge d'une compétence aléatoire de la cible. Ces chances passent à 100% si la cible possède 50% de PV ou moins.`,
          damage: "0.22*PV",
          levelInfo: ["Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Cavalcade",
          description: `Attaque tous les ennemis. Possède 75% de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 1 tour. Place également un buff ${BUFFS.BLOCK_DAMAGE} sur ce Champion pendant 1 tour.`,
          damage: "0.25*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Bouclier des Clans",
          description: `Place un buff ${BUFFS.RES} de 50% et un buff ${BUFFS.REFLECT_DAM} de 30% sur tous les alliés pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Déferlement musclé [P]",
          description: `La RÉS de ce Champion augmente de 50 lorsque ses compétences actives ne sont pas en cours de recharge.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 965",
        "ATQ": "870",
        "DEF": "1 178",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors de toutes les Batailles de 60`,
};
