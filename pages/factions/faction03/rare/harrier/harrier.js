const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tir Dupant",
          description: `Attaque 1 fois un ennemi. Possède 15 % de chances de porter un coup supplémentaire.`,
          damage: "3.5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Carreaux Perçants",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 30 % de chances de placer un débuff de ${DEBUFFS.DEF} de 30 % pendant 2 tours.`,
          damage: "2.5*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Frappe d'Élite",
          description: `Attaque 1 ennemi. Possède 30 % de chances supplémentaires de porter un coup critique.`,
          damage: "5.5*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Compagne Douée ${PASSIVE}",
          description: `Ignorera 50 % de la DÉF de la cible lorsque ce Champion infligera un coup critique.

[Uniquement disponible lorsque Hospitalière se trouve dans la même équipe.]`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "13 545",
        "ATQ": "1 376",
        "DEF": "749",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
