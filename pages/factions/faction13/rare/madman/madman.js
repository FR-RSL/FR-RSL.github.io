const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Balafre Sauvage",
          description: `Attaque un ennemi. Possède 50 % de chances d'attaquer tous les autres ennemis avec une seconde frappe, infligeant 30 % des dégâts infligés lors de la première frappe. La seconde frappe est toujours un coup normal.`,
          damage: "3*ATQMultiplier: 0.3*Damage Ouput",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Folle Résistance",
          description: `Attaque tous les ennemis. Soigne ce Champion de 10 % des dégâts infligés si les PV actuels de ce Champion sont inférieurs à 50 %.`,
          damage: "3.4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Fente Démente",
          description: `Attaque un ennemi. Ignorera 30 % de la DÉF de la cible. Ignorera les buffs ${BUFFS.BLOCK_DAMAGE} et ${BUFFS.SHIELD}.`,
          damage: "4.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +15%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 040",
        "ATQ": "1 343",
        "DEF": "749",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
