const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Coup Dévastateur",
          description: `Attaque un ennemi. Soigne tous les alliés à hauteur de 25 % des dégâts infligés.${RETURN}${RETURN}

A 50 % de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour.${RETURN}${RETURN}

Lorsque ce Champion contre-attaque, ignorera également 20 % de la DÉF de la cible.`,
          damage: "0.26*HP",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Garde du Corps",
          description: `Place sur tous les alliés un buff ${BUFFS.DEF} de 60 %, un buff ${BUFFS.ALLY_PROTECT} de 50 % et un buff ${BUFFS.SHIELD} équivalent à 30 % des PV MAX de ce Champion pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Marque de Silence",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

A 80 % de chances de réduire de 2 tours la durée de tous les buffs dont bénéficient les ennemis. A également 80 % de chances de placer un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 2 tours.${RETURN}${RETURN}

Ignorera 25 % de la DÉF de chaque cible si ce Champion se trouve sous buff ${BUFFS.SHIELD}.`,
          damage: "0.3*HP",
          cooldown: 3,
          levelInfo: ["Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Solidarité stoïque [P]",
          description: `Dès qu'un ennemi attaque un allié sous buff ${BUFFS.SHIELD}, contre-attaque avec la compétence par défaut de ce Champion.${RETURN}${RETURN}

Les dégâts infligés par ce Champion augmentent de 10 % pour chaque buff actif qui a été placé sur les alliés par ce Champion.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 140",
        "ATQ": "1 013",
        "DEF": "1 090",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors des Cryptes de Faction de 38%`,
};
