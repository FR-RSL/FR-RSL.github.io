const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Mugissement",
          description: `Attaque un ennemi. Possède 25% de chances de porter un coup supplémentaire.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Griffes Effroyables",
          description: `Attaque 2 fois tous les ennemis. Chaque frappe possède 20% de chances de placer un débuff d'${DEBUFFS.STUN} pendant 1 tour.`,
          damage: "2*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +15%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Déchiqueter",
          description: `Attaque 4 fois au hasard. Chaque frappe possède 50% de chances de placer un débuff de ${DEBUFFS.DEF} de 60% pendant 2 tours.`,
          damage: "1.8*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Temps de recharge -1", "Chances de Buff/Debuff +25%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 680",
        "ATQ": "1 443",
        "DEF": "1 024",
        "VIT": "106",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Bénéficie d'une immunité contre les débuffs ${DEBUFFS.STUN}, ${DEBUFFS.GEL}, ${DEBUFFS.SLEEP}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.LOCK_ACTIVE}, ${DEBUFFS.LOCK_PASSIF}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.PETRIFICATION}, ${DEBUFFS.BERSERK}, ${DEBUFFS.UNFEEBLE}, [Annuler], ${DEBUFFS.TRAP}, ${DEBUFFS.FATIGUE} et ${DEBUFFS.HUNTER}. Bénéficie également d'une immunité contre les effets d'échange de PV et d'équilibrage des PV, ainsi que les effets augmentant les temps de recharge.`,
};
