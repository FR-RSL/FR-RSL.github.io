const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Coups effrénés",
          description: `Attaque 2 fois un ennemi.

Si ce Champion se trouve sous buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}, chaque frappe possède 50 % de chances de réduire le Compteur de Tour de la cible de 15 %.

Place un buff ${BUFFS.ATK} de 50 % pendant 2 tours sur ce Champion si l'attaque passe en critique.`,
          damage: "1.7*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Renversement",
          description: `Attaque 3 fois un ennemi.

Si la cible se trouve sous débuff ${DEBUFFS.HEX}, chaque frappe ignorera 25 % de la DÉF de la cible. Ignorera 25 % supplémentaires de la DÉF de la cible si elle se trouve également sous débuff ${DEBUFFS.SPD}.

Ignorera également 25 % supplémentaires de la DÉF de la cible si elle fait partie de la Faction des Seigneurs de l'Oriflamme ou des Revenants Chevaliers.`,
          damage: "1.95*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Chasseur de Sorcières",
          description: `Attaque 4 fois de façon aléatoire. 

Chaque frappe possède 75 % de chances de placer un débuff ${DEBUFFS.HEX} pendant 3 tours et un débuff ${DEBUFFS.SPD} de 30 % pendant 2 tours. Les Champions des Factions des Seigneurs de l'Oriflamme et des Revenants Chevaliers ne peuvent pas résister à ces débuffs. 

Chaque frappe possède également 75 % de chances de voler 25 % du Compteur de Tour de la cible. Si la cible fait partie de la Faction des Seigneurs de l'Oriflamme ou des Revenants Chevaliers, vole au lieu de ça 50 % du Compteur de Tour.

Place également un buff ${BUFFS.PERFECT_VEIL} sur ce Champion pendant 2 tours.`,
          damage: "1.75*ATQ",
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Ruse de Chasseur [P]",
          description: `Si ce Champion attaque une cible affligée d'un débuff ${DEBUFFS.HEX} et d'un débuff ${DEBUFFS.SPD}, place un buff ${BUFFS.PERFECT_VEIL} sur ce Champion pendant 1 tour. Cet effet ne s'activera pas lors d'une contre-attaque.

Augmente également les DÉG C. de ce Champion de 30 % lorsqu'il attaque en bénéficiant d'un buff ${BUFFS.PERFECT_VEIL}.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 195",
        "ATQ": "1 509",
        "DEF": "1 057",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
