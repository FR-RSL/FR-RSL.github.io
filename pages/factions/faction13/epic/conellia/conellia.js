const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Surprenante Rapidité",
          description: `Attaque un ennemi. Possède 40% de chances d'augmenter de 2 tours le temps de recharge d'une Compétence de la cible prise au hasard.`,
          damage: "6*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Paix des Profondeurs",
          description: `Possède 80% de chances de placer un débuff ${DEBUFFS.SLEEP} sur tous les ennemis pendant 1 tour.${RETURN}${RETURN}

${PASSIVE}

Lorsqu'un ennemi perd un débuff ${DEBUFFS.SLEEP} placé par cette Compétence, possède 50% de chances de le remplacer par un débuff ${DEBUFFS.FEAR} d'1 tour.`,
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Repos Régénérant",
          description: `Place un débuff ${DEBUFFS.SLEEP} sur un allié pendant 1 tour.${RETURN}${RETURN}

Soigne cet allié de 50% de ses PV Max, puis remplit son Compteur de Tour de 50% lorsque le débuff ${DEBUFFS.SLEEP} expire ou est retiré.${RETURN}${RETURN}

Soigne cet allié de 100% et remplit complètement son Compteur de Tour si le débuff ${DEBUFFS.SLEEP} est perdu à cause de dégâts infligés par un ennemi.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 650",
        "ATQ": "826",
        "DEF": "1 167",
        "VIT": "109",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 18%`,
};
