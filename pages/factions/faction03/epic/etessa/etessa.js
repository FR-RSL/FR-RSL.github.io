const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Missiles Bénis",
          description: `Attaque un ennemi.`,
          damage: "3.5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Coup du Lapin",
          description: `Attaque un ennemi. 

Possède 75 % de chances de placer un débuff d'${DEBUFFS.STUN} d'1 tour.`,
          damage: "5.9*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Purge-Démon",
          description: `Attaque 1 ennemi avec 2 alliés choisis au hasard.

Les dégâts infligés par ce Champion et tous les alliés rejoignant cette attaque augmenteront de 20 % si la cible se trouve sous débuff ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.GEL}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.SLEEP}, ${DEBUFFS.STUN} ou ${DEBUFFS.PETRIFICATION}. Les alliés rejoignant l'attaque utilisent leurs compétences par défaut.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 215",
        "ATQ": "1 387",
        "DEF": "1 035",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
