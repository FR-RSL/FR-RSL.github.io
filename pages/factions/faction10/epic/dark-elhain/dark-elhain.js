const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Éclair Nécrotique",
          description: `Attaque un ennemi. Détruit les PV MAX de la cible de 30 % des dégâts infligés.`,
          damage: "3.1*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Majesté de la Mort",
          description: `Place, pendant 2 tours, un buff ${BUFFS.ATK} de 50 % sur cette Championne, puis attaque tous les ennemis. Possède 50 % de chances de placer un débuff ${DEBUFFS.SPD} de 30 % pendant 2 tours.`,
          damage: "3.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Hiver Mortel [P]",
          description: `Remplit de 25 % le Compteur de Tour de cette Championne et active instantanément la Compétence [Majesté de la Mort] dès que cette Championne, ou un allié, reçoit un débuff ${DEBUFFS.GEL}.`,
          cooldown: 1,
          isPassive: true
        },
        {
          img: "assets/passif1.webp",
          name: "Veines de Glace [P]",
          description: `Retire instantanément les débuffs ${DEBUFFS.GEL} sur cette Championne et les remplace par un buff ${BUFFS.CRATE} de 30 %, un buff ${BUFFS.CDAM} de 30 % et un buff ${BUFFS.STRENGTHEN} de 15 % dès qu'un ennemi place un débuff ${DEBUFFS.GEL} sur cette Championne.`,
          cooldown: 1,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 010",
        "ATQ": "1 365",
        "DEF": "804",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
