const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Coup triomphal",
          description: `Attaque un ennemi. 

A 75 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % pendant 2 tours. Il est impossible de résister à ce débuff et de le bloquer si la cible se trouve sous débuff ${DEBUFFS.BURN}.`,
          damage: "0.25*PV",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +15%", "Chances de Buff/Debuff +15%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Fléau de Gorgoa",
          description: `Attaque un ennemi. 

Ignorera 50 % de la DÉF de la cible si la cible est affligée d'un débuff ${DEBUFFS.BURN}. Les dégâts infligés par cette compétence augmentent de 10 % pour chaque tour restant sur les débuffs dont sont affligés ce Champion et la cible (s'accumule jusqu'à 200 %). 

Si les dégâts infligés par cette compétence sont inférieurs à 50 % des PV MAX de la cible, vole tous les buffs de la cible et place un débuff ${DEBUFFS.STUN} pendant 2 tours. Il est impossible de résister à ces effets si la cible se trouve sous débuff ${DEBUFFS.BURN}.`,
          damage: "0.4*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Butin du vainqueur",
          description: `${ACTIVE}

Place un buff ${BUFFS.ATK} de 50 % et un buff ${BUFFS.SHIELD_MAGMA} sur tous les alliés pendant 2 tours. La valeur du ${BUFFS.SHIELD_MAGMA} est égale à 30 % des PV MAX de ce Champion. 

Place également un buff ${BUFFS.TAUNT} sur ce Champion pendant 2 tours.

${PASSIVE}

Réduit de 20 % les dégâts que reçoivent tous les alliés lorsque ce Champion ne se trouve pas sous débuff ${DEBUFFS.DEF}.`,
          cooldown: 4,
          levelInfo: ["Bouclier +10%", "Bouclier +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Maître des Jeux [P]",
          description: `Ce Champion est immunisé contre les débuffs ${DEBUFFS.STUN}, ${DEBUFFS.BURN} et ${DEBUFFS.PETRIFICATION}. 

Dès qu'un ennemi attaque ce Champion, a 100 % de chances de placer un débuff ${DEBUFFS.BURN} sur cet ennemi pendant 2 tours. Les chances passent à 50 % si ce Champion se trouve sous débuff ${DEBUFFS.DEF}. Se produit une fois par compétence ennemie. 

Dès qu'un ennemi attaque ce Champion, a également 50 % de chances de placer un débuff ${DEBUFFS.PETRIFICATION} sur cet ennemi pendant 1 tour. Les chances passent à 25 % si ce Champion se trouve sous débuff ${DEBUFFS.DEF}. Se produit une fois par compétence ennemie.`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "22 800",
        "ATQ": "749",
        "DEF": "1 310",
        "VIT": "97",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "50",
        "PRE": "10"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RES des Allies lors de toutes les Batailles de 60.`
};
