const championData = {
  type: "Attaque",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Sourire d'Hephraak",
          description: `
            Attaque un ennemi. Place un coup supplémentaire si cette attaque passe en critique.
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
          name: "Mepris d'Hephraak",
          description: `
            Attaque tous les ennemis. Place une frappe supplémentaire sur les cibles ayant moins de 50% de PV
			apres la premiere frappe. Chaque frappe ignorera 15% de la DEF de la cible.
          `,
          cooldown: 4,
          damage: "3.6*ATQ",
          levelInfo: [
          	"Dégâts +10%",
            "Dégâts +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Megalomanie",
          description: `
            Place un buff <span class='gbt'>Augmentation d’ATQ</span> de 50% et un buff 
			<span class='gbt'>Augmentation du TAUX C.</span> de 30% sur ce Champion pendant 3 tours,
			puis accorde un Tour supplémentaire.
          `,
          cooldown: 6,
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Prince de fierte [P]",
          description: `
            Dés qu'un allié est tué par un ennemi, active instantanément la compétence
			<span class='gt'>Mépris d’Héphraak</span>. Ne placera pas cette compétence en temps de recharge.<br><br>
			Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée.
          `,
		  cooldown: 5,
          levelInfo: [
            "Temps de recharge -1",
          ],
          isPassive: true,
        },
      ],
      stats: {
        PV: "14 535",
        ATQ: "1 553",
        DEF: "1 057",
        VIT: "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "40",
        PRÉ: "0",
      },
  };

  	const aura = null;

