const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sanction Éclair",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Offre 35 % de chances de placer un débuff de ${DEBUFFS.ATK} de 25 % pendant 2 tours.`,
          damage: "3.5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Plein de Grâces",
          description: `Soigne un allié à hauteur de 30 % des PV MAX de ce Champion.${RETURN}${RETURN}

Place, pendant 2 tours, un buff de ${BUFFS.SHIELD} équivalent à n'importe quel surplus de soins si la cible est totalement soignée par cette Compétence.`,
          cooldown: 4,
          levelInfo: ["Soins +5%", "Soins +5%", "Soins +10%", "Soins +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Déborde de Vie",
          description: `Place, pendant 2 tours, un buff de ${BUFFS.HEALS} de 7,5 % sur tous les alliés.${RETURN}
Place, pendant 2 tours, un buff de ${BUFFS.SHIELD} équivalent à 10 % des PV MAX de la cible sur tous les alliés si les PV d'un allié sont pleins.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 350",
        "ATQ": "991",
        "DEF": "947",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 13%`,
};
