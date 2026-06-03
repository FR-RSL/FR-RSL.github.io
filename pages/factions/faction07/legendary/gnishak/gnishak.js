const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Encensoir pestilentiel",
          description: `Attaque 3 fois au hasard. Chaque frappe possède 40 % de chances de placer un débuff ${DEBUFFS.BOMB} pendant 2 tours.${RETURN}${RETURN}

Les débuffs ${DEBUFFS.BOMB} placés par cette compétence sur des ennemis dont les PV MAX sont supérieurs ou égaux à 200 000 infligeront le double de dégâts.`,
          damage: "1.2*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Ordre du Roi-souris",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % pendant 2 tours.${RETURN}${RETURN}

Possède également 75 % de chances de réduire d'1 tour le compte à rebours de détonation de tous les débuffs ${DEBUFFS.BOMB} et d'augmenter d'1 tour la durée de tous les débuffs ${DEBUFFS.POISON}.`,
          damage: "4.6*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Banquet impur",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer 2 débuffs ${DEBUFFS.BOMB} sur chaque cible pendant 2 tours, puis accorde un Tour supplémentaire.${RETURN}${RETURN}

Les débuffs ${DEBUFFS.BOMB} placés par cette compétence sur des ennemis dont les PV MAX sont supérieurs ou égaux à 200 000 infligeront le double de dégâts.`,
          damage: "4.5*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Peste de rat [P]",
          description: `Chaque fois qu'un débuff ${DEBUFFS.BOMB} placé par ce Champion détonne ou est retiré, place deux débuffs ${DEBUFFS.POISON} de 5 % pendant 2 tours. Ces débuffs sont protégés.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 175",
        "ATQ": "1 365",
        "DEF": "1 068",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 30%`,
};
