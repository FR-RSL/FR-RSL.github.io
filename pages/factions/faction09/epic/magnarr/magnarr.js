const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Marteau Surchauffé",
          description: `Attaque un ennemi. Possède 45 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours. Sinon, possède 100 % de chances si la cible est affligée d'un débuff ${DEBUFFS.BURN}.`,
          damage: "0.23*PV",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Frappe Percutante",
          description: `Attaque tous les ennemis. Place une frappe supplémentaire sur les ennemis sans débuff ${DEBUFFS.BURN}. Possède 50 % de chances de placer un débuff ${DEBUFFS.STUN} d'1 tour sur les ennemis affligés de débuffs ${DEBUFFS.BURN}.`,
          damage: "0.22*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Attiser les Flammes",
          description: `Attaque un ennemi. Applique un effet de ${PROP_DEBUFF} qui prend 2 débuffs aléatoires de la cible pour les placer sur tous les ennemis sous débuff ${DEBUFFS.BURN}. Augmente également d'1 tour la durée des débuffs ${DEBUFFS.BURN} sur tous les ennemis.${RETURN}${RETURN}

[Ne propagera pas les débuffs ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.GEL}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.SLEEP} ou ${DEBUFFS.STUN}.]`,
          damage: "0.37*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Fond les Chairs [P]",
          description: `Ce Champion soigne à hauteur d'1 % de ses PV MAX chaque fois qu'un Champion participant à la bataille subit des dégâts dus à un débuff ${DEBUFFS.BURN}.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 970",
        "ATQ": "837",
        "DEF": "1 068",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors de la Tour du Malheur de 30%`,
};
