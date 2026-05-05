const championData = {
  type: "Attaque",
      spells: [
        {
          img: "assets/sort1.png",
          name: "Brise-demon",
          description: `
            Attaque tous les ennemis.
            Avant d'attaquer, a 25% de chances
            de placer un débuff <span class='gbt'>Affaiblissement</span> de 25% pendant 2 tours.<br><br>
            A 50% de chances de placer un débuff <span class='gbt'>Affaiblissement</span> de 25%
            pendant 2 tours si la cible est membre de l'Alliance corrompue, un Boss ou un sbire.
            Les ennemies membre de l'Alliance corrompue, les Boss ou sbires ne peuvent pas resister a cet effet.<br><br>
            Accorde un Tour supplémentaire si un débuff <span class='gbt'>Affaiblissement</span> a ete place sur tous les ennemis
            par cette compétence.

          `,
          damage: "2.5*ATQ",
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +10%",
          ],
        },
        {
          img: "assets/sort2.png",
          name: "Retour dans l'abime",
          description: `
            Attaque 2 fois un ennemi.<br><br>
            Chaque frappe ignorera 25% de la DEF de la cible.
            Si la cible est membre de l'Alliance corrompue, un Boss ou un sbire,
            chaque frappe ignore au lieu de ca 50% de la DEF de la cible.<br><br>
            Chaque frappe reduit l'ATQ de la cible de 5% (s'accumule jusqu'a 25%).
            Chaque frappe augmente également l'ATQ de ce Champion de 5% (s'accumule jusqu'a 50%).
          `,
          damage: "2.4*ATQ",
          cooldown: 4,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Temps de recharge -1"
          ],
        },
        {
          img: "assets/sort3.png",
          name: "Fureur enragee",
          description: `
            Attaque 2 fois tous les ennemis.
            Avant d'attaquer, place un buff <span class='gbt'>Augmentation d'ATQ</span> de 50%
            sur ce Champion pendant 2 tours.<br><br>
            Pour chaque coup critique porte par la premiere frappe, augmente les degats infliges par la seconde frappe de 10%.
            Ignorera les buffs <span class='gbt'>Intuable</span> et <span class='gbt'>Bouclier</span>.
          `,
          damage: "2*ATQ",
          cooldown: 4,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Temps de recharge -1"
          ],
        },
        {
          img: "assets/passif1.png",
          name: "Cauchemar du Mal [P]",
          description: `
            Active la compétence <span class='gt'>Brise-demon</span> tous les cinq tours joues par ce Champion.<br><br>
            Les ennemis de l'Alliance corrompue, les Boss et les sbires ne peuvent pas porter de coup critique sur ce Champion.
          `,
          isPassive: true,
        },
      ],
      stats: {
        PV: "14 865",
        ATQ: "1 674",
        DEF: "914",
        VIT: "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "30",
        PRÉ: "0",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/attack.png",
    description: `
      Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 30%.
    `,
  };

