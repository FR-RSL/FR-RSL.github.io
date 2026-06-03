const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bourreau des Coeurs",
          description: `Attaque tous les ennemis. Dégâts augmentés de 15 % si la cible souffre de débuffs.`,
          damage: "2.5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Flammes de Passion",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.BURN} pendant 2 tours.`,
          damage: "4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Tocade",
          description: `Place, pendant 2 tours, un buff d'${BUFFS.ATK} de 50 %, puis attaque un ennemi.${RETURN}${RETURN}

Possède 50 % de chances de placer un débuff de ${DEBUFFS.BURN} de 2 tours sur tous les ennemis si cette attaque tue un ennemi. Il est impossible de résister à ce débuff.`,
          damage: "6.6*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Partenaire Punitif [P]",
          description: `Les attaques infligent 25 % de dégâts supplémentaires.${RETURN}${RETURN}

Contre-attaque toujours lorsqu'il est attaqué.${RETURN}${RETURN}

[Uniquement disponible lorsque Vénus se trouve dans la même équipe.]`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 825",
        "ATQ": "1 520",
        "DEF": "804",
        "VIT": "107",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 33%`,
};
