const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hache de feu",
          description: `Attaque un ennemi. Possède 50 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours.${RETURN}${RETURN}

Possède également 100 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours si la cible est affligée d'un débuff ${DEBUFFS.BURN}.`,
          damage: "3.7*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Chaos futé",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.BURN} pendant 3 tours.${RETURN}${RETURN}

Possède 75 % de chances de placer un débuff ${DEBUFFS.STUN} d'1 tour sur les cibles ayant 50 % de Compteur de Tour ou moins.${RETURN}${RETURN}

Possède 75 % de chances de placer un débuff ${DEBUFFS.SPD} de 30 % pendant 3 tours sur les cibles ayant 50 % de Compteur de Tour ou moins.`,
          damage: "4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Regrets brûlants",
          description: `Attaque un ennemi. Augmente les dégâts de 40 % pour chaque débuff ${DEBUFFS.BURN} actif lors du combat (jusqu'à 400 %).${RETURN}
Possède également 75 % de chances de réduire le Compteur de Tour de la cible de 15 %. Réduit le Compteur de Tour de la cible de 15 % supplémentaires pour chaque débuff ${DEBUFFS.BURN} actif lors du combat.`,
          damage: "5.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Chaleur interne [P]",
          description: `Lorsqu'un allié reçoit un débuff ${DEBUFFS.GEL}, possède 50 % de chances de le remplacer par un débuff ${DEBUFFS.BURN} pendant 2 tours. Il est impossible de bloquer ou de retirer ce débuff.${RETURN}${RETURN}

Lorsqu'un allié ou un ennemi se trouve sous débuff ${DEBUFFS.BURN}, ce Champion est immunisé contre les débuffs ${DEBUFFS.STUN}, ${DEBUFFS.SLEEP}, ${DEBUFFS.GEL}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.PROVOKE} et ${DEBUFFS.PETRIFICATION}.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 020",
        "ATQ": "1 476",
        "DEF": "1 035",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
