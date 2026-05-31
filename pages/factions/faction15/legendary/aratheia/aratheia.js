const championData = {
  type: "Attaque",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Fleur maudite",
          description: `Attaque un ennemi. 

Remplit le Compteur de Tour de cette Championne de 10 %. Remplit le Compteur de Tour de cette Championne de 10 % supplémentaires si un ennemi se trouve sous débuff ${DEBUFFS.HEX}. 

Contre-attaquera en utilisant cette compétence lorsqu'elle est frappée par des ennemis sous débuff ${DEBUFFS.HEX}.`,
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
          name: "Dépit capricieux",
          description: `Attaque 2 fois tous les ennemis. 

Les dégâts augmentent de 10 % pour chaque ennemi sous débuff ${DEBUFFS.HEX}. Ignorera les buffs ${BUFFS.SHIELD} et ${BUFFS.STRENGTHEN}. Ignorera également les buffs ${BUFFS.BLOCK_DAMAGE} sur les ennemis sous débuff ${DEBUFFS.HEX}. 

Remplit le Compteur de Tour de cette Championne de 30 %. Remplit le Compteur de Tour de cette Championne de 20 % pour chaque ennemi tué par cette compétence.`,
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
          description: `Place un buff ${BUFFS.PRE} de 50 % sur tous les alliés pendant 2 tours. 

A 75 % de chances de placer un débuff ${DEBUFFS.DEATHBRAND} sur la cible ennemie pendant 2 tours. A également 75 % de chances de placer un débuff ${DEBUFFS.HEX} sur tous les ennemis pendant 2 tours. 

Ensuite, remplit le Compteur de Tour de cette Championne de 50 %. Remplit également le Compteur de Tour de cette Championne de 10 % pour chaque débuff placé par cette compétence. Place également un buff ${BUFFS.BLOCK_DAMAGE} sur cette Championne pendant 1 tour.`,
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
          name: "Frénésie de Lilas-croc [P]",
          description: `Si cette Championne tue un ou plusieurs ennemis lors d'une bataille, ignorera 10 % de la DÉF de n'importe quelle cible.

Si cette Championne tue 2 ennemis ou plus lors d'une bataille, cette Championne recevra un buff ${BUFFS.SHIELD} équivalent à 40 % de ses PV MAX pendant 2 tours au début de son propre tour.

Si cette Championne tue 3 ennemis ou plus lors d'une bataille, chaque attaque réduira le Compteur de Tour d'une cible de 10 %. Il est impossible de résister à cet effet.`,
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

