const championData = {
  type: "Defense",
  spells: [
        {
          img: "assets/sort1.png",
          name: "Ami cruel",
          description: `Attaque un ennemi.${RETURN}${RETURN}
Place un buff ${BUFFS.HEALS} de 15% sur ce Champion et l'allie qui a le moins de PV, sauf ce Champion, pendant 1 tour.`,
          damage: "4*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
        },
        {
          img: "assets/sort2.png",
          name: "Fendeur chapardeur",
          description: `Attaque 3 fois un ennemi.${RETURN}${RETURN}
La premiere frappe a 75% de chances de voler tous les buffs de la cible. La deuxieme frappe transfere tous les debuffs de ce Champion sur la cible. La troisieme frappe applique un effet <span class="grn-t">[Propagation de Debuffs]</span>, qui prend tous les debuffs de la cible pour les placer sur tous les autres ennemis.`,
          damage: "2*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.png",
          name: "Force de Bucklan",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}
Place un debuff ${DEBUFFS.PROVOKE} sur tous les ennemis pendant 1 tour. A 75% de chances de placer un debuff ${DEBUFFS.PAIN_LINK} sur tous les ennemis pendant 2 tours.${RETURN}
Le debuff ${DEBUFFS.PAIN_LINK} renvoie 45% des degats infliges.${RETURN}${RETURN}
Place egalement un buff ${BUFFS.COUNTER} sur ce Champion et l'allie qui a les DEG C. les plus eleves pendant 2 tours.`,
          damage: "4.8*DEF",
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.png",
          name: "Disciple de Padraig [P]",
          description: `Soigne tous les allies de 40% des degats infliges a ce Champion.${RETURN}${RETURN}
A la fin du tour de ce Champion, place un buff ${BUFFS.DEF} de 60% sur ce Champion pendant 1 tour.`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "19 155",
        "ATQ": "903",
        "DEF": "1 398",
        "VIT": "100",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "50",
        "PRE": "10"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/defence.png",
  description: `Augmente la statistique DEF des Allies lors de toutes les Batailles de 30%.`
};
