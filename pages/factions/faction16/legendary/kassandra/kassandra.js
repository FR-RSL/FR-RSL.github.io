const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Ruée du vent d'ouest",
          description: `Attaque 3 fois un ennemi. Attaque 6 fois un ennemi si cette Championne a 50% de PV ou moins.${RETURN}${RETURN}

Chaque frappe réduit de 7,5% le Compteur de Tour de l'ennemi et augmente de 7,5% le Compteur de Tour de cette Championne. Il est impossible de résister à cet effet si cette Championne se trouve sous un buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}.`,
          damage: "1.35*ATQ",
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Lance de Léonidas",
          description: `Attaque un ennemi. Avant d'attaquer, place un débuff ${DEBUFFS.DEF} de 60% et un débuff ${DEBUFFS.BURN}sur la cible pendant 3 tours. Il est impossible de résister à ces effets si cette Championne se trouve sous buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}.${RETURN}${RETURN}

Place un débuff ${DEBUFFS.STUN} sur tous les ennemis pendant 1 tour si les dégâts infligés par cette compétence sont supérieurs à 50% des PV MAX de la cible. Il est impossible de résister à ce débuff si cette Championne se trouve sous un buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}.`,
          damage: "6.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Grâce d'Isu",
          description: `Retire tous les débuffs sur cette Championne, la soigne de 50% de ses PV MAX et remplit de 50% son Compteur de Tour.${RETURN}${RETURN}

Place un buff ${BUFFS.ATK} de 50%, un buff ${BUFFS.SHATTER} de 15% et un buff ${BUFFS.SPD} de 30% sur cette Championne pendant 2 tours.${RETURN}${RETURN}

${PASSIVE}

Empêche la mort de cette Championne et la garde en vie avec 1 PV si elle se trouve sous buff ${BUFFS.ATK}, ${BUFFS.SHATTER} et ${BUFFS.SPD}.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Tout est permis [P]",
          description: `Dès que les PV d'un ennemi tombent sous 25% après qu'il a reçu des dégâts de n'importe quel Assassin, il reçoit des dégâts bonus supplémentaires proportionnels à l'ATQ de ce Champion ou cette Championne. Ces dégâts bonus ignoreront 100% de la DÉF de la cible et ne peuvent pas être critiques.`,
          isPassive: true,
        },
        {
          img: "assets/sort5.webp",
          name: "Sang de Sparte [P]",
          description: `Dès que cette Championne attaque un ennemi, augmente l'ATQ de cette Championne d'une quantité égale à 50% de la DÉF de la cible. Dès qu'un ennemi attaque cette Championne, augmente la DÉF de cette Championne d'une quantité égale à 50% de l'ATQ de l'assaillant.`,
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
