const championData = {
  type: "Attaque",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Serres auriques",
          description: `Attaque 2 fois un ennemi. 

Si la cible se trouve sous buff ${BUFFS.SHIELD}, chaque frappe a 25 % de chances de réduire la valeur du ${BUFFS.SHIELD} de 10 %. Ignorera également 50 % de la RÉS de la cible si la cible fait partie de l'Alliance corrompue. Si la cible ne se trouve pas sous débuff ${BUFFS.SHIELD}, chaque frappe ignorera 10 % de la DÉF de la cible.`,
          damage: "2.1*ATQ",
          levelInfo: [
            "Dégâts +10%",
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +15%"
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Intercepter la menace",
          description: `Attaque 2 fois un ennemi. 

Chaque frappe a 100 % de chances de retirer 2 buffs aléatoires à la cible. Ignorera également 50 % de la RÉS de la cible si la cible fait partie de l'Alliance corrompue. Cette compétence inflige une quantité de dégâts supplémentaires équivalente à la valeur du Compteur de Tour actuel de la cible (s'accumule jusqu'à 100 %).`,
          damage: "3*ATQ",
          cooldown: 5,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Guerrière vénérée",
          description: `Attaque 2 fois tous les ennemis. 

La première frappe a 75 % de chances de placer un débuff ${DEBUFFS.HEALS} de 100 % pendant 2 tours. La seconde frappe a 50 % de chances de placer un débuff ${DEBUFFS.BLOCK_BUFFS} pendant 2 tours. Ignorera également 50 % de la RÉS de la cible si la cible fait partie de l'Alliance corrompue.`,
          damage: "2*ATQ",
          cooldown: 4,
          levelInfo: [
            "Dégâts +20%",
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +15%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Fléau du mal [P]",
          description: `Reçoit 15 % de dégâts en moins de la part des ennemis sous débuff ${DEBUFFS.HEALS}. 

Remplit le Compteur de Tour de cette Championne de 5 % dès qu'un ennemi reçoit un buff ${BUFFS.SHIELD} ou est soigné.`,
          isPassive: true,
        },
      ],
      stats: {
        PV: "16 515",
        ATQ: "1 520",
        DEF: "958",
        VIT: "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "30",
        PRÉ: "10",
      },
    };

  	const aura = {
    img: "../../../../../../assets/images/auras/attack.webp",
    description: `
      Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 25%.
    `,
  };

