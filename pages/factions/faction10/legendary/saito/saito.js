const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Assaut Insoutenable",
          description: `Attaque 2 fois un ennemi. Possède 50% de chances de placer un débuff ${DEBUFFS.DEF} de 60% pendant 2 tours après la première frappe. Place un coup supplémentaire si le débuff ${DEBUFFS.DEF} est placé.`,
          damage: "1.35*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Guerrier Tenace",
          description: `Attaque un ennemi. Avant d'attaquer, place un buff ${BUFFS.ATK} de 50% et un buff ${BUFFS.CDAM} de 30% sur ce Champion pendant 2 tours si sa DÉF est plus élevée que la DÉF de la cible. Réduit de 1 tour le temps de recharge de cette Compétence si la cible possède plus de 50% de PV après l'attaque.`,
          damage: "6.1*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Briseur d'Armée",
          description: `Attaque un ennemi, puis attaque tous les ennemis sauf la cible initiale s'il reste 3 ennemis vivants ou plus.${RETURN}${RETURN}

Inflige 20% de dégâts supplémentaires lors de la première frappe si la cible possède des PV MAX plus élevés que ce Champion.`,
          damage: "7*ATQMultiplier: 4.5*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Vendetta [P]",
          description: `Ignorera 7,5% de la DÉF de l'ennemi chaque fois que ce Champion attaque la même cible ennemie lors d'attaques ou de Tours consécutifs. S'accumule jusqu'à 30%.${RETURN}${RETURN}

L'accumulation sera perdue et réinitialisée si ce Champion cible et attaque un ennemi différent.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 185",
        "ATQ": "1 321",
        "DEF": "1 178",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors des Donjons de 30%`,
};
