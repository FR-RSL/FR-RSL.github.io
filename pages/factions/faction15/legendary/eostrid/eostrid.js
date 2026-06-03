const championData = {
  type: "Soutien",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Volute de sommeil",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Possède 50 % de chances de placer un débuff ${DEBUFFS.SLEEP} pendant 1 tour.${RETURN}${RETURN}

Si la cible se trouve sous un débuff ${DEBUFFS.SPD} ou ${DEBUFFS.WEAKEN} placé par cette Championne, possède au lieu de ça 75 % de chances de placer un débuff ${DEBUFFS.SLEEP} pendant 1 tour.`,
          damage: "5.4*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +15%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Éclat printanier",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Possède 75 % de chances de placer un débuff ${DEBUFFS.SPD} de 30 % et un débuff ${DEBUFFS.WEAKEN} de 25 % pendant 2 tours.${RETURN}${RETURN}

Réduit également les Compteurs de Tour de tous les ennemis de 15 %.`,
		  damage: "4.9*ATQ",
          cooldown: 4,
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +15%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Chant-rêve béni",
          description: `Place un buff ${BUFFS.SPD} de 30 % et un buff ${BUFFS.ATK} de 50 % sur tous les alliés pendant 3 tours. Remplit également les Compteurs de Tour de tous les alliés de 15 %.${RETURN}${RETURN}

Accorde ensuite un Tour supplémentaire.`,
          cooldown: 6,
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Floraison de vie [P]",
          description: `Dès que cette Championne ou un allié voit son Compteur de Tour augmenté, soigne tous les alliés en fonction de leurs PV MAX. La valeur du soin en pourcentage est égale à la moitié de l'augmentation du Compteur de Tour.`,
		  cooldown: 1,
          isPassive: true,
        },
      ],
      stats: {
        PV: "21 135",
        ATQ: "1 035",
        DEF: "1 134",
        VIT: "115",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "30",
        PRÉ: "10",
      },
  	};

  const aura = {
    img: "../../../../../../assets/images/auras/speed.webp",
    description: `
      Augmente la statistique VIT des Alliés dans les batailles d'Arene de 28%.
    `,
  };

