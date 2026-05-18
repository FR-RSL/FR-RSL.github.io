const championData = {
  type: "Soutien",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Volettement agite",
          description: `
            Attaque un ennemi. 
            Possède 80% de chances de placer un débuff <span class='gbt'>Reduction de VIT</span>
			de 30% pendant 2 tous.
			Il est impossible de resister a ce débuff
			si <span class='gold-t'>Ultan la Carapace</span> se trouve dans la meme equipe.
          `,
          damage: "4.5*ATQ",
          levelInfo: [
            "Dégâts +10%",
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +10%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Main printaniere",
          description: `
            Soigne tous tes alliés a hauteur de 30% de leurs PV MAX.<br><br>
			Augmente d'1 tour la durée de tous les buffs alliés.
          `,
          cooldown: 4,
          levelInfo: [
            "Soins +5%",
            "Soins +10%",
            "Soins +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Morphose",
          description: `
            Remplit le Compteur de Tour de tous les alliés de 30%.<br><br>
			Place également un buff <span class='gbt'>Augmentation de RES</span>
			de 50% sur tous les alliés pendant 2 tours.
          `,
          cooldown: 6,
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Sans entraves [P]",
          description: `
            Des qu'un allié perd 15% ou plus de ses PV MAX
			suite a une seule frappe, place un buff <span class='gbt'>Soins Continus</span>
			de 15% sur cet allié pendant 1 tour.
			Place un buff <span class='gbt'>Soins Continus</span> de 15% pendant 2 tours sur cet allié,
			puis l'active instantanement si <span class='gold-t'>Ultan la Carapace</span> se trouve dans la meme equipe.
          `,
          isPassive: true,
        },
      ],
      stats: {
        PV: "21 135",
        ATQ: "980",
        DEF: "1 189",
        VIT: "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "50",
        PRÉ: "0",
      },
    };

  const aura = {
    img: "../../../../../../assets/images/auras/res.webp",
    description: `
      Augmente la statistique RES des Alliés dans les Donjons de 75.
    `,
  };

