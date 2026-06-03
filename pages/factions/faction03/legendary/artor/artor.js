const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tourbillon d'encensoir",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Soigne tous tes alliés à hauteur de 5% des PV MAX de ce Champion.`,
          damage: "3.4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Encens d'inspiration",
          description: `Place un buff ${BUFFS.ATK} de 50% et un buff ${BUFFS.STRENGTHEN} de 25% sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

Remplit le Compteur de Tour de tous les alliés de 15%.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Mandat de renaissance",
          description: `Ranime un allié avec 50% de PV et 50% de Compteur de Tour. Place également un buff ${BUFFS.ATK} de 50% sur cet allié pendant 1 tour.${RETURN}${RETURN}

Active ensuite la compétence par défaut de l'allié ranimé, ciblant l'ennemi qui a le moins de PV.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Condamné à la vie [P]",
          description: `Si un ennemi est tué par la compétence par défaut d'un allié après avoir été ranimé par la compétence [Mandat de renaissance], réinitialise le temps de recharge de la compétence [Mandat de renaissance].`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 980",
        "ATQ": "980",
        "DEF": "1 266",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors des batailles d'Arène de 25%`,
};
