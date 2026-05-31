const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Paré de Bijoux",
          description: `Attaque un ennemi. Possède 35 % de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour. Les chances augmentent de 15 % pour chaque débuff dont est affligée la cible.`,
          damage: "5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Ancien Honoré",
          description: `Retire tous les débuffs ${DEBUFFS.PROVOKE} et un débuff aléatoire sur tous les alliés. Place un buff ${BUFFS.DEF} de 60 % sur tous les alliés pendant 2 tours. Place également sur tous les alliés un buff ${BUFFS.SHIELD} équivalent à 20 % des PV MAX de ce Champion pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Bouclier +5%", "Bouclier +5%", "Bouclier +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Fouler aux Pieds",
          description: `Attaque tous les ennemis. Retire 1 buff aléatoire à chaque ennemi. Possède 75 % de chances de retirer 2 buffs aléatoires à chaque ennemi. Possède également 75 % de chances de placer un débuff ${DEBUFFS.HEALS} de 100 % et un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours.`,
          damage: "4.85*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +20%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Saurien Stoïque [P]",
          description: `Immunisé contre les débuffs ${DEBUFFS.PROVOKE}. Remplit de 20 % le Compteur de Tour de ce Champion chaque fois qu'un ennemi essaie de placer un débuff ${DEBUFFS.PROVOKE} sur ce Champion.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 140",
        "ATQ": "914",
        "DEF": "1 189",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors de toutes les Batailles de 55`,
};
