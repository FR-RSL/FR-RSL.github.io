const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Violence revigorante",
          description: `Attaque 4 fois un ennemi. Chaque frappe soigne l'allié ayant le moins de PV à hauteur de 2 % des PV MAX de ce Champion.`,
          damage: "0.07*HP",
          levelInfo: ["Soins +5%", "Soins +5%", "Soins +5%", "Soins +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Cadeau de chaman",
          description: `Soigne tous tes alliés à hauteur de 10 % des PV MAX de ce Champion. 

Place également un buff ${BUFFS.COUNTER} sur ce Champion pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Protection à défenses",
          description: `Place sur tous les alliés un buff ${BUFFS.REFLECT_DAM} de 30 % et un buff ${BUFFS.SHIELD} équivalent à 20 % des PV MAX de ce Champion pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Restauration d'Ogryn [P]",
          description: `Restaure les PV MAX détruits dès que ce Champion se soigne ou soigne un allié. La quantité de PV restaurés est équivalente à 30 % du soin.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 640",
        "ATQ": "881",
        "DEF": "1 046",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
