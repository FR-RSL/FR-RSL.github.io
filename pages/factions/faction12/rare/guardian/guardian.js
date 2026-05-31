const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Balafre de Vent",
          description: `Attaque tous les ennemis. Inflige 50 % de dégâts en moins contre les cibles ayant des buffs actifs.`,
          damage: "4.8*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Dernière Chance",
          description: `Place un buff d'${BUFFS.DEF} de 60 % et un buff d'${BUFFS.SPD} de 30 % sur ce Champion pendant 2 tours.`,
          damage: "ATQ+0.03*HP",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Immunité Toute-Puissante [P]",
          description: `Bénéficie d'une immunité contre les débuffs ${DEBUFFS.STUN}, ${DEBUFFS.GEL}, ${DEBUFFS.SLEEP}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.LOCK_ACTIVE}, ${DEBUFFS.LOCK_PASSIF}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.PETRIFICATION}, ${DEBUFFS.BERSERK}, ${DEBUFFS.UNFEEBLE}, [Annuler], ${DEBUFFS.TRAP}, ${DEBUFFS.FATIGUE} et ${DEBUFFS.HUNTER}. Bénéficie également d'une immunité contre les effets d'échange de PV et d'équilibrage des PV, ainsi que les effets augmentant les temps de recharge.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 155",
        "ATQ": "826",
        "DEF": "925",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors des Donjons de 27%`,
};
