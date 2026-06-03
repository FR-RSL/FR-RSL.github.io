const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Mutiler",
          description: `Attaque un ennemi. A 55 % de chances de réduire d'1 tour la durée de tous les buffs de la cible.${RETURN}${RETURN}

A également 80 % de chances de placer un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 1 tour.`,
          damage: "4*DEF",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Pilier de Glace",
          description: `Attaque tous les ennemis. Place un débuff ${DEBUFFS.BLOCK_BUFFS} et un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours.`,
          damage: "3.8*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Peau Épaisse [P]",
          description: `Immunisé contre les débuffs ${DEBUFFS.STUN}, ${DEBUFFS.GEL}, ${DEBUFFS.SLEEP}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.SHEEP} et ${DEBUFFS.PETRIFICATION}.${RETURN}${RETURN}

Réduit de 15 % les dégâts subis par tous les alliés qui possèdent 1 ou plusieurs buffs. Réduit de 25 % les dégâts subis par tous les alliés ne possédant aucun buff.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 845",
        "ATQ": "1 156",
        "DEF": "1 299",
        "VIT": "106",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des Donjons de 40%`,
};
