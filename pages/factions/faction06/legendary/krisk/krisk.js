const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Entre dans le Bourbier",
          description: `Attaque tous les ennemis. Offre 30 % de chances de placer un débuff de ${DEBUFFS.SPD} de 30 % pendant 2 tours.`,
          damage: "2*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Vigueur des Siècles",
          description: `Attaque tous les ennemis. Place, pendant 2 tours, un buff de ${BUFFS.ALLY_PROTECT} de 50 % sur tous les alliés sauf sur ce Champion. Place deux buffs de ${BUFFS.HEALS} de 15 % sur ce Champion pendant 1 tour. Augmente d'1 tour la durée de tous les buffs alliés.`,
          damage: "3*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Carcasse Invincible",
          description: `Place un débuff de ${DEBUFFS.PROVOKE} sur tous les ennemis pendant 1 tour.${RETURN}
Place un buff d'${BUFFS.DEF} de 60 % sur ce Champion pendant 2 tours. Place, pendant 2 tours, un buff d'${BUFFS.SPD} de 30 % sur tous les alliés, sauf sur ce Champion.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Puissance des Âges [P]",
          description: `Au début de chaque round, place sur tous les alliés un buff de ${BUFFS.SHIELD} équivalent à 50 % des PV MAX de ce Champion pendant 2 tours. Lorsque le héros se fait frapper, possède 75 % de chances de placer, pendant 1 tour, un débuff de ${DEBUFFS.DEF} de 60 % et un débuff de ${DEBUFFS.ATK} de 50 % sur l'assaillant.`,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 485",
        "ATQ": "760",
        "DEF": "1 520",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = null;
