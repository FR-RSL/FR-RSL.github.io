const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Parasite",
          description: `Attaque 1 ennemi. Soigne ce Champion à hauteur de 30% des dégâts infligés.`,
          damage: "3.9*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tornade",
          description: `Place, pendant 2 tours, un buff d'${BUFFS.SPD} de 30% et un buff d'${BUFFS.CRATE} de 30% sur ce Champion et sur une cible alliée. Accorde un Tour Supplémentaire à ce Champion.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Plaies Ouvertes",
          description: `Attaque 1 ennemi. Place un débuff de ${DEBUFFS.HEALS} de 100% pendant 2 tours. Inflige 50% de dégâts supplémentaires contre les cibles disposant de buffs.`,
          damage: "6.6*ATQ",
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 835",
        "ATQ": "1 454",
        "DEF": "936",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Bénéficie d'une immunité contre les débuffs ${DEBUFFS.STUN}, ${DEBUFFS.GEL}, ${DEBUFFS.SLEEP}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.LOCK_ACTIVE}, ${DEBUFFS.LOCK_PASSIF}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.PETRIFICATION}, ${DEBUFFS.BERSERK}, ${DEBUFFS.UNFEEBLE}, [Annuler], ${DEBUFFS.TRAP}, ${DEBUFFS.FATIGUE} et ${DEBUFFS.HUNTER}. Bénéficie également d'une immunité contre les effets d'échange de PV et d'équilibrage des PV, ainsi que les effets augmentant les temps de recharge.`,
};
