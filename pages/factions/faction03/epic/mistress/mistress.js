const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Coup Renforçant",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Soigne l'allié ayant le moins de PV de 15% des dégâts infligés.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Chant de Triomphe",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Si l'attaque passe en critique, place, pendant 2 tours, un buff de ${BUFFS.HEALS} de 15% sur les 2 alliés ayant le moins de PV.`,
          damage: "5.7*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Hymne de Renaissance",
          description: `Ranime 2 alliés pris au hasard avec 50% de PV.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 990",
        "ATQ": "1 024",
        "DEF": "1 013",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 25%`,
};
