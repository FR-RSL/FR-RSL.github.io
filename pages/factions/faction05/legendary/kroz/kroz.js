const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tabassage écrasant",
          description: `Attaque 3 fois un ennemi.${RETURN}${RETURN}

Chaque frappe a 30% de chances de réduire d'1 tour le compte à rebours de détonation de tous les débuffs ${DEBUFFS.BOMB} sur la cible.${RETURN}${RETURN}

A également 30% de chances de placer un débuff ${DEBUFFS.STUN} sur la cible pendant 1 tour.`,
          damage: "ATQ*1.5",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Sapeur de champ de bataille",
          description: `A 75% de chances de placer sur chaque ennemi 2 débuffs ${DEBUFFS.BOMB} qui détoneront après 2 tours.${RETURN}${RETURN}

Remplit le Compteur de Tour de ce Champion de 25% pour chaque ennemi affligé d'un débuff ${DEBUFFS.BOMB}.`,
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Merlin mangonneau",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

A 75% de chances de réduire d'1 tour le compte à rebours de détonation de tous les débuffs ${DEBUFFS.BOMB}.${RETURN}${RETURN}

A également 75% de chances de placer un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 2 tours.`,
          damage: "ATQ*4.35",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Attentat à la bombe [P]",
          description: `Remplit de 5% les Compteurs de Tour de tous les alliés à chaque fois qu'un débuff ${DEBUFFS.BOMB} explose.${RETURN}${RETURN}

A 20% de chances d'activer un effet ${INSTANT} sur ce Champion dès qu'un allié ou un ennemi est tué par un débuff ${DEBUFFS.BOMB}.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 350",
        "ATQ": "1 454",
        "DEF": "1 035",
        "VIT": "110",
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
