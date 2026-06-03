const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Plongeon d'aigle",
          description: `Attaque un ennemi.${RETURN}${RETURN}

A 75 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours. Il est impossible de résister à ce débuff si ce Champion se trouve sous un buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Plan de De Vinci",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

A 75 % de chances de placer deux débuffs ${DEBUFFS.POISON} de 5 % et un débuff ${DEBUFFS.POISON_S} de 25 % sur tous les ennemis pendant 2 tours. Il est impossible de résister à ces effets si ce Champion se trouve sous buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}. Active instantanément tous les débuffs ${DEBUFFS.POISON} sur les ennemis affligés de 4 débuffs ou plus.${RETURN}${RETURN}

Si des ennemis se trouvent sous buff ${BUFFS.STONE_SKIN}, a au lieu de cela 75 % de chances de placer 2 débuffs ${DEBUFFS.BOMB} qui explosent sur eux après 2 tours. Il est impossible de résister à ces effets si ce Champion se trouve sous buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}. Si tous les ennemis se trouvent sous buff ${BUFFS.STONE_SKIN}, réduit d'1 tour le compte à rebours de détonation de chaque débuff ${DEBUFFS.BOMB}.`,
          damage: "4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Pistolet secret",
          description: `Attaque un ennemi. Avant d'attaquer, vole tous les buffs de la cible. Il est impossible de résister à cet effet si ce Champion se trouve sous un buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}.${RETURN}${RETURN}

Ignorera 35 % de la DÉF de la cible, ainsi que les buffs ${BUFFS.SHIELD} et ${BUFFS.STRENGTHEN}.`,
          damage: "5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Tout est permis [P]",
          description: `Dès que les PV d'un ennemi tombent sous 25 % après qu'il a reçu des dégâts de n'importe quel Assassin, il reçoit des dégâts bonus supplémentaires proportionnels à l'ATQ de ce Champion ou cette Championne. Ces dégâts bonus ignoreront 100 % de la DÉF de la cible et ne peuvent pas être critiques.`,
          isPassive: true
        },
        {
          img: "assets/passif1.webp",
          name: "Synchronisation totale [P]",
          description: `Au début de chaque round, place un buff ${BUFFS.PERFECT_VEIL} sur ce Champion pendant 2 tours.${RETURN}${RETURN}

Dès que ce Champion est sur le point de recevoir des dégâts qui dépasseraient 50 % de ses PV MAX, a au lieu de cela 35 % de chances de réduire les dégâts reçus à 0.${RETURN}${RETURN}

Dès que ce Champion est attaqué, a également 35 % de chances de contre-attaquer.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 020",
        "ATQ": "1 498",
        "DEF": "1 013",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 19%`,
};
