const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Fouler aux Pieds",
          description: `Attaque 1 ennemi. Si la cible est tuée, attaquera tous les ennemis restants avec l'excédent de dégâts.`,
          damage: "Remaining Damage Amount",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Écartèlement",
          description: `Attaque 1 ennemi. Place un débuff de ${DEBUFFS.DEF}  de 60 % pendant 2 tours. Ce débuff est garanti.`,
          damage: "5.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Charge Pure",
          description: `Attaque 1 ennemi. Les dégâts augmentent en fonction du nombre de buffs se trouvant sur ce Champion.`,
          damage: "ATQ*3*(1+Active Buff Count*0.25)",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort4.webp",
          name: "Perceciel",
          description: `Attaque tous les ennemis. Ignorera les buffs ${BUFFS.SHIELD} et ${BUFFS.BLOCK_DAMAGE} ainsi que 50 % de la DÉF de la cible.`,
          damage: "4.3*ATQ",
          cooldown: 4,
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 030",
        "ATQ": "1 575",
        "DEF": "1 002",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `
Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 33%`,
};
