const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Éclair de Transfert",
          description: `Attaque un ennemi. Possède 30 % de chances de voler un buff aléatoire de la cible.`,
          damage: "4*DEF",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Acier Fortifié",
          description: `Place un buff de ${BUFFS.SHIELD} sur tous les alliés pendant 2 tours. La valeur du ${BUFFS.SHIELD} est proportionnelle au Niveau de ce Champion.`,
          cooldown: 3,
          levelInfo: ["Bouclier +5%", "Bouclier +5%", "Bouclier +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Sauvetage",
          description: `Retire tous les débuffs de l'allié ayant le moins de PV, puis le soigne de 20 % des PV MAX de ce Champion. Place également un buff ${BUFFS.DEF} de 25 % sur cet allié pendant 3 tours.`,
          cooldown: 5,
          levelInfo: ["Soins +10%", "Soins +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 350",
        "ATQ": "859",
        "DEF": "1 079",
        "VIT": "90",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des Cryptes de Faction de 15%`,
};
