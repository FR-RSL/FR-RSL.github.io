const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Boule de feu",
          description: `Attaque un ennemi. Possède 15 % de chances de porter un coup supplémentaire.`,
          damage: "3*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Éclair",
          description: `Place, pendant 2 tours, un buff d'${BUFFS.CRATE} de 30 %, puis attaque un ennemi.`,
          damage: "5.5*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Éclair de Glace",
          description: `Attaque un ennemi. Ignorera le ${BUFFS.SHIELD} et les buffs de ${BUFFS.BLOCK_DAMAGE}, ainsi que la DÉF.`,
          damage: "3*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 505",
        "ATQ": "1 398",
        "DEF": "738",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors des batailles d'Arène de 21%`,
};
