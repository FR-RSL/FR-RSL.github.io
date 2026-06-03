const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Visions de Mort",
          description: `Attaque 3 fois de façon aléatoire. Chaque frappe a 80 % de chances de réduire le Compteur de Tour de 10 %.`,
          damage: "1.3*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Sombre Linceul",
          description: `Soigne tous tes alliés à hauteur de 20 % des PV MAX de cette Championne.${RETURN}${RETURN}

Place également un buff ${BUFFS.BLOCK_DEBUFFS} sur tous les alliés pendant 2 tours, puis place un buff ${BUFFS.SHIELD} égal à 30 % des PV MAX de cette Championne sur tous les alliés pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Bouclier +5%", "Bouclier +5%", "Bouclier +5%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Don de Soi",
          description: `Ranime tous les alliés morts avec 50 % de PV et 30 % de Compteur de Tour.${RETURN}${RETURN}

Place également un buff ${BUFFS.BLOCK_DAMAGE} sur tous les alliés sauf cette Championne pendant 1 tour.`,
          cooldown: 5,
          levelInfo: ["Soins +5%", "Soins +5%", "Soins +5%", "Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "18 165",
        "ATQ": "1 332",
        "DEF": "1 035",
        "VIT": "115",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "45",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Allies lors de toutes les Batailles de 34%.`
};
