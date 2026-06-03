const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sombre Sphère",
          description: `Attaque tous les ennemis. Soigne ce Champion et tous les alliés à hauteur de 20% des dégâts infligés.`,
          damage: "2.8*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Soins +10%", "Dégâts +10%", "Soins +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Malveillance",
          description: `Retire tous les débuffs de tous les alliés. Place, pendant 2 tours, deux buffs de ${BUFFS.HEALS} de 15% sur tous les alliés. Place, pendant 2 tours, deux débuffs de ${DEBUFFS.POISON} de 5% sur tous les ennemis.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Harcèlement [P]",
          description: `Tous les alliés infligent 20% de dégâts supplémentaires contre les cibles souffrant de débuffs de ${DEBUFFS.POISON}.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 145",
        "ATQ": "1 079",
        "DEF": "1 156",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Bénéficie d'une immunité contre les débuffs ${DEBUFFS.STUN}, ${DEBUFFS.GEL}, ${DEBUFFS.SLEEP}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.LOCK_ACTIVE}, ${DEBUFFS.LOCK_PASSIF}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.PETRIFICATION}, ${DEBUFFS.BERSERK}, ${DEBUFFS.UNFEEBLE}, [Annuler], ${DEBUFFS.TRAP}, ${DEBUFFS.FATIGUE} et ${DEBUFFS.HUNTER}. Bénéficie également d'une immunité contre les effets d'échange de PV et d'équilibrage des PV, ainsi que les effets augmentant les temps de recharge.`,
};
