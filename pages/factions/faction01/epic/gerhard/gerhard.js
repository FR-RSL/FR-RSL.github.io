const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Coup Retentissant",
          description: `Attaque un ennemi. Possède 15 % de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour. Par contre, possède 40 % de chances de placer un débuff ${DEBUFFS.STUN} d'1 tour si la cible possède plus de 75 % de Compteur de Tour.`,
          damage: "3.5*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Témoignage de Valeur",
          description: `Place un buff ${BUFFS.CRATE} de 30 % et un buff ${BUFFS.CDAM} de 30 % sur ce Champion pendant 2 tours, puis attaque un ennemi. 

Ignorera 25 % de la DÉF de la cible. Par contre, ignorera 50 % de la DÉF de la cible si la cible dispose d'un buff ${BUFFS.DEF}.`,
          damage: "5.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Modèle [P]",
          description: `Immunisé contre les débuffs ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.GEL}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.SLEEP}, ${DEBUFFS.STUN} et ${DEBUFFS.PETRIFICATION}.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "12 555",
        "ATQ": "1 387",
        "DEF": "1 079",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors de la Tour du Malheur de 50`,
};
