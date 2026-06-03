const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Jugement des Anciens",
          description: `Attaque 2 fois un ennemi. Détruit les PV MAX de la cible de 10 % des dégâts infligés.${RETURN}${RETURN}

Ne peut pas détruire les PV MAX d'un seul ennemi de plus de 50 %.`,
          damage: "1.7*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Éternité écrasante",
          description: `Attaque un ennemi. Possède 75 % de chances de vider complètement le Compteur de Tour de la cible.`,
          damage: "6.5*ATQ",
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Évocation juste",
          description: `Attaque tous les ennemis. Remplit le Compteur de Tour de ce Champion de 15 % et le soigne de 15 % des dégâts infligés si cette attaque passe en critique.`,
          damage: "3.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Soins +10%", "Dégâts +10%", "Soins +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Chant bienfaiteur [P]",
          description: `Si ce Champion possède 2 buffs ou plus au début du tour, place un buff ${BUFFS.ATK} de 50 % et un buff ${BUFFS.CDAM} de 30 % sur ce Champion pendant 1 tour.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 535",
        "ATQ": "1 310",
        "DEF": "1 024",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
