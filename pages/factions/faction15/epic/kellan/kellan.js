const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Empaler et entraver",
          description: `Attaque un ennemi. Possède 30 % de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25 % pendant 2 tours.`,
          damage: "3.4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tactique de chasseur",
          description: `Attaque 2 fois un ennemi. La première frappe possède 75 % de chances de réduire le Compteur de Tour de la cible de 50 %. La seconde frappe possède 75 % de chances de placer un débuff ${DEBUFFS.SPD} de 30 % pendant 2 tours. 

Place également un buff ${BUFFS.PERFECT_VEIL} sur ce Champion pendant 2 tours.`,
          damage: "2.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Cri de la Pie",
          description: `Attaque tous les ennemis. Les dégâts augmentent de 5 % pour chaque débuff dont est affligée la cible.`,
          damage: "3.7*ATQ*(1+0.05*Target Debuffs)",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Inattendu [P]",
          description: `Ignorera les buffs ${BUFFS.SHIELD} lors d'une attaque sous buff ${BUFFS.PERFECT_VEIL}.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "13 545",
        "ATQ": "1 443",
        "DEF": "958",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
