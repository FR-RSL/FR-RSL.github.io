const championData = {
  type: "Soutien",
      spells: [
        {
          img: "assets/sort1.png",
          name: "Eclair de Fee",
          description: `
            Attaque un ennemi.<br><br>
            Active instantanement un buff <span class='gbt'>Soins Continus</span>
            aleatoire sur tous les alliés ayant moins de 85% de PV.
          `,
          damage: "3.5*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
          ],
        },
        {
          img: "assets/sort2.png",
          name: "Soin du Bois de Brume",
          description: `
            Retire tous les débuffs sur un allié cible, puis soigne cet allié de 50%
            des PV MAX de ce Champion. Ce soit peut passer en critique.<br><br>
            Si la cible alliée n'est pas totalement soignee, lui accorde un buff
            <span class='gbt'>Blocage des Degats</span> pendant 2 tours.
            Si l'allié est totalement soigné, remplit son Compteur de Tour de 50%
            et soigne tous les alliés a hauteur de 50% des soins en surplus.
          `,
          cooldown: 4,
          levelInfo: [
            "Soins +10%",
            "Soins +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.png",
          name: "Force rythmique",
          description: `
            Place un buff <span class='gbt'>Renforcer</span> de 25%
            et un buff <span class='gbt'>Soins Continus</span> de 15%
            sur tous les alliés pendant 2 tours.<br><br>
            Reduit également d'1 tour le temps de recharge de toutes les
            compétences des alliés, sauf celles de ce Champion.
          `,
          cooldown: 5,
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.png",
          name: "Egide de la Foret [P]",
          description: `
            Place pendant 2 tours un buff <span class='gbt'>Bouclier</span>
            equivalent a 15% des PV MAX de cette Championne sur l'allié
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
    img: "../../../../../../assets/images/auras/hp.png",
    description: `
      Augmente la statistique PV des Alliés lors de toutes les Batailles de 30%.
    `,
  };

