const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Feux ancestraux",
          description: `Attaque 2 fois un ennemi. Chaque frappe place un buff ${BUFFS.SHIELD} de 2 tours, équivalent à 10% des PV MAX de cette Championne, sur l'allié ayant le moins de PV (sauf cette Championne).`,
          damage: "3.2*ATQ",
          levelInfo: ["Dégâts +5%", "Bouclier +5%", "Dégâts +5%", "Bouclier +5%", "Dégâts +5%", "Bouclier +5%", "Dégâts +5%", "Bouclier +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Lumière de Profondeurs",
          description: `Augmente d'1 tour la durée de tous les buffs des alliés, puis réduit d'1 tour la durée de tous les débuffs des alliés.${RETURN}${RETURN}

Soigne également tous les alliés à hauteur de 2,5% de leurs PV max. Soigne de 2,5% des PV MAX supplémentaires pour chaque tour ajouté ou retiré à la durée des buffs et débuffs par cette compétence.`,
          cooldown: 4,
          levelInfo: ["Soins +5%", "Soins +5%", "Soins +5%", "Soins +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Canaliser la Lignée",
          description: `Place sur tous les alliés un buff ${BUFFS.BLOCK_DAMAGE} pendant 1 tour et un buff ${BUFFS.HEALS} de 15% pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 990",
        "ATQ": "749",
        "DEF": "1 288",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 20%`,
};
