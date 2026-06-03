const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Assombrir le ciel",
          description: `Attaque 3 fois un ennemi. Chaque frappe possède 30% de chances de retirer un buff aléatoire à la cible.${RETURN}${RETURN}

Chaque frappe soigne également ce Champion à hauteur de 20% des dégâts infligés.`,
          damage: "0.07*PV",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tourbillon mortel",
          description: `Attaque tous les ennemis. Place une frappe supplémentaire sur les ennemis qui ne bénéficient d'aucun buff. Chaque frappe supplémentaire ignorera 20% de la DÉF de la cible.${RETURN}${RETURN}

Chaque frappe soigne également tous les alliés à hauteur de 20% des dégâts infligés.`,
          damage: "0.2*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Affrontez le Fléau-noir !",
          description: `Place un buff ${BUFFS.RES} de 50% et un buff ${BUFFS.REFLECT_DAM} de 30% sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

Place également un buff ${BUFFS.TAUNT} sur ce Champion pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Brume rouge [P]",
          description: `Contre-attaque avec la compétence Assombrir le ciel lorsqu'il est frappé en bénéficiant d'un buff ${BUFFS.TAUNT} placé par ce Champion.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 965",
        "ATQ": "914",
        "DEF": "1 134",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = null;
