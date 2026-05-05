const championData = {
  type: "PV",
      spells: [
        {
          img: "assets/sort1.png",
          name: "Vrille de racine",
          description: `
            Attaque un ennemi.<br><br>
            Augmente la valeur de tous les buffs 
            <span class='gbt'>Bouclier</span> sur ce Champion de 25%.
            Augmente également la valeur des buffs <span class='gbt'>Bouclier</span>
            sur l'allié ayant le moins de PV de 25%.<br><br>
            La valeur augmentee du buff <span class='gbt'>Bouclier</span>
            ne peut pas depasser 10 000 PV.
          `,
          damage: "0.24*PV",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +5%",
          ],
        },
        {
          img: "assets/sort2.png",
          name: "Tremble-vigne",
          description: `
            Attaque tous les ennemis.<br><br>
            Place sur tous les alliés un buff <span class='gbt'>Bouclier</span>
            equivalent a 30% des PV MAX de ce Champion pendant 2 tours.<br><br>
            Reduit d'1 tour le temps de recharde de toutes les compétences
            des alliés, sauf celles de ce Champion.
          `,
          damage: "0.27*PV",
          cooldown: 4,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.png",
          name: "Sanctuaire du Coeur-Tronc",
          description: `
            Place un buff <span class='gbt'>Invincible</span> sur tous
            les alliés pendant 2 tours.<br><br>
            Place également un buff <span class='gbt'>Bouclier</span> et un buff
            sur ce Champion pendant 2 tours.
            La valeur du <span class='gbt'>Bouclier</span> est egale a 30% 
            des PV MAX de ce Champion.
          `,
          cooldown: 6,
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.png",
          name: "Enchevetrement [P]",
          description: `
            Lorsque le Champion est attaque alors qu'il beneficie d'un buff
            <span class='gbt'>Bouclier</span>, Possède 50% de chances d'augmenter de 2 tours
            le temps de recharge d'une compétence aleatoire de l'assaillant.
            Ne se produit qu'une fois par attaque.<br><br>
            Des que les PV d'un allié tombent sous 20%,
            augmente les degats infliges par cet allié de 20%.
          `,
          levelInfo: [
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +15%",
          ],
          isPassive: true,
        },
      ],
      stats: {
        PV: "23 130",
        ATQ: "848",
        DEF: "1 189",
        VIT: "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "50",
        PRÉ: "0",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/hp.png",
    description: `
      Augmente la statistique PV des Alliés lors de toutes les Batailles de 30%.
    `,
  };

