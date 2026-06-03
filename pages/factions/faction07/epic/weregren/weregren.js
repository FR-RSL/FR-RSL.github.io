const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bond bestial",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 30% de chances de voler un buff aléatoire.`,
          damage: "2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Assaut de terreur",
          description: `Attaque 3 fois un ennemi. Chaque frappe ignorera les buffs ${BUFFS.SHIELD}.${RETURN}${RETURN}

Place un débuff ${DEBUFFS.TRUE_FEAR} sur tous les ennemis pendant 1 tour si cette attaque tue un ennemi. Place également un buff ${BUFFS.UNKILLABLE} sur ce Champion pendant 1 tour si cette attaque tue un ennemi.`,
          damage: "2*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Festin de vitalité",
          description: `Échange les PV avec un ennemi, puis accorde un Tour supplémentaire.`,
          cooldown: 7,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Chasser les faibles [P]",
          description: `Inflige 30% de dégâts en plus contre les cibles dont les PV actuels sont inférieurs à ceux de ce Champion.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 690",
        "ATQ": "1 421",
        "DEF": "837",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
