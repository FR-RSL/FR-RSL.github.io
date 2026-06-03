const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Fend-Bouclier",
          description: `Attaque un ennemi. Possède 40% de chances de placer un débuff de ${DEBUFFS.DEF} de 60% pendant 2 tours.`,
          damage: "0.2*PV",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Assaut Gesticulant",
          description: `Attaque 4 fois au hasard. La première frappe possède 100% de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 1 tour. Chacune des autres frappes possède 50% de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 1 tour.`,
          damage: "0.08*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Vitalité Obstinée",
          description: `Place un buff ${BUFFS.DEF} de 60% sur tous les alliés pendant 2 tours. Place sur ce Champion un buff ${BUFFS.HEALS} de 15% pendant 2 tours, ainsi qu'un buff ${BUFFS.SHIELD} équivalent à 30% de ses PV MAX pendant 3 tours. Accorde un Tour Supplémentaire.`,
          cooldown: 5,
          levelInfo: ["Bouclier +5%", "Bouclier +5%", "Bouclier +10%", "Bouclier +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Frères d'Armes [P]",
          description: `Transférera, pendant la bataille, 50% des dégâts infligés à Brisecage sur ce Champion.${RETURN}${RETURN}

[Uniquement disponible lorsque Brisecage se trouve dans la même équipe. S'il y a plusieurs Brisecage dans l'équipe, ce Champion ne transférera les dégâts que d'un d'entre eux.]`,
          cooldown: 2,
          isPassive: true
        }
      ],
  stats: {
        "PV": "23 790",
        "ATQ": "760",
        "DEF": "958",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 25%`,
};
