const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.png",
          name: "Pousse de vague",
          description: `Attaque 3 fois un ennemi.${RETURN}${RETURN}
Chaque frappe a 50% de chances de voler 5% du Compteur de Tour de la cible.${RETURN}${RETURN}
Remplit les Compteurs de Tour de tous les allies d'une quantite egale a la quantite totale de Compteur de Tour vole`,
          damage: "2.2*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
        },
        {
          img: "assets/sort2.png",
          name: "Courant d'arrachement",
          description: `Retire tous les buffs dont disposent les ennemis.${RETURN}${RETURN}
A ensuite 75% de chances de placer un debuff ${DEBUFFS.SPD} de 30% et un debuff ${DEBUFFS.WEAKEN} de 25% sur tous les ennemis pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.png",
          name: "Maree implacable",
          description: `A 75% de chances de placer un debuff ${DEBUFFS.LOCK_PASSIF} et un debuff ${DEBUFFS.UNFEEBLE} sur une cible ennemie pendant 2 tours.${RETURN}${RETURN}
Vole egalement la totalite du Compteur de Tour de la cible.`,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.png",
          name: "Profondeurs ecrasantes [P]",
          description: `A la fin du tour de ce Champion, place pendant 2 tours un debuff ${DEBUFFS.TRAP} de 100% sur l'ennemi qui a le Compteur de Tour le plus bas. Il est impossible de resister a ce debuff.${RETURN}${RETURN}
Des qu'un ennemi voit son Compteur de Tour augmente par une competence, remplit le Compteur de Tour de ce Champion de 15%. Se produit une fois par tour.`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "20 805",
        "ATQ": "848",
        "DEF": "1 343",
        "VIT": "115",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "30",
        "PRE": "10"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/speed.png",
  description: `Augmente la statistique VIT des Alliés dans les batailles d'Arene de 28%.`
};
