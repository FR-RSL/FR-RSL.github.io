const championData = {
  type: "Soutien",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Éclair de Fée",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Active instantanément un buff ${BUFFS.HEALS} aléatoire sur tous les alliés ayant moins de 85% de PV.`,
          damage: "3.5*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Soin du Bois de Brume",
          description: `Retire tous les débuffs sur un allié ciblé, puis soigne cet allié de 50% des PV MAX de ce Champion. Ce soin ne peut pas passer en critique.${RETURN}${RETURN}

Si la cible alliée n'est pas totalement soignée, lui accorde un buff ${BUFFS.BLOCK_DAMAGE} pendant 2 tours. Si l'allié est totalement soigné, remplit son Compteur de Tour de 50% et soigne tous les alliés à hauteur de 50% des soins en surplus.`,
          cooldown: 4,
          levelInfo: [
            "Soins +10%",
            "Soins +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Force rythmique",
          description: `Place un buff ${BUFFS.STRENGTHEN} de 25% et un buff ${BUFFS.HEALS} de 15% sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

Réduit également d'1 tour le temps de recharge de toutes les compétences des alliés, sauf celles de ce Champion.`,
          cooldown: 5,
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Egide de la Foret [P]",
          description: `
            Place pendant 2 tours un buff <span class='gbt'>Bouclier</span>${RETURN}
            equivalent a 15% des PV MAX de cette Championne sur l'allié${RETURN}
            ayant le moins de PV au debut du Tour de cette Championne.
          `,
          cooldown: 2,
          levelInfo: [
            "Bouclier +20%",
            "Temps de recharge -1",
          ],
          isPassive: true,
        },
      ],
      stats: {
        PV: "20 475",
        ATQ: "1 035",
        DEF: "1 178",
        VIT: "106",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "40",
        PRÉ: "0",
      },
  	};

  const aura = {
    img: "../../../../../../assets/images/auras/hp.webp",
    description: `
      Augmente la statistique PV des Alliés lors de toutes les Batailles de 30%.
    `,
  };

