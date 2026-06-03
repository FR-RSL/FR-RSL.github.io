const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Saisir la viande",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

Chaque frappe a 80 % de chances de placer un débuff ${DEBUFFS.HEALS} de 100 % pendant 2 tours.${RETURN}${RETURN}

Fait équipe avec 1 allié aléatoire de la Faction des Tribus Ogryn. L'allié qui rejoint l'attaque utilisera sa compétence par défaut.`,
          damage: "2.8*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Coup de cloque",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Possède 75 % de chances de placer un débuff ${DEBUFFS.PRE} de 50 % et un débuff ${DEBUFFS.WEAKEN} de 25 % pendant 2 tours.${RETURN}${RETURN}

Augmente d'1 tour la durée de tous les buffs ${BUFFS.HEALS} sur tous les alliés.`,
          damage: "5.2*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rythme Coeur-de-guerre",
          description: `Rétablit 50 % des PV MAX détruits de chaque allié.${RETURN}${RETURN}

Place pendant 2 tours un buff ${BUFFS.REFLECT_DAM} de 30 % et un buff ${BUFFS.HEALS} de 15 % sur tous les alliés.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Plat du jour [P]",
          description: `Dès qu'un buff ${BUFFS.HEALS} est activé sur un allié, a 25 % de chances de réduire d'1 tour la durée de tous les débuffs sur cet allié.`,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 480",
        "ATQ": "903",
        "DEF": "1 244",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "20"
      },
};

const aura = null;
