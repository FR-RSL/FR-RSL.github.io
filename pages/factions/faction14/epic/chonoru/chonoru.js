const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Floraison Nocturne",
          description: `Attaque un ennemi. Possède 40 % de chances de placer un débuff ${DEBUFFS.BLOCK_BUFFS} pendant 2 tours.`,
          damage: "3.55*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Règne de Terreur",
          description: `Attaque 3 fois au hasard. Chaque frappe possède 75 % de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25 % pendant 2 tours.`,
          damage: "1.9*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Dévoiler",
          description: `Retire tous les buffs ${BUFFS.DEF} sur tous les ennemis, puis attaque tous les ennemis. 

Réduit d'1 tour le temps de recharge de Dévoiler pour chaque ennemi tué par cette compétence.`,
          damage: "3.6*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 555",
        "ATQ": "1 509",
        "DEF": "958",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
