const championData = {
  type: "Attaque",
      spells: [
        {
          img: "assets/sort1.png",
          name: "Fente eclatente",
          description: `
            Attaque 2 fois un ennemi.
            Les degats augmentent de 5% pour chaque buff sur la cible.<br><br>
            Chaque frappe a 35% de chances de placer un débuff
            <span class='gbt'>Etourdissement</span> pendant 1 tour.
          `,
          damage: "1.75*ATQ",
          levelInfo: [
            "Dégâts +10%",
            "Chances de Buff/débuff +5%",
            "Dégâts +10%",
            "Chances de Buff/débuff +10%"
          ],
        },
        {
          img: "assets/sort2.png",
          name: "Force de miroitement",
          description: `
            Attaque 2 fois un ennemi.
            Les degats infliges par cette compétence augmentent de 10%
            par tranche de 10% de PV perdus par ce Champion.<br><br>
            Si la cible beneficie de 2 buffs ou plus, ignorera également 35% de la DEF de la cible.<br><br>
            Accorde un Tour supplémentaire si cette attaque tue un ennemi.
          `,
          damage: "2.7*ATQ",
          cooldown: 5,
          levelInfo: [
            "Dégâts +10%",
            "Temps de recharge -1",
            "Dégâts +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.png",
          name: "Courroux de Hrothglime",
          description: `
            Attaque tous les ennemis.
            Ignorera les buffs <span class='gbt'>Augmentation de DEF</span>,
            <span class='gbt'>Renforcer</span> et <span class='gbt'>Bouclier</span>.<br><br>
            Si cette attaque tue au moins 1 ennemi, reduit le Compteur de Tour de tous les ennemis de 50%.
            Il est impossible de resister a cet effet.
          `,
          damage: "3.4*ATQ",
          cooldown: 6,
          levelInfo: [
            "Dégâts +10%",
            "Temps de recharge -1",
            "Dégâts +15%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.png",
          name: "Roi dore [P]",
          description: `
            <span class='gbt'>Effet Passif</span><br><br>
            Augmente l'ATQ de ce Champion de 5% pour chaque buff actif
            sur l'equipe ennemie (s'accumule jusqu'a 100%).<br><br>
            <span class='gbt'>Effet Actif</span><br><br>
            Empeche la mort de ce Champion et le garde vivant avec 1 PV lorsqu'il
            est frappe par un coup fatal. Lui accorde un buff
            <span class='gbt'>Peau de Pierre</span> pendant 1 tour.
            Active ensuite la compétence <span class='gbt'>Courroux de Hrothglime</span>.
            Ceci ne placera pas la compétence <span class='gbt'>Courroux de Hrothglime</span> en temps de recharge.<br><br>
            Si plusieurs Champions de l'equipe disposent de cette compétence,
            cet effet ne sera active qu'une fois.
          `,
          cooldown: 4,
          isPassive: true,
        },
      ],
      stats: {
        PV: "15 855",
        ATQ: "1 586",
        DEF: "936",
        VIT: "103",
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

