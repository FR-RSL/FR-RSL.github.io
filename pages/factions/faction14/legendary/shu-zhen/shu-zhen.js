const championData = {
  type: "Soutien",
      spells: [
        {
          img: "assets/sort1.png",
          name: "Lance de providence",
          description: `
            Attaque un ennemi. Possède 30% de chance de placer un débuff
            <span class='gbt'>Blocage des compétences Actives</span> pendant 2 tours.<br><br>
            Possède également 80% de chances de voler 20% du Compteur de Tour de la cible
            si cette derniere se trouve deja sous un débuff <span class='gbt'>Blocage des compétences Actives</span>.
          `,
          damage: "3.5*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Chance de Buff/débuff +5%",
            "Dégâts +5%",
            "Chance de Buff/débuff +5%",
            "Chance de Buff/débuff +10%",
          ],
        },
        {
          img: "assets/sort2.png",
          name: "Petales de purge",
          description: `
            Cible un allié.
            Si l'allié cible ne se trouve pas sous débuff <span class='gbt'>Mouton</span>
            lui accorde un buff <span class='gbt'>Augmentation d'ATQ</span> de 50%,
            un buff <span class='gbt'>Augmentation du TAUX C.</span> de 30% et un buff
            <span class='gbt'>Augmentation des DEG C.</span> de 30% pendant 2 tours.<br><br>
            Active ensuite un effet <span class='gbt'>Tour instantane</span> sur l'allié cible.<br><br>
            Si l'allié cible se trouve sous débuff <span class='gbt'>Mouton</span>, retire ce dernier.
          `,
          cooldown: 5,
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.png",
          name: "Charge de la Brave",
          description: `
            Remplit le Compteur de Tour de tous les alliés de 20% et leur accorde un buff
            <span class='gbt'>Augmentation de VIT</span> de 30% pendant 2 tours.<br><br>
            Possède également 100% de chances de reduire le Compteur de Tour de tous
            les ennemis de 20% et de leur placer un débuff
            <span class='gbt'>Reduction de VIT</span> de 30% pendant 2 tours.
          `,
          cooldown: 6,
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.png",
          name: "Vue souveraine [P]",
          description: `
            Augmente la PRE de cette Championne a hauteur de la quantite de VIT qu'elle Possède.
          `,
          isPassive: true,
        },
      ],
      stats: {
        PV: "21 645",
        ATQ: "826",
        DEF: "1 310",
        VIT: "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "30",
        PRÉ: "10",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/speed.png",
    description: `
      Augmente la statistique VIT des Alliés dans les batailles d'Arene de 30%.
    `,
  };

