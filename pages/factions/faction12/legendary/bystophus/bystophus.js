const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Horreur",
          description: `Attaque un ennemi. Possède 50 % de chances de placer un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 1 tour.`,
          damage: "3.3*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +15%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Frappe Fantôme",
          description: `Attaque tous les ennemis. Inflige un coup critique contre les cibles sous débuffs ${DEBUFFS.LOCK_ACTIVE}. Soigne à hauteur de 20 % des dégâts infligés.`,
          damage: "3.2*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1", "Dégâts +20%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Émietter",
          description: `Attaque 4 fois au hasard. Chaque frappe possède 50 % de chances de placer un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 2 tours. Chaque frappe possède également 50 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours.`,
          damage: "3.2*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 700",
        "ATQ": "1 795",
        "DEF": "804",
        "VIT": "100",
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
