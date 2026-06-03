const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Boule de Magma",
          description: `Attaque un ennemi. Possède 50 % de chances de placer un débuff ${DEBUFFS.BLOCK_BUFFS} de 2 tours.`,
          damage: "4.6*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Renvoi Balayant",
          description: `Possède 75 % de chances de retirer tous les buffs sur tous les ennemis. Possède également 75 % de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25 % sur tous les ennemis pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Maître des Invocations",
          description: `Ranime un allié tombé avec 50 % de PV, puis remplit son Compteur de Tour de 50 %. Accorde-lui ensuite un buff ${BUFFS.BLOCK_DEBUFFS} pendant 2 tours.${RETURN}${RETURN}

Ranimera également Akoth le Brûlé et Urost Capturâme avec 30 % de PV s'ils se trouvent dans la même équipe et ne sont pas la cible de la compétence. Remplira ensuite leurs Compteurs de Tour de 30 % après la réanimation.${RETURN}${RETURN}

Si Akoth le Brûlé ou Urost Capturâme sont la cible de la compétence, ce Champion sera ranimé avec 50 % de PV et 50 % de Compteur de Tour, ainsi qu'avec un buff ${BUFFS.BLOCK_DEBUFFS} de 2 tours.`,
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
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRE des Allies lors de toutes les Batailles de 40.`
};
