const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lance aurique",
          description: `Attaque tous les ennemis. Possède 35 % de chances de placer un débuff ${DEBUFFS.UNFEEBLE} pendant 1 tour.`,
          damage: "2.5*DEF",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "La mort ou la gloire",
          description: `Attaque 3 fois tous les ennemis. Chaque frappe réduit d'1 tour la durée de tous les buffs ennemis.`,
          damage: "1.2*DEF+0.03*Target Max HP",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Tonnerre galopant",
          description: `Place un buff ${BUFFS.PRE} de 50 % et un buff ${BUFFS.DEF} de 60 % sur tous les alliés pendant 3 tours.${RETURN}${RETURN}

Place ensuite un débuff ${DEBUFFS.STUN} d'1 tour sur l'ennemi ayant le Compteur de Tour le plus élevé.${RETURN}${RETURN}

Enfin, accorde un Tour supplémentaire.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Chevalier loyal [P]",
          description: `Ce Champion est immunisé contre les effets de réduction du Compteur de Tour utilisés par les ennemis, ainsi que les débuffs ${DEBUFFS.SPD}.${RETURN}${RETURN}

Dès qu'un ennemi change de Forme ou tente de réduire le Compteur de Tour de ce Champion, contre-attaque en utilisant la compétence par défaut de ce Champion.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 815",
        "ATQ": "716",
        "DEF": "1 542",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 35%`,
};
