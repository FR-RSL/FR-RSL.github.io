const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Briser la Confiance",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 30 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours. Les chances passent à 50 % si la cible est affligée d'un débuff ${DEBUFFS.FEAR} ou ${DEBUFFS.TRUE_FEAR}.`,
          damage: "1.9*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fléau des Elfes",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.PRE} de 50 % pendant 2 tours et un débuff ${DEBUFFS.TRUE_FEAR} pendant 1 tour. Les Champions des Factions des Hauts Elfes et Elfes Noirs ne peuvent pas résister à ces débuffs.`,
          damage: "4.2*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Flux de Bataille",
          description: `Attaque un ennemi. Ignorera les buffs ${BUFFS.SHIELD}. 

Réduit le temps de recharge de la compétence Flux de Bataille de 2 tours, remplit le Compteur de Tour de ce Champion de 30 % et place un buff ${BUFFS.CDAM} de 30 % sur ce Champion pendant 2 tours si cette attaque tue un ennemi.`,
          damage: "5.9*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Saine Rancune [P]",
          description: `Soigne ce Champion de 50 % de ses PV MAX chaque fois qu'il tue un ennemi. 

Accorde également un Tour Supplémentaire chaque fois que ce Champion tue un ennemi des Factions des Hauts Elfes ou Elfes Noirs.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 010",
        "ATQ": "1 487",
        "DEF": "958",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
