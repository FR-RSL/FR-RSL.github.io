const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Griffe de phase",
          description: `Attaque un ennemi. Si ce Champion se trouve sous un buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}, attaque tous les ennemis.${RETURN}${RETURN}

Place un buff ${BUFFS.PERFECT_VEIL} sur ce Champion pendant 1 tour.`,
          damage: "ATQ*(1+SPD/100)",
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Frénésie féline",
          description: `Attaque 3 fois un ennemi.${RETURN}${RETURN}

Chaque frappe réduira la VIT de l'ennemi d'1 %(s'accumule jusqu'à 10 %). Cet effet ne fonctionne pas contre les Boss. Chaque frappe augmentera également la VIT de ce Champion de 1 % (s'accumule jusqu'à 10 %).${RETURN}${RETURN}

Si cette compétence tue un ennemi, place pendant 2 tours un buff ${BUFFS.PERFECT_VEIL} sur ce Champion et l'allié qui a le Compteur de Tour le plus bas.`,
          damage: "ATQ*(0.5*SPD/100)",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Hélice souriante",
          description: `Attaque tous les ennemis. Avant d'attaquer, place un buff ${BUFFS.PERFECT_VEIL} et un buff ${BUFFS.ATK} de 50 % sur ce Champion pendant 2 tours.${RETURN}${RETURN}

Accorde un Tour supplémentaire si cette attaque tue un ennemi.`,
          damage: "ATQ*(1+SPD/100)",
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Shadowsmile [P]",
          description: `${PASSIVE}<br><br>If this Champion is under a ${BUFFS.VEIL} or ${BUFFS.PERFECT_VEIL} buff, Turn Meter fill effects are 30% more effective. Also, if this Champion is under a ${BUFFS.VEIL} or ${BUFFS.PERFECT_VEIL} buff, this Champion’s attacks will ignore 15% of the target’s DEF and inflict 15% more damage. <br><br>${ACTIVE}<br><br>Whenever this Champion is about to receive a hit that would drop their HP below 20%, blocks the incoming damage and places a ${BUFFS.BLOCK_DAMAGE} and a ${BUFFS.PERFECT_VEIL} buff on this Champion for 1 turn.`,
          cooldown: 3,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 360",
        "ATQ": "1 520",
        "DEF": "1 035",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 19%`,
};
