const championData = {
  type: "Soutien",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Lance de providence",
          description: `Attaque un ennemi. Possède 30% de chances de placer un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 2 tours.${RETURN}${RETURN}

Possède également 80% de chances de voler 20% du Compteur de tour de la cible si cette dernière se trouve déjà sous un débuff ${DEBUFFS.LOCK_ACTIVE}.`,
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
          img: "assets/sort2.webp",
          name: "Pétales de purge",
          description: `Cible un allié. Si l'allié ciblé ne se trouve pas sous débuff ${DEBUFFS.SHEEP}, lui accorde un buff ${BUFFS.ATK} de 50%, un buff ${BUFFS.CRATE} de 30% et un buff ${BUFFS.CDAM} de 30% pendant 2 tours.${RETURN}${RETURN}

Active ensuite un effet ${INSTANT} sur l'allié ciblé.${RETURN}${RETURN}

Si l'allié ciblé se trouve sous débuff ${DEBUFFS.SHEEP}, retire ce dernier.`,
          cooldown: 5,
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Charge de la Brave",
          description: `Remplit le Compteur de tour de tous les alliés de 20% et leur accorde un buff ${BUFFS.SPD} de 30% pendant 2 tours.${RETURN}${RETURN}

Possède également 100% de chances de réduire le Compteur de tour de tous les ennemis de 20% et de leur placer un débuff ${DEBUFFS.SPD} de 30% pendant 2 tours.`,
          cooldown: 6,
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Vue souveraine [P]",
          description: `Augmente la PRÉ de cette Championne à hauteur de la quantité de VIT qu'elle possède.`,
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
    img: "../../../../../../assets/images/auras/speed.webp",
    description: `
      Augmente la statistique VIT des Alliés dans les batailles d'Arene de 30%.
    `,
  };

