const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Fente Fracassante",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Remplit le Compteur de Tour de ce Champion de 10 %. Remplit de 2 % supplémentaires pour chaque buff sur la cible.`,
          damage: "0.27*HP+1*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Hache Enchantée",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Ignorera 50 % de la DÉF de la cible.${RETURN}${RETURN}

Accorde un Tour supplémentaire si cette attaque tue un ennemi.`,
          damage: "0.3*HP+1.8*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Force Royale",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Ignorera les buffs ${BUFFS.SHIELD}, ${BUFFS.STRENGTHEN}, ${BUFFS.UNKILLABLE}, ${BUFFS.ALLY_PROTECT} et ${BUFFS.BLOCK_DAMAGE}.${RETURN}${RETURN}

Réduit le temps de recharge de la compétence [Hache enchantée] de 2 tours si cette attaque tue un ennemi.`,
          damage: "0.35*HP+1.8*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Habileté Fabuleuse [P]",
          description: `Augmente l'ATQ de ce Champion de 50 % chaque fois que ce Champion tue un ennemi. S'accumule jusqu'à 100 %.${RETURN}${RETURN}

Immunisé contre les débuffs ${DEBUFFS.ATK} et ${DEBUFFS.LOCK_ACTIVE}.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "31 050",
        "ATQ": "1 432",
        "DEF": "1 112",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "90",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 25%`,
};
