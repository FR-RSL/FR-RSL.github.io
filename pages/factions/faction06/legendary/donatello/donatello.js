const championData = {
  type: "Soutien",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Frappe Audacieuse",
          description: `
            Attaque un ennemi.<br><br>
			Soigne tous tes allies a hauteur de 5% des PV MAX de ce Champion.<br><br>
			Active instantanement un buff ${BUFFS.HEALS} aleatoire sur tous les allies.
          `,
          damage: "0.25*PV",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +10%",
            "Soins +10%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Traumatisant",
          description: `
            Attaque tous les ennemis.<br><br>
			Reduit de 2 tours les temps de recharge de toutes les competences des allies, sauf celles de ce Champion.
			Le temps de recharge de cette competence ne peut pas etre reduit par d'autres effets de reduction du temps de recharge.<br><br>
			Place un buff ${BUFFS.SPD} de 30% sur tous les allies pendant 2 tours.
          `,
          damage: "0.24*PV",
          cooldown: 6,
          levelInfo: [
            "Dégâts +20%",
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Les heros sont de retour",
          description: `
            Retire tous les debuffs sur tous les allies.<br><br>
			Place un buff ${BUFFS.HEALS} de 15% et un buff ${BUFFS.STRENGTHEN} de 25% sur tous les allies pendant 2 tours.<br><br>
			Remplit egalement le Compteur de Tour de tous les allies de 20%.
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
          name: "Je te couvre, frerot ! [P]",
          description: `
            <span class='gbt'>Effet Passif</span><br><br>
			Quand ce Champion attaque, les <span class='gold-t'>Leonardo</span>, <span class='gold-t'>Donatello</span>, <span class='gold-t'>Michelangelo</span> et <span class='gold-t'>Raphael</span> allies se joindront a l'attaque.<br><br>
			<span class='gbt'>Effet Actif</span><br><br>
			Des qu'un allie est sur le point de recevoir un coup fatal, ce Champion empeche la mort de cet allie et le garde en vie avec 1 PV. Egalise ensuite les PV de cet allie.
			Le niveau de PV de cet allie sera ramene au niveau de PV moyen de l'equipe.
			Si plusieurs Champions de l'equipe disposent de cette Competence, une seule sera activee. Cette competence ne s'activera pas sur les copies en double de ce Champion si ce Champion specifique est mort.
          `,
          isPassive: true,
          cooldown: 6,
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
      ],
      stats: {
        PV: "21 810",
        ATQ: "1 013",
        DEF: "1 112",
        VIT: "108",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "45",
        PRÉ: "0",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/hp.webp",
    description: `
      Augmente la statistique PV des Alliés lors de toutes les Batailles de 30%.
    `,
  };

