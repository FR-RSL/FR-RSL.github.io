const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.png",
          name: "Boule de Magma",
          description: `Attaque un ennemi. Possède 50% de chances de placer un debuff ${DEBUFFS.BLOCK_BUFFS} pendant 2 tours.`,
          damage: "4.6*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort2.png",
          name: "Renvoi Balayant",
          description: `Possede 75% de chances de retirer tous les buffs sur tous les ennemis. Possede egalement 75% de chances de placer un debuff ${DEBUFFS.WEAKEN} de 25% sur tous les ennemis pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.png",
          name: "Maitre des Invocations",
          description: `Ranime un allie avec 50% de PV et 50% de Compteur de Tour. Place un buff ${BUFFS.BLOCK_DEBUFFS} sur cet allie pendant 2 tours.${RETURN}${RETURN}
Ranimera egalement <span style="color:purple">Akoth le Brule</span> et <span class="gold-t">Urost Capturame</span> avec 30% de PV et 30% de Compteur de Tour s'ils se trouvent dans la meme equipe et ne sont pas la cible de la competence.${RETURN}${RETURN}
Si <span style="color:purple">Akoth le Brule</span> ou <span class="gold-t">Urost Capturame</span> sont la cible de la competence, ce Champion sera ranime avec 50% de PV et 50% de Compteur de Tour. ainsi qu'avec un buff ${BUFFS.BLOCK_DEBUFFS} de 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "17 010",
        "ATQ": "1 002",
        "DEF": "1 167",
        "VIT": "98",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "30",
        "PRE": "15"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/acc.png",
  description: `Augmente la statistique PRE des Allies lors de toutes les Batailles de 40.`
};
