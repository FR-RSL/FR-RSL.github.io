const championData = {
  type: "Attaque",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Brochette d'egout",
          description: `
            Attaque 2 fois un ennemi.<br><br>
			Place un debuff ${DEBUFFS.BLOCK_REA} si la cible est tuee.<br><br>
			Chaque coup critique remplit le Compteur de Tour de ce Champion de 10%.
          `,
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
          name: "Ricochet fulminant",
          description: `
            Attaque tous les ennemis.<br><br>
			Ignorera les buffs ${BUFFS.SHIELD} et ${DEBUFFS.BLOCK_DAMAGE} en cas d'attaque sous debuff ${DEBUFFS.BERSERK} place par ce Champion.
			Si ce Champion n'est pas sous debuff ${DEBUFFS.BERSERK} place par lui-meme, les degats infliges contre les ennemis sous buffs ${BUFFS.SHIELD} sont augmentes de 50%.<br><br>
			Chaque coup critique remplit le Compteur de Tour de ce Champion de 10%.
          `,
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
          name: "Pas aujourd'hui, cretin !",
          description: `
            Attaque 3 fois un ennemi.<br><br>
			Chaque frappe ignorera 20% de la DEF de la cible.<br><br>
			Place un buff ${BUFFS.PERFECT_VEIL} et un buff ${BUFFS.UNKILLABLE} sur ce Champion pendant 2 tours si la cible est tuee.
			Si la cible survit, place un debuff ${DEBUFFS.BERSERK} sur ce Champion pendant 2 tours.
			Il est impossible de bloquer ce debuff et d'y resister.
          `,
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
          description: `
            Quand ce Champion attaque, les <span class='gold-t'>Leonardo</span>, <span class='gold-t'>Donatello</span>, <span class='gold-t'>Michelangelo</span> et <span class='gold-t'>Raphael</span> allies se joindront a l'attaque.<br><br>
			Place un debuff ${DEBUFFS.BERSERK} sur ce Champion pendant 1 tour des qu'un Champion meurt.<br><br>
			A 20% de chances d'accorder un Tour supplementaire lors d'une attaque sous debuff ${DEBUFFS.BERSERK} place par ce Champion.
          `,
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

