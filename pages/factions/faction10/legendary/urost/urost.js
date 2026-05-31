const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Jointures Dentelées",
          description: `Attaque un ennemi. Place sur ce Champion un buff ${BUFFS.SHIELD} équivalent à 10 % des PV MAX de ce Champion pendant 2 tours. La valeur du ${BUFFS.SHIELD} augmente d'1 % pour chaque débuff ${DEBUFFS.POISON} dont est affligée la cible.`,
          damage: "0.22*HP",
          levelInfo: ["Dégâts +5%", "Bouclier +5%", "Dégâts +10%", "Bouclier +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Éruption Fétide",
          description: `Attaque tous les ennemis. Possède 75 % de chances de réduire de 15 % le Compteur de Tour des ennemis souffrant d'1 débuff ${DEBUFFS.POISON} ou plus. Possède également 75 % de chances de placer un débuff ${DEBUFFS.SPD} de 30 % pendant 2 tours sur les ennemis souffrant de 2 débuffs ${DEBUFFS.POISON} ou plus. Possède 75 % de chances de placer un débuff ${DEBUFFS.STUN} d'1 tour sur les ennemis souffrant de 3 débuffs ${DEBUFFS.POISON} ou plus.

[Active instantanément cette compétence lorsque ce Champion est ranimé par Rian l'Illusionniste.]`,
          damage: "0.24*HP",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Butin d'Âme",
          description: `Place, pendant 2 tours, un buff ${BUFFS.STRENGTHEN} de 25 % sur tous les alliés et un buff ${BUFFS.ALLY_PROTECT} de 50 % sur tous les alliés sauf ce Champion.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Appel de la Cage [P]",
          description: `Lorsque le Champion est attaqué, possède 50 % de chances de placer un débuff ${DEBUFFS.POISON} de 5 % sur l'assaillant pendant 2 tours. 

Lorsqu'un allié disposant d'un buff ${BUFFS.STRENGTHEN} se fait attaquer, possède 50 % de chances de placer un débuff ${DEBUFFS.PROVOKE} sur l'assaillant pendant 1 tour.

Augmente les PV MAX de ce Champion de 5 % dès qu'un ennemi subit des dégâts dus à un débuff ${DEBUFFS.POISON} placé par ce Champion.
Lorsqu'un ennemi subit des dégâts dus à un débuff ${DEBUFFS.POISON} placé par ce Champion, détruit également les PV MAX de cet ennemi de 5 %.

[Ne peut pas détruire les PV MAX d'un seul Champion de plus de 25 % lors d'une Bataille. Ne détruira pas les PV MAX d'un Boss. Ne peut pas augmenter les PV MAX de ce Champion de plus de 50 %.]`,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "24 450",
        "ATQ": "782",
        "DEF": "1 167",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors de toutes les Batailles de 80`,
};
