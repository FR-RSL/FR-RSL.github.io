const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Série brisante",
          description: `Attaque 2 fois un ennemi. Possède 30 % de chances de répéter l'attaque.`,
          damage: "1.7*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Marche d'étain",
          description: `Attaque tous les ennemis. Réduit le Compteur de Tour de toutes les cibles de 30 %. Il est impossible de résister à cet effet.${RETURN}${RETURN}

Place un buff ${BUFFS.UNKILLABLE} sur ce Champion pendant 1 tour si cette attaque tue un ennemi.`,
          damage: "4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Ballet mortel",
          description: `Attaque un ennemi. Ignorera les buffs ${BUFFS.STRENGTHEN}, ${BUFFS.STONE_SKIN}, ${BUFFS.UNKILLABLE}, ${BUFFS.BLOCK_DAMAGE}, ${BUFFS.DEF}, ${BUFFS.ALLY_PROTECT} et ${BUFFS.SHIELD}.${RETURN}${RETURN}

Accorde un Tour supplémentaire si cette attaque tue un ennemi.`,
          damage: "5.7*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Craque carapace [P]",
          description: `Possède 50 % de chances que ce Champion ignore 50 % de la DÉF de la cible pour chaque frappe placée par les compétences de ce Champion.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "13 710",
        "ATQ": "1 608",
        "DEF": "1 057",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
