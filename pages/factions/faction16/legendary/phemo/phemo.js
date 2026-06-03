const championData = {
  type: "Defense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Marteau de pierre",
          description: `Attaque un ennemi.${RETURN}${RETURN}
A 80% de chances de reduire le Compteur de Tour de la cible de 15%.`,
          damage: "3.6*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Bon patre",
          description: `${ACTIVE}
Place un buff ${BUFFS.DEF} de 60% et un buff ${BUFFS.SHIELD} sur tous les allies pendant 2 tours.${RETURN}
La valeur du ${BUFFS.SHIELD} est equivalent a 300% de la DEF de ce Champion.${RETURN}
Ces buffs sont proteges s'il y a des allies morts quand cette competence est utilisee.${RETURN}${RETURN}${PASSIVE}${RETURN}${RETURN}

Active instantanement cette competence des qu'un allie est tue.${RETURN}
L'activation instantane de cette competence ne la placera pas en temps de recharge et fonctionnera meme quand cette competence est en temps de recharge.${RETURN}
Si plusieurs Champions de l'equipe disposent de cette Competence, une seule sera activee.${RETURN}
Cette competence ne s'activera pas sur les copies en double de ce Champion si ce Champion specifique est mort.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Fracasser et ecraser",
          description: `Attaque un ennemi.${RETURN}${RETURN}

A 75% de chances de placer un debuff ${DEBUFFS.STUN} pendant 2 tours. A egalement 75% de chances de reduire completement le Compteur de Tour de la cible.${RETURN}${RETURN}
Si le debuff ${DEBUFFS.STUN} a bien ete place sur la cible initiale, attaque ensuite tous les ennemis sauf la cible initiale.${RETURN}${RETURN}
A 75% de chances de placer un debuff ${DEBUFFS.STUN} sur tous les ennemis pendant 1 tour. A egalement 75% de chances de reduire les Compteurs de Tour de tous les ennemis de 25%.`,
          damage: "5.2*DEF | 3.7*DEF (Zone)",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Quete vengeresse [P]",
          description: `Augmente la DEF de ce Champion de 3% (s'accumule jusqu'a 30%) et ses PV MAX de 5% (s'accumule jusqu'a 50%) pour chaque debuff ${DEBUFFS.STUN} place par ce Champion.${RETURN}${RETURN}
Les allies sont immunises contre les debuffs ${DEBUFFS.STUN} lorsqu'ils se trouvent sous buff ${BUFFS.SHIELD} places par la competence <span class="grn-t">Bon patre</span> de ce Champion.`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "17 835",
        "ATQ": "870",
        "DEF": "1 520",
        "VIT": "99",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "40",
        "PRE": "20"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Allies lors de toutes les Batailles de 30%.`
};
