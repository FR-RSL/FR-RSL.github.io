const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Morsure au Cou",
          description: `Attaque 1 ennemi. Ignorera le ${BUFFS.SHIELD} et les buffs de ${BUFFS.BLOCK_DAMAGE}. Ignorera la DÉF si cette attaque passe en critique.`,
          damage: "2.6*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Ronger",
          description: `Attaque 1 ennemi. Place un débuff de ${DEBUFFS.POISON} de 5% pendant 2 tours. Les dégâts infligés sont proportionnels à la DÉF.`,
          damage: "7.5*DEF",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "10 740",
        "ATQ": "914",
        "DEF": "573",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
