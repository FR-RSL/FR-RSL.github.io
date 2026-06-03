const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "La main de Diamant",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Soigne tous tes alliés à hauteur de 5% des PV MAX de ce Champion. Soigne de 2% supplémentaires des PV MAX de ce Champion pour chaque buff sur ce Champion.`,
          damage: "3*ATQ",
          levelInfo: ["Dégâts +10%", "Soins +10%", "Dégâts +10%", "Soins +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Don charitable",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Augmente d'1 tour la durée de tous les buffs alliés.${RETURN}${RETURN}

Remplit le Compteur de Tour de tous les alliés de 20%.`,
          damage: "4*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Trafic de protection",
          description: `Place 3 piles d'${BUFFS.INTERCEPT} sur un allié ciblé.${RETURN}${RETURN}

Place également un buff ${BUFFS.RES} de 50% et un buff ${BUFFS.STRENGTHEN} de 25% sur tous les alliés pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Pilier [P]",
          description: `A 50% de chances de convertir un débuff en buff avant qu'il ne soit placé sur un allié. Fonctionne avec les débuffs suivants :${RETURN}${RETURN}

- Convertit les débuffs ${DEBUFFS.ATK} de 25% et 50% en un buff ${BUFFS.ATK} de 50%${RETURN}
- Convertit les débuffs ${DEBUFFS.DEF} de 30% et 60% en un buff ${BUFFS.DEF} de 60%${RETURN}
- Convertit les débuffs ${DEBUFFS.SPD} de 15% et 30% en un buff ${BUFFS.SPD} de 30%${RETURN}
- Convertit les débuffs ${DEBUFFS.CRATE} de 15% et 25% en un buff ${BUFFS.CRATE} de 30%${RETURN}
- Convertit les débuffs ${DEBUFFS.CDAM} de 15% et 25% en un buff ${BUFFS.CDAM} de 30%`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 650",
        "ATQ": "1 145",
        "DEF": "1 123",
        "VIT": "112",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 20%`,
};
