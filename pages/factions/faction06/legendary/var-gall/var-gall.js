const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Joyeux Arrachage",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

Chaque frappe remplit le Compteur de Tour de ce Champion de 5%.${RETURN}
A 30% de chances de répéter l'attaque.${RETURN}${RETURN}

Chaque frappe place un débuff ${DEBUFFS.HEALS} de 100% sur la cible pendant 2 tours. Il est impossible de résister à ce débuff s'il y au moins 1 Champion allié de la Faction des Hommes Lézards dans ton équipe.`,
          damage: "1.35*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Revendication de Crâne",
          description: `Possède 75% de chances de placer un débuff ${DEBUFFS.PROVOKE} d'1 tour sur la cible ennemie. Il est impossible de résister à ce débuff s'il y au moins 1 Champion allié de la Faction des Hommes Lézards dans ton équipe.${RETURN}${RETURN}

Place un buff ${BUFFS.STRENGTHEN} de 25% sur tous les alliés pendant 2 tours.`,
          cooldown: 3,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Étreinte Abyssale",
          description: `Attaque tous les ennemis. Possède 75% de chances de placer un débuff ${DEBUFFS.ATK} de 50% pendant 2 tours.${RETURN}${RETURN}

Il est impossible de résister à ce débuff s'il y au moins 1 Champion allié de la Faction des Hommes Lézards dans ton équipe.`,
          damage: "3.85*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Ennemi Terrifiant [P]",
          description: `Lorsque ce Champion est attaqué, détruit les PV MAX de l'assaillant de 5%. Détruit au contraire les PV MAX des Boss de 2,5% (sauf le Roi Scarabée, dont les PV MAX seront détruits de 5%). Ne peut pas Détruire les PV MAX d'un seul ennemi de plus de 50%. Ne se produit qu'une fois par attaque.${RETURN}${RETURN}

Possède 50% de chances de placer un débuff ${DEBUFFS.TRUE_FEAR} sur les cibles dont des PV MAX ont été détruits.`,
          isPassive: true
        },
        {
          img: "assets/passif1.webp",
          name: "Couvée Crânienne [P]",
          description: `Au début du tour de ce Champion, ranime un allié aléatoire de la Faction des Hommes Lézards avec 50% de PV et 50% de Compteur de Tour.`,
          cooldown: 3,
          isPassive: true
        }
      ],
  stats: {
        "PV": "27 420",
        "ATQ": "1 112",
        "DEF": "1 310",
        "VIT": "107",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "90",
        "PRÉ": "70"
      },
};

const aura = null;
