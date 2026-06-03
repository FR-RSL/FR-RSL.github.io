const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hache d'Hiver Total",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 40 % de chances de placer un débuff ${DEBUFFS.GEL} pendant 1 tour.${RETURN}${RETURN}

Ignorera 25 % de la DÉF de la cible contre les cibles sous débuffs ${DEBUFFS.GEL}.`,
          damage: "1.8*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Chevauche-Blizzard",
          description: `Attaque un ennemi. Possède 75 % de chances de placer un débuff ${DEBUFFS.SPD} de 30 % pendant 3 tours et 75 % de chances de placer un débuff ${DEBUFFS.GEL} pendant 1 tour.${RETURN}${RETURN}
 
Vole également 100 % du Compteur de Tour de la cible et place un buff ${BUFFS.SPD} de 30 % sur ce Champion pendant 3 tours.${RETURN}${RETURN}

Ignorera 50 % de la DÉF de la cible contre les cibles sous débuffs ${DEBUFFS.GEL}.`,
          damage: "6*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Givrer",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.GEL} pendant 1 tour. Ces chances passent à 100 % contre les cibles dont le Compteur de Tour est rempli à 75 % ou plus. Les cibles dont le Compteur de Tour est rempli à 75 % ou plus ne peuvent pas résister à ce débuff.`,
          damage: "3.8*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Seigneur de Glace [P]",
          description: `${PASSIVE}
 
Augmente les dégâts qu'inflige ce Champion de 10 % pour chaque Champion en combat sous débuff ${DEBUFFS.GEL}.${RETURN}${RETURN}

Réduit également les dégâts reçus par ce Champion de 10 % pour chaque Champion en combat sous débuff ${DEBUFFS.GEL}.${RETURN}${RETURN}

${ACTIVE}
 
Place un buff ${BUFFS.UNKILLABLE} sur ce Champion pendant 1 tour dès qu'il tue un ennemi sous débuff ${DEBUFFS.GEL}.`,
          cooldown: 3,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 350",
        "ATQ": "1 597",
        "DEF": "892",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 33%`,
};
