const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Main Mortelle",
          description: `Attaque tous les ennemis. Possède 30 % de chances de voler 1 buff aléatoire sur chaque ennemi.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Adjonction",
          description: `Place un buff d'${BUFFS.ATK} de 50 % et un buff d'${BUFFS.CRATE} de 30 % sur tous les alliés pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Renaissance",
          description: `Retire tous les débuffs sur tous les alliés, puis les soigne et remplit leurs Compteurs de Tour. La quantité de soin reçue par chaque allié augmente en fonction du nombre de débuffs qui lui ont été retirés. La quantité de remplissage du Compteur de Tour de chaque allié augmente en fonction du nombre de débuffs qui lui ont été retirés.`,
          cooldown: 6,
          levelInfo: ["Soins +5%", "Soins +5%", "Soins +5%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "20 145",
        "ATQ": "859",
        "DEF": "1 376",
        "VIT": "109",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors des Donjons de 33%`,
};
