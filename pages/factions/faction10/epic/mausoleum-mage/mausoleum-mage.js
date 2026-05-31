const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Menottes d'Âme",
          description: `Attaque un ennemi. Offre 30 % de chances de placer un débuff de ${DEBUFFS.SPD} de 30 % pendant 2 tours.`,
          damage: "4.6*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Force du Mort-vivant",
          description: `Place un buff d'${BUFFS.CRATE} de 30 % et un buff d'${BUFFS.DEF} de 60 % sur tous les alliés pendant 2 tours. Place également un buff de ${BUFFS.BLOCK_DEBUFFS} d'1 tour sur tous les alliés.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Ailes de Purge",
          description: `Retire tous les débuffs sur tous les alliés, puis les soigne à hauteur de 10 % des PV MAX de ce Champion.
Soigne chaque allié de 10 % supplémentaires si 1 débuff ou plus de cet allié est retiré. Remplit de 15 % le Compteur de Tour de chaque allié si 2 débuffs ou plus de cet allié sont retirés.`,
          cooldown: 5,
          levelInfo: ["Soins +10%", "Soins +10%", "Soins +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 485",
        "ATQ": "1 057",
        "DEF": "947",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
