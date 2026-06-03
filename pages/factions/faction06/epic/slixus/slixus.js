const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Frappe harmonieuse",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 15 % de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour.`,
          damage: "1.85*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Lames d'irrévocabilité",
          description: `Attaque 2 fois un ennemi. Chaque frappe ignorera les buffs ${BUFFS.SHIELD}, ${BUFFS.DEF} et ${BUFFS.STRENGTHEN}.${RETURN}${RETURN}

Chaque frappe soigne également ce Champion à hauteur de 20 % des dégâts infligés.`,
          damage: "2.65*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Shuriken de dragon",
          description: `Attaque tous les ennemis. Avant d'attaquer, place un buff ${BUFFS.CRATE} de 30 % et un buff ${BUFFS.CDAM} de 30 % sur ce Champion pendant 2 tours.`,
          damage: "3.3*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Tueur sanctifié [P]",
          description: `Augmente les DÉG C. de ce Champion de 10 % chaque fois qu'il tue un ennemi (s'accumule jusqu'à 30 %). Ces accumulations ne se réinitialiseront pas après la mort.${RETURN}${RETURN}

Si la compétence Lames d'irrévocabilité de ce Champion tue un ennemi, la prochaine compétence qu'il utilise ignorera 30 % de la DÉF de la cible.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 535",
        "ATQ": "1 454",
        "DEF": "881",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors des batailles d'Arène de 28%`,
};
