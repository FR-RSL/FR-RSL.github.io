const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Boucher Lame-Main",
          description: `Attaque 2 fois un ennemi. Chaque frappe soigne ce Champion à hauteur de 30 % des dégâts infligés.${RETURN}${RETURN}

Cette attaque ne peut pas passer en critique.`,
          damage: "0.21*HP",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Étripage",
          description: `Attaque un ennemi. Lorsqu'il n'attaque pas un Boss, inflige des dégâts purs et réduit les PV de la cible de 50 %. Sinon, inflige des dégâts basés sur les PV MAX de ce Champion et place un débuff ${DEBUFFS.STUN} d'1 tour si la cible possède déjà moins de 50 % de PV.${RETURN}${RETURN}

Inflige des dégâts basés sur les PV MAX de ce Champion lorsqu'il attaque des Boss.${RETURN}${RETURN}

Cette attaque ne peut pas passer en critique.`,
          damage: "0.32*HPMultiplier: 1*HP",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Casseur d'Armure [P]",
          description: `Réduit de 50 % la valeur des buffs ${BUFFS.SHIELD} de tous les ennemis au début de chaque tour, puis augmente les PV MAX de ce Champion de la même valeur (jusqu'à 25 % de ses PV MAX).`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 975",
        "ATQ": "793",
        "DEF": "1 046",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
