const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Je te tiens !",
          description: `Attaque un ennemi. Possède 25 % de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour. Ces chances passent à 50 % si la cible possède des buffs.`,
          damage: "3.5*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Bâton à miracles",
          description: `Attaque un ennemi. Ignorera 50 % de la DÉF de la cible. 

Si la cible est tuée, attaquera tous les ennemis restants avec l'excédent de dégâts. Chaque frappe ignorera également 50 % de la DÉF de la cible. Cette attaque ne peut pas passer en critique. 

Si la cible initiale survit, lui inflige un débuff ${DEBUFFS.SHEEP} pendant 1 tour. Il est impossible de bloquer ce débuff.`,
          damage: "5*ATQMultiplier: Remaining Damage Amount",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Et là tu nous vois",
          description: `Attaque tous les ennemis. Avant d'attaquer, vole tous les buffs de tous les ennemis, puis leur inflige un débuff ${DEBUFFS.BLOCK_BUFFS} pendant 2 tours.`,
          damage: "3.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Invincible Wukong [P]",
          description: `Ranime ce Champion avec 100 % de PV et 100 % de Compteur de tour 3 tours après qu'il s'est fait tuer.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 515",
        "ATQ": "1 586",
        "DEF": "892",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors des batailles d'Arène de 28%`,
};
