const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Masque de Terreur",
          description: `Attaque tous les ennemis. Possède 25 % de chances de placer un débuff ${DEBUFFS.SPD} de 30 % pendant 2 tours.${RETURN}${RETURN}

Remplit également le Compteur de Tour de ce Champion de 15 %.`,
          damage: "0.2*HP",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Bergère d'Âmes",
          description: `Place un buff ${BUFFS.REVIVE_ON_DEATH} et un buff ${BUFFS.DEF} de 60 % sur tous les alliés pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Étrange Transfert",
          description: `Échange les PV avec un allié.${RETURN}${RETURN}

Si, après l'échange, les PV de ce Champion sont égaux ou supérieurs à ceux de la cible, remplit le Compteur de Tour de ce Champion de 40 %, place un buff ${BUFFS.SPD} de 30 % sur ce Champion pendant 2 tours et place un buff ${BUFFS.BLOCK_DAMAGE} sur l'allié ciblé pendant 1 tour. Si, après l'échange, les PV de ce Champion sont inférieurs à ceux de la cible, remplit le Compteur de Tour de la cible de 40 % et lui accorde un buff ${BUFFS.SPD} de 30 % pendant 2 tours, puis place un buff ${BUFFS.BLOCK_DAMAGE} sur ce Champion pendant 1 tour. Place également deux buffs ${BUFFS.HEALS} de 15 % sur ce Champion pendant 1 tour.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Gravewalker [P]",
          description: `Fully heals the ally with the lowest HP whenever this Champion is killed. <br><br>Heals all allies by 20% of their MAX HP and fills their Turn Meters by 15% whenever this Champion is revived.<br><br>Heal Multiplier: 1*Target Max HP`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 990",
        "ATQ": "969",
        "DEF": "1 343",
        "VIT": "115",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 24%`,
};
