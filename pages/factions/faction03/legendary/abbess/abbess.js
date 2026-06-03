const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Flèche de Réprimande",
          description: `Attaque 1 ennemi. Retire 1 débuff aléatoire sur ce Champion et le place sur la cible.`,
          damage: "2.8*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Empalement de Masse",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours.`,
          damage: "5.1*ATQ",
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Courroux Divin",
          description: `Attaque tous les ennemis. Les dégâts infligés sont proportionnels soit à l'ATQ de ce Champion, soit à la statistique de DÉF ou d'ATQ de la cible, selon celle qui est la plus élevée.${RETURN}${RETURN}

Inflige 30 % de DÉG C. supplémentaires si l'ATQ de la cible est plus élevée. Ignorera 30 % de la DÉF de la cible si la DÉF de la cible est la plus élevée.`,
          damage: "4.5*ATQMultiplier: TRG_ATQ*4.5Multiplier: 4.5*TRG_DEF",
          cooldown: 6,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 040",
        "ATQ": "1 564",
        "DEF": "1 079",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors des Cryptes de Faction de 34%`,
};
