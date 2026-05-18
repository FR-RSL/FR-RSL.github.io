const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Ruee du vent d'ouest",
          description: `Attaque 3 fois un ennemi. Attaque 6 fois un ennemi si cette Championne a 50% de PV ou moins.${RETURN}${RETURN}
Chaque frappe vole 7.5% du Compteur de Tour de l'ennemi. Il est impossible de resister a cet effet si cette Championne se trouve sous un buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}.`,
          damage: "1.35*ATQ",
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Lance de Leonidas",
          description: `Attaque un ennemi. Avant d'attaquer, place un debuff ${DEBUFFS.DEF} de 60% et un debuff ${DEBUFFS.BURN} sur la cible pendant 3 tours.${RETURN}${RETURN}
Place un debuff ${DEBUFFS.STUN} sur tous les ennemis pendant 1 tour si les degats infliges par cette competence sont superieurs a 50% des PV MAX de la cible.${RETURN}${RETURN}
Il est impossible de resister aux effets de cette Competence si cette Championne se trouve sous buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}.`,
          damage: "6.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Grace d'Isu",
          description: `Retire tous les debuffs sur cette Championne, la soigne de 50% de ses PV MAX et remplit de 50% son Compteur de Tour.${RETURN}${RETURN}
Place un buff ${BUFFS.ATK} de 50%, un buff ${BUFFS.SHATTER} de 15% et un buff ${BUFFS.SPD} de 30% sur cette Championne pendant 2 tours.${RETURN}${RETURN}${PASSIVE}
Empeche la mort de cette Championne et la garde en vie avec 1 PV si elle se trouve sous buff ${BUFFS.ATK}, ${BUFFS.SHATTER} et ${BUFFS.SPD}.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Tout est permis [P]",
          description: `Des que les PV d'un ennemi tombent sous 25% apres qu'il a recu des degats de n'importe quel Assassin, il recoit des degats bonus supplementaires egaux a 200% de l'ATQ de cette Championne.${RETURN}
Ces degats bonus ignoreront 100% de la DEF de la cible et ne peuvent pas etre critiques.`,
          isPassive: true,
        },
        {
          img: "assets/sort5.webp",
          name: "Sang de Sparte [P]",
          description: `Des que cette Championne attaque un ennemi, augmente l'ATQ de cette Championne d'une quantite egale a 50% de la DEF de la cible.${RETURN}${RETURN}
Des qu'un ennemi attaque cette Championne, augmente la DEF de cette Championne d'une quantite egale a 50% de l'ATQ de l'assaillant.`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "16 350",
        "ATQ": "1 343",
        "DEF": "1 145",
        "VIT": "101",
        "TAUX C.": "15%",
        "DEG C.": "63%",
        "RES": "30",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Allies lors de toutes les Batailles de 19%.`
};
