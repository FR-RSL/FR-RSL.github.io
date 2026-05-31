const championData = {
  type: "Soutien",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Touche de sommeil",
          description: `Attaque un ennemi. Possède 80 % de chances de placer un débuff ${DEBUFFS.SLEEP} pendant 1 tour. 

Remplit le Compteur de Tour de cette Championne de 15 % si le débuff ${DEBUFFS.SLEEP} est placé.`,
          damage: "0.28*PV",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +10%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Perdue dans les bois",
          description: `Possède 75 % de chances de placer un débuff ${DEBUFFS.SPD} de 30 % et un débuff ${DEBUFFS.LEECH} sur tous les ennemis pendant 2 tours. 

Rétablit 100 % des PV MAX détruits de chaque allié, puis soigne tous les alliés de 20 % des PV MAX de cette Championne.`,
          cooldown: 4,
          levelInfo: [
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +15%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Infusion d'outre-tombe",
          description: `Retire tous les débuffs de tous les alliés, puis leur accorde un buff ${BUFFS.BLOCK_DEBUFFS} et un buff ${BUFFS.REVIVE_ON_DEATH} pendant 2 tours.`,
          cooldown: 5,
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Monarque fée [P]",
          description: `Possède 30 % de chances de totalement bloquer les dégâts en approche de la première frappe d'une attaque sur un allié aléatoire. Ne peut se produire qu'une fois par tour.`,
          cooldown: 1,
          levelInfo: [
            "Chance de Buff/débuff +15%",
            "Chance de Buff/débuff +15%",
          ],
          isPassive: true,
        },
      ],
      stats: {
        PV: "21 315",
        ATQ: "804",
        DEF: "1 354",
        VIT: "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "40",
        PRÉ: "20",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/hp.webp",
    description: `
      Augmente la statistique PV des Alliés dans les Donjons de 40%.
    `,
  };

