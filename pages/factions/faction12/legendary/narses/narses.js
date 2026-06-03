const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sceptre de corruption",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Possède 30 % de chances d'augmenter aléatoirement le temps de recharge d'une compétence de la cible de 2 tours.${RETURN}${RETURN}

Il est impossible de résister à cet effet si Ankora Reine Spectre se trouve dans la même équipe.`,
          damage: "0.24*HP",
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Souffle de profanation",
          description: `Attaque tous les ennemis. Ignorera 25 % de la DÉF de la cible. Place une frappe supplémentaire sur les cibles sous buffs ${BUFFS.SHIELD} ou ${BUFFS.STRENGTHEN}.${RETURN}${RETURN}

Les dégâts infligés par cette compétence ne peuvent pas être réduits par les Compétences Passives ou Maîtrises des ennemis, sauf les Compétences Passives des Boss. Les dégâts infligés par cette compétence ne peuvent pas non plus être augmentés par les Maîtrises de ce Champion ni les compétences Passives des alliés, sauf lors d'attaques sur les Boss.`,
          damage: "0.28*HP",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Esprits, entendez-moi",
          description: `Attaque 2 fois un ennemi. Augmente les dégâts infligés par cette compétence de 10 % pour chaque buff sur la cible (s'accumule jusqu'à 50 %) et de 10 % supplémentaires pour chaque buff sur ce Champion (s'accumule jusqu'à 50 %).${RETURN}${RETURN}

Si cette attaque tue une cible qui dispose de 3 buffs ou plus, place un débuff ${DEBUFFS.BLOCK_REA}.${RETURN}${RETURN}

Accorde également un Tour supplémentaire si cette attaque tue un ennemi lorsque Ankora Reine Spectre se trouve dans la même équipe.`,
          damage: "0.2*HP+(0.2*HP*0.1*Active Target Buffs)+(0.2*HP*0.1*Active Buff Count)",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Cape de mort-vie [P]",
          description: `Ce Champion recevra 50 % de dégâts en moins lorsqu'il se fait attaquer par les ennemis, y compris les Boss et leurs sbires, en dehors de leur tour actif.${RETURN}${RETURN}

Si Ankora Reine Spectre se trouve dans la même équipe, ce Champion ne recevra aucun dégât lorsqu'il se fait attaquer par des ennemis en dehors de leur tour actif.${RETURN}${RETURN}

[Cet effet ne s'applique pas contre les Boss et leurs sbires].${RETURN}${RETURN}

Les compétences de ce Champion ignoreront également les buffs ${BUFFS.SHIELD} et ${BUFFS.STRENGTHEN}.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "23 955",
        "ATQ": "705",
        "DEF": "1 277",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 33%`,
};
