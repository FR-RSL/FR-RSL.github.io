const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Acier Fétide",
          description: `Attaque 1 ennemi. Inflige 30 % de dégâts supplémentaires si la cible possède des buffs. Ignorera le ${BUFFS.SHIELD} et les buffs de ${BUFFS.BLOCK_DAMAGE}.`,
          damage: "3.4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Démonter",
          description: `Attaque 3 fois au hasard. Chaque frappe possède 75 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours. Chaque frappe ignorera également 15 % de la DÉF de la cible.`,
          damage: "2.2*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Pas si Vite",
          description: `Attaque un ennemi. Ignorera 50 % de la DÉF de la cible si ce Champion dispose d'une VIT plus élevée que celle de la cible.`,
          damage: "4.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 865",
        "ATQ": "1 421",
        "DEF": "892",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors des Cryptes de Faction de 20%`,
};
