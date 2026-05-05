const championData = {
  type: "Soutien",
      spells: [
        {
          img: "assets/sort1.png",
          name: "Poussee d'ambre",
          description: `
            Attaque un ennemi.
            Possède 50% de chances d'activer instantanement un buff
            <span class='gbt'>Soins continus</span> sur chaque allié.
          `,
          damage: "4.3*ATQ",
          levelInfo: [
            "Dégâts +10%",
            "Chances de Buff/débuff +5%",
            "Dégâts +10%",
            "Chances de Buff/débuff +5%"
          ],
        },
        {
          img: "assets/sort2.png",
          name: "Touche d'or",
          description: `
            Place un buff <span class='gbt'>Augmentation de VIT</span> de 30% 
            et deux buffs <span class='gbt'>Soins continus</span> de 15% sur tous
            les alliés pendant 2 tours.<br><br>
            Remplit également le Compteur de Tour de tous les alliés de 20%.
          `,
          cooldown: 5,
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.png",
          name: "Oree de la mort",
          description: `
            Ranime tous les alliés morts avec 50% de PV et 50% de Compteur de Tour.<br><br>
            Fait ensuite equipe avec tous les alliés reanimes par cette compétence pour 
            attaquer l'ennemi ayant le moins de PV. Les alliés qui rejoignent l'attaque utiliseront
            leurs compétences par defaut.
          `,
          cooldown: 6,
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.png",
          name: "Lueur curative [P]",
          description: `
            Des qu'un buff <span class='gbt'>Soins continus</span> s'active
            sur n'importe quel allié, remplit les Compteurs de Tour de tous les alliés de 5%.<br><br>
            A la fin du tour de cette Championne, augmente d'1 tour la durée d'un buff <span class='gbt'>Soins continus</span> 
            sur un allié aleatoire, sauf cette Championne.
          `,
          isPassive: true,
        },
      ],
      stats: {
        PV: "18 990",
        ATQ: "1 112",
        DEF: "1 200",
        VIT: "113",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "40",
        PRÉ: "0",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/speed.png",
    description: `
      Augmente la statistique VIT des Alliés lors de toutes les Batailles de 19%.
    `,
  };

