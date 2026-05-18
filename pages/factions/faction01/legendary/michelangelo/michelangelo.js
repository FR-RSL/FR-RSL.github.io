const championData = {
  type: "Attaque",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Boo-Yah !",
          description: `
            Attaque 2 fois un ennemi.<br><br>
			Si l'une des frappes etait critique, place un buff ${BUFFS.ATK} de 50% pendant 2 tours sur ce Champion.
          `,
          damage: "2*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +5%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Livraison Express !",
          description: `
            Attaque un ennemi.
			Avant d'attaquer, a 75% de chances de placer sur la cible un debuff ${DEBUFFS.DEF} de 60% pendant 2 tours.<br><br>
			A 75% de chances de placer un debuff ${DEBUFFS.STUN} pendant 1 tour. Ignorera 25% de la RES de la cible si l'attaque est critique.<br><br>
			Applique ensuite un effet de <span class='gbt'>Propagation de Debuffs</span>, prenant tous les debuffs de la cible pour les placer sur tous les ennemis.
			Ignorera 25% de la RES de chaque cible si l'attaque initiale etait critique.
          `,
          damage: "6*ATQ",
          cooldown: 4,
          levelInfo: [
            "Chances de Buff/débuff +10%",
            "Chances de Buff/débuff +15%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Cyclone de carapace",
          description: `
            Attaque tous les ennemis.<br><br>
			A 75% de chances de placer un debuff ${DEBUFFS.ATK} de 50% et un debuff ${DEBUFFS.LEECH} pendant 2 tours.
			Ignorera 25% de la RES de chaque cible si l'attaque est critique.<br><br>
			Ensuite, place un buff ${BUFFS.TAUNT} sur ce Champion pendant 2 tours.
          `,
          damage: "5*ATQ",
          cooldown: 5,
          levelInfo: [
            "Chances de Buff/débuff +10%",
            "Chances de Buff/débuff +15%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Fetard [P]",
          description: `
            <span class='gbt'>Effet Passif</span><br><br>
			A 15% de chances d'<span class='gt'>Esquiver</span> une competence ennemie et tous les effets qui l'accompagnent.
			Si ce Champion est sous buff ${BUFFS.TAUNT}, les chances d'<span class='gt'>Esquive</span> passent a 30%.<br><br>
			Quand ce Champion attaque, les <span class='gold-t'>Leonardo</span>, <span class='gold-t'>Donatello</span>, <span class='gold-t'>Michelangelo</span> et <span class='gold-t'>Raphael</span> allies se joindront a l'attaque.<br><br>
			<span class='gbt'>Effet Actif</span><br><br>
			Place sur ce Champion un buff ${BUFFS.SHIELD} equivalent a 300% de son ATQ pendant 1 tour lorsqu'il est frappe.
          `,
          isPassive: true,
		  cooldown: 1,
        },
      ],
      stats: {
        PV: "15 360",
        ATQ: "1 520",
        DEF: "1 035",
        VIT: "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "30",
        PRÉ: "10",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/acc.webp",
    description: `
      Augmente la statistique PRE des Alliés lors de toutes les Batailles de 70.
    `,
  };

