const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Doubles kamas",
          description: `Attaque 2 fois un ennemi. Place une frappe supplémentaire si ce Champion se trouve sous buff ${BUFFS.ATK}. Chaque frappe possède 20 % de chances de placer un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 2 tours.`,
          damage: "1.2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Enlèvement nocturne",
          description: `Attaque un ennemi. Place un débuff ${DEBUFFS.BLOCK_BUFFS} pendant 2 tours.

Si ce Champion se trouve sous buff ${BUFFS.ATK}, vole tous les buffs de l'ennemi ciblé avant d'attaquer.`,
          damage: "5.2*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Plus rapide que l'il",
          description: `Attaque tous les ennemis. Réduit d'1 tour le temps de recharge de cette compétence lors d'une attaque sous buff ${BUFFS.ATK}.`,
          damage: "4.5*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Désir d'assassin [P]",
          description: `Place un buff ${BUFFS.ATK} de 50 % sur ce Champion pendant 2 tours lorsque ses PV tombent sous 30 %. Il est impossible de retirer ce buff.`,
          cooldown: 3,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 680",
        "ATQ": "1 376",
        "DEF": "815",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
