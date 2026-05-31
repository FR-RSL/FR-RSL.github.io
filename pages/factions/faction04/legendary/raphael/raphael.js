const championData = {
  type: "Attaque",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Brochette d'égout",
          description: `Attaque 2 fois un ennemi. 

Place un débuff ${DEBUFFS.BLOCK_REA} si la cible est tuée. 

Chaque coup critique remplit le Compteur de Tour de ce Champion de 10 %.`,
          damage: "2.2*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +5%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Claque sismique",
          description: `Attaque tous les ennemis. 

Ignorera les buffs ${BUFFS.SHIELD} et ${BUFFS.BLOCK_DAMAGE} en cas d'attaque sous débuff ${DEBUFFS.BERSERK} placé par ce Champion. Si ce Champion n'est pas sous débuff ${DEBUFFS.BERSERK} placé par lui-même, les dégâts infligés contre les ennemis sous buffs ${BUFFS.SHIELD} sont augmentés de 50 %. 

Chaque coup critique remplit le Compteur de Tour de ce Champion de 10 %.`,
          damage: "4.3*ATQ",
          cooldown: 4,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Pas aujourd'hui, crétin !",
          description: `Attaque 3 fois un ennemi. 

Chaque frappe ignorera 20 % de la DÉF de la cible. 

Place un buff ${BUFFS.PERFECT_VEIL} et un buff ${BUFFS.UNKILLABLE} sur ce Champion pendant 2 tours si la cible est tuée. Si la cible survit, place un débuff ${DEBUFFS.BERSERK} sur ce Champion pendant 2 tours. Il est impossible de bloquer ce débuff et d'y résister.`,
          damage: "2*ATQ",
          cooldown: 4,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Tabassage de NYC [P]",
          description: `Dès que Leonardo, Donatello, Michelangelo ou Raphael attaque, ce Champion se joint à cette attaque. 

Place un débuff ${DEBUFFS.BERSERK} sur ce Champion pendant 1 tour dès qu'un Champion meurt. 

A 20 % de chances d'accorder un Tour supplémentaire lors d'une attaque sous débuff ${DEBUFFS.BERSERK} placé par ce Champion.`,
          isPassive: true,
        },
      ],
      stats: {
        PV: "16 515",
        ATQ: "1 498",
        DEF: "980",
        VIT: "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "30",
        PRÉ: "0",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/attack.webp",
    description: `
      Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 30%.
    `,
  };

