const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Gêneur de légendes",
          description: `Attaque un ennemi. Possède 30% de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 1 tour. Ces chances passent à 55% contre les Champions Légendaires.`,
          damage: "3.5*DEF",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Faits comme un rat",
          description: `Attaque tous les ennemis. Possède 80% de chances de placer un débuff ${DEBUFFS.ATK} de 50% pendant 2 tours. Possède également 80% de chances de placer un débuff ${DEBUFFS.FEAR} pendant 1 tour sur chaque Champion Légendaire.`,
          damage: "4*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Mettez-vous à l'aise",
          description: `Place un buff ${BUFFS.SHIELD} et un buff ${BUFFS.HEALS} de 15% sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

La valeur du buff ${BUFFS.SHIELD} est proportionnelle à la DÉF de ce Champion.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Dédaigne la mort [P]",
          description: `Dès qu'un allié se fait attaquer, possède 100% de chances de totalement bloquer un coup, réduisant les dégâts en approche à zéro. Ce Champion recevra ces dégâts à sa place. Tous les débuffs de la frappe seront également redirigés sur ce Champion. Les chances de bloquer une frappe et de rediriger les débuffs sont réduites à 50% si l'assaillant est un Boss. Ne fonctionne pas si l'attaque sur l'allié était une attaque de zone.${RETURN}${RETURN}

Dès qu'un ennemi est soigné, soigne ce Champion de 20% de ce soin.`,
          isPassive: true
        },
        {
          img: "assets/passif1.webp",
          name: "Pas besoin d'eux [P]",
          description: `Augmente les PV, la DÉF et la VIT de ce Champion de 10% pour chaque allié mort.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 640",
        "ATQ": "782",
        "DEF": "1 421",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 30%`,
};
