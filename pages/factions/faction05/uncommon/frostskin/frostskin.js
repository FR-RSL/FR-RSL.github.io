const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Poings Gelés",
          description: `Attaque un ennemi. Possède 20% de chances de placer un débuff de ${DEBUFFS.GEL} pendant 1 tour.`,
          damage: "3.7*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Saper la Force",
          description: `Vide totalement le Compteur de Tours d'un allié ciblé. Soigne cet allié à hauteur de 50% du Compteur de Tours perdu. Soigne la cible de 10% si son Compteur de Tours est rempli à moins de 10%.`,
          cooldown: 4,
          levelInfo: ["Soins +10%", "Soins +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 865",
        "ATQ": "1 046",
        "DEF": "716",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
