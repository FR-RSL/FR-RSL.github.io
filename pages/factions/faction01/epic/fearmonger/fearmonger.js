const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Cauchemar",
          description: `Attaque 2 fois un ennemi. Chaque frappe réduit le Compteur de Tour de la cible de 7,5% si la cible est affligée d'un débuff ${DEBUFFS.FEAR} ou ${DEBUFFS.TRUE_FEAR}.${RETURN}${RETURN}

Réduit d'1 tour le temps de recharge de la compétence${RETURN}
Goût du Désespoir [P] de ce Champion si cette attaque tue un ennemi.`,
          damage: "1.7*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Machette Hantée",
          description: `Attaque un ennemi. Possède 75% de chances de placer un débuff ${DEBUFFS.FEAR} pendant 1 tour et 75% de chances de placer un débuff ${DEBUFFS.SPD} de 30% pendant 2 tours.${RETURN}${RETURN}

Possède 75% de chances de placer un débuff ${DEBUFFS.TRUE_FEAR} d'1 tour sur 2 ennemis si cette attaque tue un ennemi. Un débuff ${DEBUFFS.TRUE_FEAR} sera placé sur l'ennemi ayant le Compteur de Tour le plus bas et un autre sera placé sur l'ennemi ayant le Compteur de Tour le plus élevé.`,
          damage: "5.8*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Hache Émoussée",
          description: `Attaque un ennemi. Ignorera 35% de la DÉF de la cible si la cible est affligée d'un débuff ${DEBUFFS.FEAR} ou ${DEBUFFS.TRUE_FEAR}.`,
          damage: "6*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Goût du Désespoir [P]",
          description: `Remplit le Compteur de Tour de ce Champion de 50% dès que les PV d'un ennemi tombent sous 20%.`,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "13 215",
        "ATQ": "1 398",
        "DEF": "1 024",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
