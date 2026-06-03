const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Destructeur de blocus",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

Après la seconde frappe, soigne tous tes alliés à hauteur de 5 % des PV MAX de ce Champion.${RETURN}${RETURN}

Possède également 10 % de chances d'accorder un Tour supplémentaire.`,
          damage: "0.15*PV",
          levelInfo: ["Dégâts +10%", "Soins +10%", "Soins +10%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Force de fracture",
          description: `Attaque un ennemi. Possède 80 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours.${RETURN}${RETURN}

Après avoir attaqué la cible initiale, attaque tous les autres ennemis. Possède 80 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours.`,
          damage: "0.5*PVMultiplier: 0.3*PV",
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Marteau d'Onungburg",
          description: `Attaque 2 fois tous les ennemis. Chaque frappe a 100 % de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour.`,
          damage: "0.15*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Icône de rébellion [P]",
          description: `Lorsqu'un allié utilise une compétence à frappes multiples, chaque frappe consécutive après la première inflige 15 % de dégâts supplémentaires.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 140",
        "ATQ": "980",
        "DEF": "1 123",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/sup-speed.webp",
  description: `Augmente la statistique VIT des Alliés lors des batailles d'Arène de 24%${RETURN}${RETURN}

(ne s'applique qu'à la Faction des Marcheurs de Peau)${RETURN}${RETURN}

Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 60`,
};
