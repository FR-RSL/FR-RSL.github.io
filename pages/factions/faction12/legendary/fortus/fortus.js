const championData = {
  type: "Defense",
      spells: [
        {
          img: "assets/sort1.png",
          name: "Avant-gout d'oubli",
          description: `
            Attaque un ennemi.
            Possède 35% de chances de placer un débuff <span class='gbt'>Peur</span> pendant 1 tour.<br><br>
            Cette attaque passera toujours en critique si la cible se trouve sous débuff 
            <span class='gbt'>Peur</span> ou <span class='gbt'>Peur Absolue</span>.
            `,
          damage: "3*DEF",
          levelInfo: [
            "Dégâts +5%",
            "Chances de Buff/débuff +5%",
            "Dégâts +10%",
            "Chances de Buff/débuff +10%"
          ],
        },
        {
          img: "assets/sort2.png",
          name: "Horreurs de l'au-dela",
          description: `
            Attaque tous les ennemis.
            Possède 80% de chances de placer un débuff <span class='gbt'>Peur Absolue</span> pendant 1 tour.
            Les cibles sous débuff <span class='gbt'>Peur</span> ne peuvent pas resister a ce débuff.
            `,
          damage: "3.8*DEF",
          cooldown: 4,
          levelInfo: [
            "Chances de Buff/débuff +10%",
            "Dégâts +10%",
            "Chances de Buff/débuff +10%",
            "Temps de recharge -1"
          ],
        },
        {
          img: "assets/sort3.png",
          name: "Terreurs astrales",
          description: `
            Attaque tous les ennemis.
            Ignorera 30% de la DEF de chaque cible contre les cibles sous débuffs
            <span class='gbt'>Peur</span> ou <span class='gbt'>Peur Absolue</span>.
            Cette attaque passera toujours en critique contre les cibles sous débuffs
            <span class='gbt'>Peur</span> ou <span class='gbt'>Peur Absolue</span>.<br><br>
            Les degats de cette compétences sont augmentés de 10% chaque fois qu'un débuff 
            <span class='gbt'>Peur</span> ou <span class='gbt'>Peur Absolue</span> est placé sur un ennemi.<br><br>
            [Cette compétence Possède 40% de chances d'etre debloquee pendant 1 tour des qu'un débuff
            <span class='gbt'>Peur</span> ou <span class='gbt'>Peur Absolue</span> est placé sur un ennemi.]<br><br>
          `,
          damage: "3.5*DEF",
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Dégâts +10%"
          ],
        },
        {
          img: "assets/passif1.png",
          name: "Etoiles alignees [P]",
          description: `
            <span class='gbt'>Effet Passif</span><br><br>
            Augmente de 15% les chances que les compétences des ennemis echouent lorsqu'ils sont sous
            débuffs <span class='gbt'>Peur</span> ou <span class='gbt'>Peur Absolue</span>.<br><br>
            <span class='gbt'>Effet Actif</span><br><br>
            Empeche la mort de ce Champion et le maintient en vie avec 1 PV lorsqu'il est frappe par un coup fatal,
            puis retire tous les buffs et débuffs de ce Champion. Apres avoir empeche la mort de ce Champion,
            le soigne totalement et epuise totalement son Compteur de Tour.<br><br>
            Possède ensuite 80% de chances de placer un débuff <span class='gbt'>Peur</span> sur tous les ennemis pendant 1 tour.<br><br>
            Place enfin un débuff <span class='gbt'>Sommeil</span> sur ce Champion pendant 1 tour.
            Il est impossible de resister a ce débuff ou de le bloquer.
          `,
          cooldown: 4,
          isPassive: true,
        },
      ],
      stats: {
        PV: "19 980",
        ATQ: "859",
        DEF: "1 387",
        VIT: "97",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "40",
        PRÉ: "0",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/crit.png",
    description: `
      Augmente la statistique TAUX C. des Alliés dans les batailles d'Arene de 25%.
    `,
  };

