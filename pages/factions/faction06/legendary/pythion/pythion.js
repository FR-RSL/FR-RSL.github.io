const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bâton rapace",
          description: `Attaque 2 fois un ennemi. Après chaque frappe, soigne l'allié ayant le moins de PV de 5% des PV MAX de ce Champion.`,
          damage: "3*ATQ",
          levelInfo: ["Soins +5%", "Soins +5%", "Soins +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Peau muée",
          description: `Retire tous les débuffs sur tous les alliés, puis les soigne de 10% de leurs PV MAX. Soigne chaque allié de 5% de ses PV MAX supplémentaires pour chaque débuff qui lui est retiré.${RETURN}${RETURN}

Place également un buff ${BUFFS.BLOCK_DEBUFFS} sur tous les alliés pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Soins +5%", "Soins +5%", "Soins +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Serpent immortel",
          description: `Ranime tous les alliés morts avec 50% de PV et 50% de Compteur de Tour, puis place un buff ${BUFFS.STRENGTHEN} de 25% sur tous les alliés pendant 2 tours.`,
          cooldown: 7,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Couverture [P]",
          description: `Les alliés reçoivent 5% de dégâts en moins à cause des compétences pour chaque buff qu'ils possèdent. S'accumule jusqu'à 25%.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 135",
        "ATQ": "870",
        "DEF": "1 299",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors de toutes les Batailles de 60`,
};
