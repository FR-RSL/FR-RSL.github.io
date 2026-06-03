const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Froid Glacial",
          description: `Attaque un ennemi. Possède 30% de chances de placer un débuff de ${DEBUFFS.GEL} pendant 1 tour. Les dégâts infligés sont proportionnels à la DÉF.`,
          damage: "1*DEF",
          levelInfo: ["Dégâts +15%", "Dégâts +15%", "Soins +10%", "Soins +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Maraudeur",
          description: `Attaque tous les ennemis. Place un débuff de ${DEBUFFS.PROVOKE} de 2 tours sur tous les ennemis. Place un buff de ${BUFFS.COUNTER} sur ce Champion pendant 2 tours.`,
          damage: "4.3*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +20%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Immobile [P]",
          description: `Place, pendant 2 tours, un buff d'${BUFFS.CRATE} de 30% sur ce Champion, puis attaque un ennemi. Si la cible souffre d'un débuff de ${DEBUFFS.GEL}, attaque tous les ennemis et retire le débuff de ${DEBUFFS.GEL} sur la cible initiale. Les dégâts infligés sont proportionnels à la DÉF.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 990",
        "ATQ": "848",
        "DEF": "1 465",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Bénéficie d'une immunité contre les débuffs ${DEBUFFS.STUN}, ${DEBUFFS.GEL}, ${DEBUFFS.SLEEP}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.LOCK_ACTIVE}, ${DEBUFFS.LOCK_PASSIF}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.PETRIFICATION}, ${DEBUFFS.BERSERK}, ${DEBUFFS.UNFEEBLE}, [Annuler], ${DEBUFFS.TRAP}, ${DEBUFFS.FATIGUE} et ${DEBUFFS.HUNTER}. Bénéficie également d'une immunité contre les effets d'échange de PV et d'équilibrage des PV, ainsi que les effets augmentant les temps de recharge.`,
};
