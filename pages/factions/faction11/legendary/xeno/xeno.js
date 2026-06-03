const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Pique de queue",
          description: `Attaque un ennemi. Place un debuff ${DEBUFFS.POISON} de 5% pendant 2 tours. Place trois debuffs ${DEBUFFS.POISON} de 5% si cette attaque est critique.${RETURN}${RETURN}
Place egalement un buff ${BUFFS.PERFECT_VEIL} sur ce Champion pendant 2 tours.`,
          damage: "3.9*ATQ",
          levelInfo: ["Dégâts +15%", "Dégâts +15%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Infestation",
          description: `Attaque un ennemi. Avant d'attaquer, place un debuff ${DEBUFFS.STUN} et un debuff <span class="grn-t">[Infester]</span> sur la cible pendant 2 tours. Il est impossible de resister a ces debuffs si ce Champion se trouve sous buff ${BUFFS.PERFECT_VEIL}.${RETURN}${RETURN}
Place un debuff ${DEBUFFS.TRUE_FEAR} sur tous les autres ennemis pendant 1 tour. il est impossible de resister a ce debuff si ce Champion se trouve sous buff ${BUFFS.PERFECT_VEIL}.${RETURN}${RETURN}
${PASSIVE}
Ranime ce Champion avec 50% de PV et 50% de Compteur de Tour des qu'un ennemi sous debuff <span class="grn-t">[Infester]</span> meurt.`,
          damage: "5.9*ATQ",
          cooldown: 2,
          levelInfo: ["Dégâts +15%", "Dégâts +15%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Arracher et griffer",
          description: `Attaque 2 fois un ennemi. Inflige 15% de degats supplementaires pour chaque debuff ${DEBUFFS.POISON} se trouvant sur la cible.${RETURN}${RETURN}
Place egalement un buff ${BUFFS.PERFECT_VEIL} sur ce Champion pendant 2 tours.`,
          damage: "3.1*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +15%", "Dégâts +15%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Sang castique [P]",
          description: `Des que ce Champion est attaque, a 25% de chances de placer un debuff ${DEBUFFS.POISON} de 5% sur l'assaillant pendant 2 tours.${RETURN}
Il est impossible de resister a ce debuff et de le bloquer si l'attaque est critique.${RETURN}${RETURN}
Si un ennemi est afflige d'un debuff ${DEBUFFS.POISON} place par ce Champion, reduit sa DEF de 20%.`,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
          isPassive: true,
        }
  ],
  stats: {
        "PV": "17 670",
        "ATQ": "1 365",
        "DEF": "1 035",
        "VIT": "102",
        "TAUX C.": "15%",
        "DEG C.": "63%",
        "RES": "30",
        "PRE": "10"
  }
};

const aura = null;
