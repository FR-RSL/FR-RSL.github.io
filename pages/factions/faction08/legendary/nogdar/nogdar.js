const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Verdict Brutal",
          description: `Attaque un ennemi. Soigne ce Champion à hauteur de 10 % de ses PV MAX. Accorde un Tour Supplémentaire si cette attaque tue un ennemi.`,
          damage: "3.3*ATQ",
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Sanglant Festin",
          description: `Attaque tous les ennemis. Après avoir attaqué, ce Champion sacrifie des PV équivalents à 50 % de ses PV MAX, puis place un buff ${BUFFS.HEALS} de 15 % sur tous les alliés, pendant 2 tours.${RETURN}${RETURN}

Le sacrifice de PV se produira même si cela tue ce Champion.`,
          damage: "3.2*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Viatique",
          description: `Sacrifie des PV équivalents à 50 % des PV MAX de ce Champion, puis égalise les niveaux de PV avec l'ennemi ciblé. Accorde ensuite un Tour supplémentaire.${RETURN}${RETURN}

Les PV de ce Champion et de l'ennemi ciblé seront descendus au niveau de celui qui a le moins de PV.${RETURN}
[Ne fonctionne pas contre les Boss. Ce Champion ne peut pas être tué par cette Compétence.]`,
          cooldown: 7,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Retour du Bourreau [P]",
          description: `Ranime ce Champion avec 50 % de PV et un Compteur de Tour rempli lorsqu'il est mort si tous les alliés sont vivants.${RETURN}${RETURN}

Ne fonctionne pas s'il y a plusieurs Nogdar dans l'équipe, ou s'il y a 3 Champions ou moins au total dans l'équipe.`,
          cooldown: 1,
          isPassive: true
        }
      ],
  stats: {
        "PV": "12 060",
        "ATQ": "1 696",
        "DEF": "1 079",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 33%`,
};
