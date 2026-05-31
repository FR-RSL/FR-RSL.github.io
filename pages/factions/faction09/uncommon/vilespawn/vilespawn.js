const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Fléau Infernal",
          description: `Attaque un ennemi. Offre 5 % de chances de placer un débuff de ${DEBUFFS.ATK} de 25 % pendant 2 tours.`,
          damage: "3.3*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tricot de Chair",
          description: `Soigne un allié à hauteur de 10 % de leurs PV max.`,
          cooldown: 3,
          levelInfo: ["Soins +5%", "Soins +5%", "Soins +5%", "Soins +10%", "Soins +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 875",
        "ATQ": "925",
        "DEF": "903",
        "VIT": "91",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
