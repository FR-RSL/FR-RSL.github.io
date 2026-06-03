const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Surcharge Psychique",
          description: `Attaque un ennemi. Possède 75 % de chances d'augmenter d'1 tour le temps de recharge d'une compétence choisie au hasard de la cible. Possède 25 % de chances de placer un débuff ${DEBUFFS.STUN} sur la cible pendant 1 tour si le temps de recharge d'une compétence est augmenté jusqu'au maximum.${RETURN}${RETURN}

Si l'augmentation du temps de recharge réussit, réduira également (d'1 tour) le temps de recharge d'une compétence aléatoire de l'allié qui a le Compteur de Tour le plus élevé et une compétence en recharge.`,
          damage: "3.2*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Furie du Drake",
          description: `Attaque 4 fois un ennemi.${RETURN}${RETURN}

La première frappe possède 75 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours. La deuxième frappe possède 75 % de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25 % pendant 2 tours. La troisième frappe possède 75 % de chances de placer un débuff ${DEBUFFS.SPD} de 30 % pendant 2 tours. La quatrième frappe possède 75 % de chances de placer un débuff ${DEBUFFS.BLOCK_BUFFS} pendant 2 tours.${RETURN}${RETURN}

Possède également 75 % de chances de placer un débuff ${DEBUFFS.TRUE_FEAR} sur tous les ennemis (sauf la cible initiale) pendant 1 tour si la cible a 4 débuffs ou plus après l'attaque.`,
          damage: "1.8*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Ailes Sanglantes",
          description: `Attaque tous les ennemis. Possède 80 % de chances de retirer tous les buffs de tous les ennemis avant d'attaquer.${RETURN}${RETURN}

Possède également 80 % de chances de placer un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 2 tours sur les ennemis qui ne disposent pas de compétences passives.${RETURN}${RETURN}

Possède également 80 % de chances de placer un débuff ${DEBUFFS.LOCK_PASSIF} pendant 2 tours sur les ennemis qui disposent de compétences passives.`,
          damage: "5*ATQ",
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Arrogance [P]",
          description: `Dès qu'un ennemi place un débuff ${DEBUFFS.STUN}, ${DEBUFFS.SLEEP}, ${DEBUFFS.GEL}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR} ou ${DEBUFFS.PROVOKE} sur ce Champion, remplira instantanément le Compteur de Tour de ce Champion de 30 % et placera un buff ${BUFFS.SPD} de 30 % et un buff ${BUFFS.SHIELD} sur lui pendant 2 tours. Le buff ${BUFFS.SHIELD} est équivalent à 30 % des PV MAX de ce Champion.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 690",
        "ATQ": "1 487",
        "DEF": "1 046",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 80`,
};
