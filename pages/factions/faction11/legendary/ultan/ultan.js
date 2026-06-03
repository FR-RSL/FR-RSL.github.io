const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sous la peau",
          description: `Attaque 2 fois un ennemi. Chaque frappe a 50 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours. Chaque frappe ignorera également 50 % de la RÉS de la cible si Oella se trouve dans la même équipe.${RETURN}${RETURN}

Si la cible est sous buff ${BUFFS.DEF}, chaque frappe a 80 % de chances de le retirer. Il est impossible de résister à cet effet.`,
          damage: "1.6*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Inversion déferlante",
          description: `Retire tous les débuffs sur ce Champion et le soigne de 20 % de ses PV MAX. Soigne ce Champion de 20 % supplémentaires de ses PV MAX pour chaque débuff retiré.${RETURN}${RETURN}

Ensuite, place un buff ${BUFFS.SHIELD} sur ce Champion pendant 2 tours. La valeur du ${BUFFS.SHIELD} est proportionnelle à l'ATQ de ce Champion. La valeur du ${BUFFS.SHIELD} augmente également de 5 % pour chaque débuff retiré.${RETURN}${RETURN}

Enfin, attaque un ennemi. Ignorera les buffs ${BUFFS.SHIELD}. Les dégâts augmentent de 20 % pour chaque débuff retiré par cette compétence.`,
          damage: "5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Spores de sommeil",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Possède 100 % de chances de placer un débuff ${DEBUFFS.SLEEP} pendant 1 tour et un débuff ${DEBUFFS.SPD} de 30 % pendant 2 tours. Si Oella se trouve dans la même équipe, placera un débuff ${DEBUFFS.STUN} au lieu d'un débuff ${DEBUFFS.SLEEP} et ignorera 50 % de la RÉS de chaque cible.${RETURN}${RETURN}

Remplit le Compteur de Tour de ce Champion de 15 % dès qu'un débuff ${DEBUFFS.SLEEP} ou ${DEBUFFS.STUN} placé par cette compétence expire.${RETURN}${RETURN}

Si Oella se trouve dans la même équipe, accorde un Tour supplémentaire à ce Champion.`,
          damage: "4.1*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Métabolisme [P]",
          description: `Possède 15 % de chances de réduire d'1 tour le temps de recharge d'une des compétences de ce Champion chaque fois qu'il est soigné par un buff ${BUFFS.HEALS}. Les chances augmentent de 30 % si Oella se trouve dans la même équipe.`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "15 525",
        "ATQ": "1 553",
        "DEF": "991",
        "VIT": "101",
        "TAUX C.": "15%",
        "DEG C.": "63%",
        "RES": "30",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Allies lors de toutes les Batailles de 30%.`
};
