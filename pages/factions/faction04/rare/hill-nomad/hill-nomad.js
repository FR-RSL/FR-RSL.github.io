const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lame Tempête de Sable",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Offre 50% de chances de placer un débuff de ${DEBUFFS.ATK} de 25% pendant 2 tours.`,
          damage: "3*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Endurance de Nomade",
          description: `Place, pendant 2 tours, un buff de ${BUFFS.HEALS} de 7,5% sur un allié.`,
          cooldown: 3,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Tactiques d'Embuscade",
          description: `Place un buff ${BUFFS.VEIL} d'1 tour sur un allié, ainsi qu'un buff d'${BUFFS.ATK} de 25% de 2 tours.${RETURN}${RETURN}

Place également un buff de ${BUFFS.SHIELD} sur ce Champion, équivalent à 20% de ses PV MAX, pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Bouclier +5%", "Bouclier +5%", "Bouclier +5%", "Bouclier +5%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 875",
        "ATQ": "1 145",
        "DEF": "958",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
