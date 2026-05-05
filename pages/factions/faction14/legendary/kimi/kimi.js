const championData = {
  type: "Soutien",
      spells: [
        {
          img: "assets/sort1.png",
          name: "Toucher de Dame",
          description: `
            Attaque un ennemi, puis attaque l'ennemi ayant le Compteur de Tour le plus eleve.
            Attaquera deux fois le meme ennemmi si la cible initiale Possède également le Compteur de Tour le plus eleve.
            La seconde frappe Possède 50% de chances de reduire le Compteur de Tour de la cible de 15%.
          `,
          damage: "2.4*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Chance de Buff/débuff +5%",
            "Chance de Buff/débuff +5%",
          ],
        },
        {
          img: "assets/sort2.png",
          name: "Bourrasque de Petales",
          description: `
            Attaque tous les ennemis. Possède 75% de chances de placer un débuff <span class='gbt'>Reduction de PRE</span> de 50%
            et un débuff <span class='gbt'>Reduction de VIT</span> de 30% pendant 2 tours.
            Possède également 75% de chances de reduire le Compteur de Tour de chaque cible de 15%. 
          `,
          damage: "4.2*ATQ",
          cooldown: 5,
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +15%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.png",
          name: "Flux Spirituel",
          description: `
            Retire un buff aleatoire a chaque ennemi, puis Possède 75% de chances de placer un débuff <span class='gbt'>Blocage des Buffs</span> pendant 2 tours
            sur les ennemis dont des buffs ont ete retires.<br><br>
            Remplit également le Compteur de Tour de tous les alliés de 15%, puis place un buff <span class='gbt'>Augmentation de PRE</span> de 50%
            et un buff <span class='gbt'>Augmentation de VIT</span> de 30% sur tous les alliés pendant 2 tours.
          `,
          cooldown: 6,
          levelInfo: [
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +15%",
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.png",
          name: "Imperieuse [P]",
          description: `
            Des que cette Championne place un débuff sur un ennemi, reduit également le Compteur de Tour de cet ennemi de 5% pour chaque débuff place.<br><br>
            Des que cette Championne ou qu'un allié recoit un débuff, remplit son Compteur de Tour de 5% pour chaque débuff recu.
          `,
          isPassive: true,
        },
      ],
      stats: {
        PV: "20 475",
        ATQ: "1 068",
        DEF: "1 145",
        VIT: "115",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "30",
        PRÉ: "10",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/speed.png",
    description: `
      Augmente la statistique VIT des Alliés dans la Tour du Malheur de 30%.
    `,
  };

