const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sonneur de Cloches",
          description: `Attaque un ennemi.${RETURN}
Possède 50 % de chances de placer un débuff de ${DEBUFFS.PRE} de 25 % pendant 2 tours si la cible ne possède aucun buff actif.`,
          damage: "3.12*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Transfert de Destin",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Possède 50 % de chances de voler 2 buffs aléatoires à la cible.`,
          damage: "5.25*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Chaînes Astrales",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Possède 75 % de chances de placer un débuff de ${DEBUFFS.BLOCK_BUFFS} de 2 tours.`,
          damage: "5.1*DEF",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 525",
        "ATQ": "760",
        "DEF": "1 233",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "55",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés Force lors de toutes les Batailles de 25%`,
};
