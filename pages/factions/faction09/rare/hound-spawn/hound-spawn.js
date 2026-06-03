const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Souffle de Feu",
          description: `Attaque 1 ennemi. Possède 20% de chances de placer un débuff d'${DEBUFFS.STUN} pendant 1 tour.`,
          damage: "3.3*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Dent d'Adamantine",
          description: `Attaque 2 fois 1 ennemi. Possède 50% de chances de placer un débuff de ${DEBUFFS.DEF} de 60% pendant 1 tour.`,
          damage: "2.6*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Frappe Fracassante",
          description: `Attaque tous les ennemis. Ignorera la DÉF et les buffs de ${BUFFS.BLOCK_DAMAGE} si la cible est affligée d'un débuff de ${DEBUFFS.GEL}.${RETURN}${RETURN}

[Uniquement disponible lorsque Croc Infernal est dans la même équipe.]`,
          damage: "2.5*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 050",
        "ATQ": "1 398",
        "DEF": "760",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
