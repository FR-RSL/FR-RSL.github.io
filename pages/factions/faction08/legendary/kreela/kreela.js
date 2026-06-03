const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Barrière Lumisorcière",
          description: `Attaque un ennemi. Place, sur l'allié ayant les PV les plus bas, un buff ${BUFFS.SHIELD} équivalent à 10% des PV MAX de cette Championne pendant 2 tours.`,
          damage: "4.6*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Bouclier +5%", "Bouclier +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Lueur Aveuglante",
          description: `Attaque un ennemi. Place un débuff ${DEBUFFS.STUN} d'1 tour. Possède 80% de chances de faire équipe avec 3 alliés pris au hasard pour attaquer un ennemi choisi au hasard. Les alliés rejoignant l'attaque utiliseront leurs compétences par défaut.`,
          damage: "5.1*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Bizarrerie Guerrière",
          description: `Place un buff ${BUFFS.ATK} de 50% et un buff ${BUFFS.CRATE} de 30% sur tous les alliés pendant 3 tours, puis attaque tous les ennemis.`,
          damage: "4.4*ATQ",
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 680",
        "ATQ": "1 244",
        "DEF": "1 222",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
