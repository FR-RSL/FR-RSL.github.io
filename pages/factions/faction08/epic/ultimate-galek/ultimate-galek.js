const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Violente Balafre",
          description: `Attaque un ennemi. Possède 50 % de chances de placer un débuff ${DEBUFFS.BURN} de 2 tours sur la cible si ce Champion dispose d'un buff ${BUFFS.ATK}.

Remplit de 10 % le Compteur de Tour de ce Champion si cette attaque passe en critique. Remplit de 5 % le Compteur de Tour de ce Champion si cette attaque ne passe pas en critique.`,
          damage: "3.9*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Espoirs Déçus",
          description: `Attaque un ennemi. Possède 50 % de chances de placer un débuff ${DEBUFFS.BURN} de 2 tours sur la cible si ce Champion dispose d'un buff ${BUFFS.ATK}. Réduit de 25 % le Compteur de Tour de la cible et place un buff ${BUFFS.ATK} de 50 % de 2 tours sur ce Champion si cette attaque passe en critique.
Réduit de 10 % le Compteur de Tour de la cible si cette attaque ne passe pas en critique.`,
          damage: "5.95*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rage Brûlante",
          description: `Attaque 2 fois tous les ennemis. Possède 50 % de chances de placer un débuff ${DEBUFFS.BURN} de 2 tours si ce Champion dispose d'un buff ${BUFFS.ATK}. Chaque frappe possède également 75 % de chances de réduire de 20 % le Compteur de Tour si la cible se trouve sous débuff ${DEBUFFS.BURN}.`,
          damage: "2*ATQ",
          cooldown: 6,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Brosse-toi [P]",
          description: `Soigne totalement ce Champion et retire instantanément tout débuff ${DEBUFFS.STUN} dès qu'un ennemi place un débuff ${DEBUFFS.STUN} sur ce Champion.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 195",
        "ATQ": "1 332",
        "DEF": "958",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
