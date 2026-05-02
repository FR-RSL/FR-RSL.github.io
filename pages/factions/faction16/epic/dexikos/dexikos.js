const championForms = {
  form1: {
    type: "Soutien",
    spells: [
        {
          img: "assets/sort1.png",
          name: "Eclair aqueux",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}
Chaque frappe soigne l'allie qui a le moins de PV a hauteur de 5% des PV MAX de ce Champion.`,
          damage: "2.4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Soins +5%", "Soins +5%"],
        },
        {
          img: "assets/sort2.png",
          name: "Ire du Maitre des marees",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}
Place un buff ${BUFFS.DEF} de 60% sur tous les allies pendant 2 tours.`,
          damage: "4.5*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.png",
          name: "Eaux regeneratrices",
          description: `Ranime 2 allies aleatoires avec 40% de PV et 20% de Compteur de Tour.${RETURN}${RETURN}
Soigne tous les allies de 15% des PV MAX de ce Champion. Soignera tous les allies meme si aucun allie n'a ete ranime.${RETURN}${RETURN}
Place un buff ${BUFFS.PERFECT_VEIL} sur tous les allies sauf ce Champion pendant 1 tour. Ce buff sera place meme si aucun allie n'a ete ranime.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.png",
          name: "Securite des vagues [P]",
          description: `Au debut du tour de ce Champion, place un buff ${BUFFS.SHIELD} pendant 1 tour sur tous les allies dont les PV sont inferieurs a 100%.
La valeur du ${BUFFS.SHIELD} est egale a 15% des PV MAX du Champion qui le recoit.`,
          isPassive: true,
        }
    ],
    stats: {
          "PV": "21 315",
          "ATQ": "837",
          "DEF": "1 046",
          "VIT": "107",
          "TAUX C.": "15%",
          "DEG C.": "50%",
          "RES": "30",
          "PRE": "0"
    }
  },
  form2: {
    type: "Attaque",
    spells: [

    ],
    stats: {
          "PV": "",
          "ATQ": "",
          "DEF": "",
          "VIT": "",
          "TAUX C.": "",
          "DEG C.": "",
          "RES": "",
          "PRE": ""
    }
  }
};

const aura = {
  img: "../../../../../assets/images/auras/hp.png",
  description: `Augmente la statistique PV des Allies lors de toutes les Batailles de 20%.`
};
