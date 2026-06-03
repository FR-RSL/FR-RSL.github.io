const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Déferlement solaire",
          description: `Attaque tous les ennemis. Cette attaque est toujours critique si Noldua du Crépuscule se trouve dans la même équipe.${RETURN}${RETURN}

A 60% de chances de placer un débuff ${DEBUFFS.FATIGUE} sur tous les ennemis pendant 1 tour.${RETURN}${RETURN}

${PASSIVE}

A 80% de chances de contre-attaquer avec cette compétence dès qu'un ennemi obtient un Tour supplémentaire ou active un effet ${INSTANT}. A 15% de chances de contre-attaquer avec cette compétence dès qu'un ennemi voit son Compteur de Tour augmenté.`,
          damage: "2.5*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Force éclatante",
          description: `Attaque un ennemi. Cette attaque est toujours critique si Noldua du Crépuscule se trouve dans la même équipe. Ignorera 10% de la DÉF de la cible pour chaque buff dont bénéficie ce Champion.${RETURN}${RETURN}

Ce Champion est immunisé contre tous les débuffs si cette compétence n'est pas en temps de recharge. Dès qu'un ennemi essaie de placer un débuff sur ce Champion lorsque cette compétence n'est pas en temps de recharge, ce Champion reçoit au lieu de cela un buff aléatoire. Cet effet ne fonctionne pas contre les Boss.`,
          damage: "6*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rayonnement débridé",
          description: `Attaque un ennemi. Avant d'attaquer, vole tous les buffs et 100% du Compteur de Tour de la cible si elle ne se trouve pas sous buff ${BUFFS.STONE_SKIN}. Il est impossible de résister à cet effet. Cette attaque est toujours critique si Noldua du Crépuscule se trouve dans la même équipe. Ignorera les buffs ${BUFFS.STONE_SKIN}.${RETURN}${RETURN}

Ce Champion se voit infliger 75% de dégâts en moins lors des Tours supplémentaires ou ${INSTANT} de l'ennemi lorsque cette compétence n'est pas en temps de recharge.${RETURN}${RETURN}

Lorsque cette compétence est en temps de recharge, réduit d'1 tour le temps de recharge dès qu'un ennemi reçoit un Tour supplémentaire, bénéficie de l'activation d'un ${INSTANT} ou voit son Compteur de Tour augmenté. Se produit une fois par tour.`,
          damage: "6*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +20%"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Spécialiste du soleil [P]",
          description: `Dès qu'un ennemi reçoit un soin, a 100% de chances de réduire à zéro la quantité de soin reçue. Ce Champion recevra ce soin à la place. Si Noldua du Crépuscule se trouve dans la même équipe, les ennemis recevront au lieu de cela des dégâts équivalents à la quantité de soin. Cet effet ne fonctionne pas contre les Boss.${RETURN}${RETURN}

Une fois par tour, si ce Champion est mort, ranime ce Champion avec 100% de PV et 100% de Compteur de Tour lorsque le dernier allié vivant est tué. Ensuite, place un buff ${BUFFS.SHIELD_MAGMA} sur ce Champion pendant 2 tours. La valeur du ${BUFFS.SHIELD_MAGMA} est égale à 300% des PV MAX de ce Champion. Si Noldua du Crépuscule se trouve dans la même équipe, ce buff est protégé.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 700",
        "ATQ": "1 608",
        "DEF": "991",
        "VIT": "105",
        "TAUX C.": "1515%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 33%`,
};
