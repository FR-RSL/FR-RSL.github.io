const championData = {
  type: "Attaque",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Fleur maudite",
          description: `
            Attaque un ennemi.<br><br>
            Remplit le Compteur de Tour de cette Championne de 10%.
            Remplit le Compteur de Tour de cette Championne de 10%
            supplémentaires si un ennemi se trouve sous débuff
            <span class='gbt'>Malediction</span>.<br><br>
            Contre-attaquera en utilisant cette compétence lorsqu'elle
            est frappée par des ennemis sous débuff <span class='gbt'>Malediction</span>.
          `,
          damage: "3.8*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +5%"
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Depit capricieux",
          description: `
            Attaque 2 fois tous les ennemis.<br><br>
            Les degats augmentent de 10% pour chaque ennemi sous débuff
            <span class='gbt'>Malediction</span>. Ignorera les buffs 
            <span class='gbt'>Bouclier</span> et <span class='gbt'>Renforcer</span>.
            Ignorera les buffs <span class='gbt'>Blocage des Degats</span>
            sur les ennemis sous débuff <span class='gbt'>Malediction</span>.<br><br>
            Remplit le Compteur de Tour de cette Championne de 30%.
            Remplit le Compteur de Tour de cette Championne de 20% 
            pour chaque ennemi tue par cette compétence.
          `,
          damage: "2*ATQ",
          cooldown: 4,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Nuage attrape-esprit",
          description: `
            Place un buff <span class='gbt'>Augmentation de PRE</span> de 50% sur tous les alliés pendant 2 tours.<br><br>
            A 75% de chances de placer un débuff <span class='gbt'>Marque de Mort</span>
            sur la cible ennemie pendant 2 tours.
            A également 75% de chances de placer un débuff <span class='gbt'>Malediction</span>
            sur tous les ennemis pendant 2 tours.<br><br>
            Ensuite, remplit le Compteur de Tour de cette Championne de 50%.
            Remplit également le Compteur de Tour de cette Championne de 10%
            pour chaque débuff place par cette compétence.
            Place également un buff <span class='gbt'>Blocage des Degats</span>
            sur cette Championne pendant 1 tour.
          `,
          cooldown: 5,
          levelInfo: [
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +15%",
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Frenesie de Lilas-croc [P]",
          description: `
            Si cette Championne tue un ou plusieurs ennemis lors d'une bataille,
            ignorera 10% de la DEF de n'importe quelle cible.<br><br>
            Si cette Championne tue 2 ennemis ou plus lors d'une bataille, cette
            Championne recevra un buff <span class='gbt'>Bouclier</span> equivalent
            a 40% de ses PV MAX pendant 2 tours au debut de son propre tour.<br><br>
            Si cette Championne tue 3 ennemis ou plus lors d'une bataille,
            chaque attaque reduira la Compteur de Tour d'une cible de 10%.
            Il est impossible de resister a cet effet.
          `,
          isPassive: true,
        },
      ],
      stats: {
        PV: "14 700",
        ATQ: "1 498",
        DEF: "1 101",
        VIT: "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "30",
        PRÉ: "10",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/attack.webp",
    description: `
      Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 30%.
    `,
  };

