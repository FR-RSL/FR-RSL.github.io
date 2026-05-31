const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Porteuse de Silence",
          description: `Attaque 3 fois au hasard. Chaque frappe possède 30 % de chances de placer un débuff de ${DEBUFFS.SLEEP} d'1 tour.`,
          damage: "1.8*DEF",
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Épée Fluide",
          description: `Attaque un ennemi. Possède 50 % de chances de réduire de 50 % le Compteur de Tour de la cible. Remplit le Compteur de Tour de ce Champion d'une valeur équivalent à la somme des pertes de la cible.`,
          damage: "3.6*DEF",
          cooldown: 4,
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Copieuse Hémorragie",
          description: `Attaque tous les ennemis. Possède 80 % de chances de placer un débuff de ${DEBUFFS.HEALS} de 50 % pendant 1 tour.`,
          cooldown: 5,
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Crisis Response [P]",
          description: `Increases all allies' ACC by 20 for each ally under an ${BUFFS.ALLY_PROTECT} buff.<br><br>When killed, resets the cooldown of the Destiny's Call skill for any ally Arbiters. If there are multiple Champions on the team with this skill, this effect will only activate once.<br><br>All ally Arbiters receive 30% less damage.`,
          cooldown: 4,
          isPassive: true
        },
        {
          img: "assets/passif1.webp",
          name: "Ultimate Purpose [P]",
          description: `Increases all allies' RES by 20 for each ally under an ${BUFFS.ALLY_PROTECT} buff.<br><br>This Champion will also receive 20% of the damage of any ally Arbiters. If there are multiple Champions on the team with this skill, this effect will only activate once.<br><br>If any ally Arbiter is about to get killed by a fatal hit, places an ${BUFFS.UNKILLABLE} buff on her for 1 turn. If there are multiple Champions on the team with this skill, this effect will only activate once.`,
          cooldown: 4,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 320",
        "ATQ": "804",
        "DEF": "1 487",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "20"
      },
};

const aura = null;
