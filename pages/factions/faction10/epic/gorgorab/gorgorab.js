const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Malchance",
          description: `Attaque 1 ennemi. Possède 50% de chances de retirer 1 buff aléatoire.`,
          damage: "3.8*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Nouvel Élan",
          description: `Remplit de 15% le Compteur de Tours de tous les alliés. Place, pendant 2 tours, un buff d'${BUFFS.ATK} de 50% sur tous les alliés.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Animer",
          description: `Ranime tous les alliés morts avec 25% de PV, puis soigne tous les alliés de 25%. Le soin survient même si aucun allié n'est mort.`,
          cooldown: 6,
          levelInfo: ["Soins +5%", "Soins +5%", "Soins +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 670",
        "ATQ": "1 057",
        "DEF": "1 068",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors des batailles d'Arène de 23%`,
};
