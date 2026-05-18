const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lance de serenite",
          description: `Attaque un ennemi avec un allie aleatoire de la Faction des Argonites.
L'allie qui rejoint l'attaque utilisera sa competence par defaut.${RETURN}${RETURN}
Soigne tous les allies a hauteur de 10% des PV MAX de cette Championne.`,
          damage: "6*ATQ",
          levelInfo: ["Dégâts +10%", "Soins +10%", "Dégâts +10%", "Soins +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Cadeau de Thalass",
          description: `Retire tous les debuffs sur tous les allies et place un buff ${BUFFS.BLOCK_DEBUFFS} et un buff ${BUFFS.FERVEUR} sur tous les allies pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Renouveau glorieux",
          description: `Ranime tous les allies morts avec 50% de PV et 50% de Compteur de Tour.${RETURN}${RETURN}

Place un buff ${BUFFS.STRENGTHEN} de 25% et un buff ${BUFFS.SPD} de 30% sur tous les allies pendant 2 tours.`,
          cooldown: 7,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Bouclier des Argolades [P]",
          description: `Des qu'un allie recoit un debuff, place un buff ${BUFFS.SHIELD} d'1 tour sur cet allie, equivalent a 20% de ses PV MAX.${RETURN}${RETURN}
Remplit de 15% les Compteurs de Tour de tous les allies a la fin du tour de cette Championne.`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "21 810",
        "ATQ": "826",
        "DEF": "1 299",
        "VIT": "109",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "50",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RES des Allies lors de toutes les Batailles de 50.`
};
