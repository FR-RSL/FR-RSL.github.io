const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Coup de feu",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Possède 50 % de chances de réduire d'1 tour la durée d'un débuff ${DEBUFFS.BOMB}.${RETURN}${RETURN}

Possède également 25 % de chances de placer un débuff ${DEBUFFS.BOMB} sur un ennemi aléatoire pendant 1 tour. Fait exploser instantanément le débuff ${DEBUFFS.BOMB} placé sur cet ennemi aléatoire.${RETURN}${RETURN}

Tous les débuffs ${DEBUFFS.BOMB} placés par cette compétence sur des ennemis dont les PV MAX sont supérieurs ou égaux à 200 000 infligeront 20 % de dégâts en plus.`,
          damage: "3*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Balles témoin",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

La première frappe possède 75 % de chances de placer deux débuffs ${DEBUFFS.BOMB} qui détonent après 2 tours. La seconde frappe possède 55 % de chances d'appliquer un effet ${PROP_DEBUFF} qui prend 1 débuff ${DEBUFFS.BOMB} pour le placer sur tous les autres ennemis.${RETURN}${RETURN}

Tous les débuffs ${DEBUFFS.BOMB} placés par cette compétence sur des ennemis dont les PV MAX sont supérieurs ou égaux à 200 000 infligeront 50 % de dégâts en plus.`,
          damage: "2.7*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Salve éruptive",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25 % pendant 2 tours.${RETURN}${RETURN}

Accorde un Tour supplémentaire si un débuff ${DEBUFFS.WEAKEN} a été placé sur tous les ennemis par cette compétence.`,
          damage: "3.8*ATQ",
          cooldown: 6,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Phénix explosif [P]",
          description: `Place un buff ${BUFFS.REVIVE_ON_DEATH} sur cette Championne pendant 2 tours lorsqu'un ennemi meurt à cause d'un débuff ${DEBUFFS.BOMB}.`,
          cooldown: 6,
          isPassive: true
        }
      ],
  stats: {
        "PV": "13 215",
        "ATQ": "1 542",
        "DEF": "881",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 40`,
};
