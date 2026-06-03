const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Fendeur de Tête",
          description: `Attaque 1 ennemi. Attaque une fois tous les ennemis si la première attaque passe en critique.`,
          damage: "2.5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Charge en Avant",
          description: `Attaque tous les ennemis. Possède 30% de chances de placer un débuff d'${DEBUFFS.STUN} pendant 1 tour. Possède également 50% de chances de placer un débuff de ${DEBUFFS.PRE} de 50% pendant 2 tours.`,
          damage: "3.6*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Dégâts +15%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Scories en Fusion",
          description: `Attaque 2 fois tous les ennemis. Réduit de 25% le Compteur de Tours. Possède 30% de chances de placer un débuff de ${DEBUFFS.SPD} de 30% pendant 2 tours.`,
          damage: "1.9*ATQ",
          cooldown: 7,
          levelInfo: ["Dégâts +10%", "Dégâts +15%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 505",
        "ATQ": "1 575",
        "DEF": "837",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Bénéficie d'une immunité contre les débuffs ${DEBUFFS.STUN}, ${DEBUFFS.GEL}, ${DEBUFFS.SLEEP}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.LOCK_ACTIVE}, ${DEBUFFS.LOCK_PASSIF}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.PETRIFICATION}, ${DEBUFFS.BERSERK}, ${DEBUFFS.UNFEEBLE}, [Annuler], ${DEBUFFS.TRAP}, ${DEBUFFS.FATIGUE} et ${DEBUFFS.HUNTER}. Bénéficie également d'une immunité contre les effets d'échange de PV et d'équilibrage des PV, ainsi que les effets augmentant les temps de recharge.`,
};
