const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Moisson de Peur",
          description: `Attaque 3 fois un ennemi. Chaque frappe a 50% de chances de voler un buff aléatoire à la cible.${RETURN}${RETURN}

Chaque frappe a également 50% de chances de placer un débuff ${DEBUFFS.FEAR} pendant 1 tour.${RETURN}${RETURN}

Ces chances passent à 100% si la cible ne possède aucun buff actif.`,
          damage: "0.06*PV",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Rêves en Cendres",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Retire tous les buffs de chaque cible. Place ensuite un débuff ${DEBUFFS.ATK} de 50% et un débuff ${DEBUFFS.BLOCK_BUFFS} sur tous les ennemis pendant 2 tours.${RETURN}${RETURN}

Accorde ensuite un Tour supplémentaire.`,
          damage: "0.16*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Seigneur de Terreur",
          description: `Attaque tous les ennemis. A 75% de chances de placer un débuff ${DEBUFFS.TRUE_FEAR} pendant 2 tours.${RETURN}${RETURN}

Place également un débuff ${DEBUFFS.SPD} de 30% pendant 2 tours et réduit de 30% le Compteur de Tour de chaque cible si le débuff ${DEBUFFS.TRUE_FEAR} est placé.${RETURN}${RETURN}

A 75% de chances de placer un débuff ${DEBUFFS.SLEEP} irrésistible pendant 1 tour si le débuff ${DEBUFFS.TRUE_FEAR} n'est pas placé. Réduit également le Compteur de Tour de chaque cible de 30%.`,
          damage: "0.21*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Leering Grin [P]",
          description: `Whenever an ally is attacked, has a 50% chance of decreasing the duration of all buffs on the attacker by 1 turn. Whenever this Champion is attacked, the chance increases to 100%. This Champion is immune to ${DEBUFFS.FEAR} debuffs.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "26 925",
        "ATQ": "859",
        "DEF": "925",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "20"
      },
};

const aura = null;
