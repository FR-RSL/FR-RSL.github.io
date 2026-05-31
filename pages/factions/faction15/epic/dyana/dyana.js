const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hachette luciole",
          description: `Attaque 2 fois un ennemi. Chaque frappe a 25 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours.`,
          damage: "1.85*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +15%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Embuscade au clair de lune",
          description: `Fait équipe avec 2 alliés aléatoires pour attaquer un seul ennemi. Les alliés qui rejoignent l'attaque utiliseront leurs compétences par défaut. 

Si la cible se trouve sous débuff ${DEBUFFS.DEF}, ces attaques ignoreront 20 % de la DÉF de la cible.`,
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +15%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Blitz secret",
          description: `Attaque tous les ennemis. Avant d'attaquer, place un buff ${BUFFS.CRATE} de 30 % et un buff ${BUFFS.CDAM} de 30 % sur cette Championne pendant 2 tours. 

Si cette attaque tue un ennemi, place un buff ${BUFFS.VEIL} sur tous les alliés pendant 1 tour.`,
          damage: "3.75*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Perce-pénombre [P]",
          description: `Cette Championne ignorera les buffs ${BUFFS.SHIELD} et ${BUFFS.STRENGTHEN} lorsqu'elle attaque en bénéficiant d'un buff ${BUFFS.ATK}, ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 525",
        "ATQ": "1 421",
        "DEF": "848",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 20%`,
};
