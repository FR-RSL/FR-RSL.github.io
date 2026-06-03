const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Oppression",
          description: `Attaque un ennemi. Possède 75% de chances de placer un débuff ${DEBUFFS.FEAR} pendant 1 tour. Possède 75% de chances d'augmenter d'1 tour la durée de tous les débuffs ${DEBUFFS.POISON_S}.${RETURN}${RETURN}

${PASSIVE}

Attaque les ennemis avec cette Compétence dès qu'ils placent un débuff ${DEBUFFS.GEL}, ${DEBUFFS.STUN}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR} ou ${DEBUFFS.PETRIFICATION} sur un allié. Le nombre d'attaques augmente en fonction du nombre de débuffs placés à ce moment : 1 attaque pour chaque débuff ${DEBUFFS.GEL}, ${DEBUFFS.STUN}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR} ou ${DEBUFFS.PETRIFICATION} placé. La première attaque ciblera l'assaillant et toutes les frappes supplémentaires attaqueront des ennemis choisis au hasard. Ne peut attaquer chaque ennemi qu'une fois.`,
          damage: "3.75*ATQ",
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Pleurs de Sirène",
          description: `Attaque tous les ennemis. Possède 75% de chances de placer un débuff ${DEBUFFS.DEF} de 60% et un débuff ${DEBUFFS.WEAKEN} de 25% pendant 2 tours. Place également un buff ${BUFFS.STRENGTHEN} de 25% et un buff ${BUFFS.SPD} de 30% sur tous les alliés pendant 2 tours.`,
          damage: "4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Invalidation",
          description: `Attaque 2 fois un ennemi. La première frappe possède 75% de chances de placer un débuff ${DEBUFFS.POISON_S} de 25% pendant 2 tours. La seconde frappe possède 75% de chances de placer un débuff ${DEBUFFS.BLOCK_BUFFS} et un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 2 tours.`,
          damage: "3.2*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Prise Mortelle [P]",
          description: `Empêche chaque tentative de réanimation ennemie. Cela fonctionne même si cette Championne est morte.${RETURN}${RETURN}

Si cette Championne est vivante lorsqu'une réanimation ennemie est empêchée, ranime les alliés morts avec 50% de PV et 50% de Compteur de Tour. Accorde un Tour Supplémentaire si aucun allié n'est mort.${RETURN}${RETURN}

Si cette Championne est morte lorsqu'une réanimation ennemie est empêchée, ranime cette Championne avec 50% de PV et 50% de Compteur de Tour.${RETURN}${RETURN}

Cette compétence ignorera ${DEBUFFS.BLOCK_REA}.`,
          cooldown: 9,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: true,
        }
  ],
  stats: {
        "PV": "20 805",
        "ATQ": "903",
        "DEF": "1 288",
        "VIT": "110",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "40",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RES des Allies dans les batailles d'Arène de 100.`
};
