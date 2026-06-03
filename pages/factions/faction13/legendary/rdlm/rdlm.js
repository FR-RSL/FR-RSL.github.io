const championData = {
  type: "Attaque",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Fente Fracassante",
          description: `
            Attaque un ennemi.<br><br>${RETURN}
            Remplit le Compteur de Tour de ce Champion de 10%.${RETURN}
            Remplit le Compteur de Tour de ce Champion de 2%${RETURN}
            supplémentaires pour chaque buff sur la cible.
          `,
          damage: "0.27*PV + 1*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +5%"
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Hache Enchantee",
          description: `
            Attaque un ennemi.<br><br>${RETURN}
            Ignorera 50% de la DEF de la cible.<br><br>${RETURN}
            Accorde un Tour supplémentaire si cette attaque tue un ennemi.
          `,
          damage: "0.3*PV + 1.8*ATQ",
          cooldown: 5,
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +10%",
            "Dégâts +10%",
            "Temps de recharge -1"
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Force Royale",
          description: `
            Attaque tous les ennemis.<br><br>${RETURN}
            Ignorera les buffs <span class='gbt'>Bouclier</span>,${RETURN}
            <span class='gbt'>Renforcer</span>, <span class='gbt'>Intuable</span>,${RETURN}
            <span class='gbt'>Protection d'allié</span> et${RETURN}
            <span class='gbt'>Blocage des Degats</span>.<br><br>${RETURN}
            Reduit de 2 tours le Temps de recharge de la compétence <span class='gt'>Hache Enchantee</span>${RETURN}
            si cette attaque tue un ennemi.
          `,
          damage: "0.35*PV + 1.8*ATQ",
          cooldown: 5,
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Temps de recharge -1"
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Habilete Fabuleuse [P]",
          description: `
            Augmente de 50% l'ATQ de ce Champion a chaque fois que ce Champion tue un ennemi.${RETURN}
            S'additionne jusqu'a 100%.<br><br>${RETURN}
            Immunise contre les débuffs <span class='gbt'>Reduction d'ATQ</span> et <span class='gbt'>Blocage des compétences Actives</span>.
          `,
          isPassive: true,
        },
      ],
      stats: {
        PV: "31 050",
        ATQ: "1 432",
        DEF: "1 112",
        VIT: "95",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "90",
        PRÉ: "0",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/attack.webp",
    description: `
      Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 25%.
    `,
  };

