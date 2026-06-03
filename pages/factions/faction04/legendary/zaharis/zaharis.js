const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Frappe du faucon",
          description: `Attaque un ennemi. A 75 % de chances de voler 15 % du Compteur de Tour de la cible.${RETURN}${RETURN}

A également 75 % de chances d'appliquer un effet de ${PROP_DEBUFF}, qui prend 2 débuffs aléatoires de la cible et les place sur tous les ennemis.`,
          damage: "4.7*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Le Chantre parle",
          description: `Attaque un ennemi. Avant d'attaquer, a 75 % de chances de voler tous les buffs de la cible ennemie. Applique ensuite un effet de ${PROP_BUFF}, qui prend tous les buffs sur ce Champion et les place sur tous les alliés.${RETURN}${RETURN}

Place un débuff ${DEBUFFS.BLOCK_BUFFS} et un débuff ${DEBUFFS.LOCK_ACTIVE} sur la cible pendant 2 tours.`,
          damage: "6.4*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +15%", "Chances de Buff/Debuff +10%", "Temps de recharge -1", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Voix retentissante",
          description: `Place 1 pile d'${BUFFS.INTERCEPT} sur un allié ciblé.${RETURN}${RETURN}

Place également un buff ${BUFFS.BLOCK_DEBUFFS} et un buff ${BUFFS.SPD} de 30 % sur tous les alliés pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Ailes de victoire [P]",
          description: `Au début de la manche, place un buff ${BUFFS.PRE} de 50 % sur tous les alliés pendant 3 tours.${RETURN}${RETURN}

Dès qu'un débuff d'un ennemi est retiré, expire ou voit sa durée réduite, remplit le Compteur de Tour de ce Champion de 5 %.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 480",
        "ATQ": "1 035",
        "DEF": "1 112",
        "VIT": "108",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 20%`,
};
