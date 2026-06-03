const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Plaque de fer brute",
          description: `Attaque 2 fois un ennemi. Chaque frappe ignorera les buffs ${BUFFS.SHIELD}.`,
          damage: "1.85*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Affront",
          description: `Attaque tous les ennemis. Place un buff ${BUFFS.STRENGTHEN} de 25 % sur tous les alliés pendant 2 tours.`,
          damage: "3.9*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Capitaine des pillards",
          description: `Fais équipe avec 2 alliés aléatoires pour attaquer un seul ennemi. Les alliés rejoignant l'attaque utiliseront toujours leurs compétences par défaut.${RETURN}${RETURN}

Octroie un Tour supplémentaire si un ennemi est tué.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Teste cette force [P]",
          description: `Contre-attaque lorsqu'elle est frappée alors qu'elle bénéficie d'un buff ${BUFFS.STRENGTHEN} placé par cette Championne.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 165",
        "ATQ": "804",
        "DEF": "1 288",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
