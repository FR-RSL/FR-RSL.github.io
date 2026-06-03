const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Voleter dans le chaos",
          description: `Attaque un ennemi. Possède 40% de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25% pendant 2 tours. Ces chances passent à 75% si la cible est affligée d'un débuff ${DEBUFFS.BURN}.`,
          damage: "3*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Siroter du sang",
          description: `Attaque 2 fois un ennemi. Soigne ce Champion de 15% de ses PV MAX lors de chaque coup critique.${RETURN}${RETURN}

Place sur ce Champion un buff ${BUFFS.ATK} de 50% pendant 2 tours si la cible est affligée d'un débuff ${DEBUFFS.BURN}.`,
          damage: "2.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Soins +10%", "Dégâts +10%", "Soins +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Causer des ravages",
          description: `Attaque tous les ennemis. Possède 75% de chances de placer un débuff ${DEBUFFS.BURN} pendant 2 tours.${RETURN}${RETURN}

Remplit le Compteur de tour de ce Champion de 15% si au moins un ennemi est touché par un coup critique.`,
          damage: "3.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Pyromanie [P]",
          description: `Augmente l'ATQ et les DÉG C. de ce Champion de 5% chaque fois qu'un débuff ${DEBUFFS.BURN} se déclenche sur un ennemi. S'accumule jusqu'à 25%.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "13 710",
        "ATQ": "1 421",
        "DEF": "969",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
