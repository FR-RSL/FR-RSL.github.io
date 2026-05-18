const championData = {
  type: "Soutien",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Racine-serpent",
          description: `
            Attaque un ennemi.
            Possède 25% de chances de reduire de 2 tours le temps de recharge
            d'une compétence active aleatoire d'un allié.
          `,
          damage: "3.3*ATQ",
          levelInfo: [
            "Dégâts +10%",
            "Chance de Buff/débuff +10%",
            "Dégâts +10%",
            "Chance de Buff/débuff +15%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Spores de destinee",
          description: `
            Fait equipe avec tous les alliés pour attaquer un seul ennemi.
            Les alliés qui rejoignent l'attaque utiliseront leurs compétences par defaut.<br><br>
            Retablit également totalement les PV MAX detruits de tous les alliés
            et place un buff <span class='gbt'>Soins continus</span> de 15%
            sur tous les alliés pendant 2 tours.
          `,
          cooldown: 6,
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Rythme exaltant",
          description: `
            Remplit le Compteur de Tour de tous les alliés de 20%.<br><br>
            Retire ensuite tous les débuffs de tous les alliés et place un buff
            <span class='gbt'>Augmentation de VIT</span> de 30% sur tous les alliés pendant 2 tours.
          `,
          cooldown: 5,
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Magie du Grand Chene [P]",
          description: `
            Au debut du tour de ce Champion, place un buff sur chaque allié
            pendant 1 tour, en fonction de son Type :<br><br>
            ATQ : un buff <span class='gbt'>Augmentation d'ATQ</span> de 50%.<br><br>
            DEF : un buff <span class='gbt'>Augmentation de DEF</span> de 60%.<br><br>
            Soutien : un buff <span class='gbt'>Augmentation de PRE</span> de 50%.<br><br>
            PV : un buff <span class='gbt'>Bouclier</span> equivalent a 30% des PV MAX de l'allié.
          `,
          cooldown: 1,
          isPassive: true,
        },
      ],
      stats: {
        PV: "17 670",
        ATQ: "1 200",
        DEF: "1 200",
        VIT: "112",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "40",
        PRÉ: "0",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/speed.webp",
    description: `
      Augmente la statistique VIT des Alliés dans les Donjons de 25%.
    `,
  };

