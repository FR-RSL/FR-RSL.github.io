const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Entrée interdite !",
          description: `Attaque 3 fois un ennemi.${RETURN}${RETURN}

Chaque frappe a 75 % de chances de retirer un buff aléatoire à la cible.${RETURN}${RETURN}

Chaque frappe ignorera 20 % de la DÉF de la cible.`,
          damage: "HP*0.1",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Coup de géode",
          description: `Attaque tous les ennemis. Avant d'attaquer, place un buff ${BUFFS.PRE} de 50 % sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

A 75 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % et un débuff ${DEBUFFS.BLOCK_BUFFS} sur tous les ennemis pendant 2 tours.`,
          damage: "0.27*HP",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Frappe destructrice",
          description: `Attaque un ennemi. Avant d'attaquer, retire tous les débuffs sur ce Champion, puis place un buff ${BUFFS.SHATTER} de 15 % et un buff ${BUFFS.CDAM} de 30 % sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

Ignorera les buffs ${BUFFS.UNKILLABLE}, ${BUFFS.STONE_SKIN} et ${BUFFS.BLOCK_DAMAGE}. Si la cible ne se trouve pas sous buff ${BUFFS.UNKILLABLE}, ${BUFFS.STONE_SKIN} ou ${BUFFS.BLOCK_DAMAGE}, cette attaque infligera 100 % de dégâts en plus.${RETURN}${RETURN}

Accorde un Tour supplémentaire si cette attaque tue un ennemi.`,
          damage: "0.35*HP",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Visage de marbre [P]",
          description: `Au début du tour de ce Champion, retire les débuffs ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.STUN}, ${DEBUFFS.GEL}, ${DEBUFFS.SLEEP} et ${DEBUFFS.PETRIFICATION} sur ce Champion.${RETURN}${RETURN}

Augmente les dégâts infligés par ce Champion de 20 % contre les cibles ne bénéficiant d'aucun buff.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "24 780",
        "ATQ": "804",
        "DEF": "1 123",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Augmente la statistique TAUX DE C. des Alliés lors de toutes les Batailles de 20%`,
};
