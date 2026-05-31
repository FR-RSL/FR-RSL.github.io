const championData = {
  type: "Attaque",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Courroux de Mjolnir",
          description: `Attaque 2 fois un ennemi. Possède 20 % de chances de répéter l'attaque. 

Chaque coup réduit le Compteur de Tour de la cible de 10 %.`,
          damage: "1.9*ATQ",
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Ricochet fulminant",
          description: `Attaque tous les ennemis. 

Après avoir frappé l'ennemi sélectionné initialement, tous les autres ennemis seront frappés dans un ordre aléatoire. Chaque frappe suivant la frappe initiale augmentera les dégâts infligés de 25 % (s'accumule jusqu'à 100 %). 

Ignorera les buffs ${BUFFS.BLOCK_DAMAGE} et ${BUFFS.UNKILLABLE}. Cet effet ne fonctionne pas contre les Boss.`,
          damage: "5*ATQ",
          cooldown: 4,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Marteau des cieux",
          description: `Attaque tous les ennemis. Avant d'attaquer, place un buff ${BUFFS.ATK} de 50 % et un buff ${BUFFS.CDAM} de 30 % sur ce Champion pendant 2 tours. 

Possède 75 % de chances de réduire la RÉS de chaque ennemi de 10 % de manière permanente (s'accumule jusqu'à 50 %). 

Possède également 75 % de chances de placer un débuff ${DEBUFFS.SPD} de 30 % sur tous les ennemis pendant 2 tours.`,
          damage: "4*ATQ",
          cooldown: 4,
          levelInfo: [
            "Dégâts +10%",
            "Chances de Buff/débuff +10%",
            "Chances de Buff/débuff +15%",
            "Dégâts +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Rupture céleste [P]",
          description: `À chaque fois que ce Champion inflige des dégâts, augmente le compteur de Tonnerre d'1 point (s'accumule jusqu'à 10). 

Chaque pile de Tonnerre augmente les DÉG de ce Champion de 3 % (s'accumule jusqu'à 30 %). 

Une fois que le compteur de Tonnerre atteint 10, attaque tous les ennemis et place un débuff ${DEBUFFS.STUN} pendant 1 tour. Après l'attaque, le compteur de Tonnerre se réinitialise à 0.`,
          damage: "3.8*ATQ",
          isPassive: true,
        },
      ],
      stats: {
        PV: "15 690",
        ATQ: "1 553",
        DEF: "980",
        VIT: "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "30",
        PRÉ: "10",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/attack.webp",
    description: `
      Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 30%.
    `,
  };

