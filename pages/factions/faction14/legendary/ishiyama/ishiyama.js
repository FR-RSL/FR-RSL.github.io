const championData = {
  type: "PV",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Comète ardente",
          description: `Attaque 2 fois un ennemi. 

Chaque frappe transfère un débuff aléatoire de ce Champion sur la cible. 

Si ce Champion est affligé d'un débuff lorsqu'il se fait attaquer, contre-attaque avec cette compétence.`,
          damage: "0.14*PV",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +5%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Salve calculée",
          description: `Attaque tous les ennemis. 

A 75 % de chances de placer un débuff ${DEBUFFS.FEAR}, un débuff ${DEBUFFS.CDAM} de 25 % et un débuff ${DEBUFFS.CRATE} de 30 % sur tous les ennemis pendant 2 tours. Il est impossible de résister à ces débuffs pour les ennemis qui sont déjà affligés de 2 débuffs ou plus.`,
          damage: "0.3*PV",
          cooldown: 4,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +15%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Finis-les",
          description: `Attaque un ennemi. Ignorera 25 % de la DÉF de la cible. Ignorera au lieu de ça 50 % de la DÉF de la cible si cette dernière est affligée de 2 débuffs ou plus. 

Place un buff ${BUFFS.BLOCK_DAMAGE} sur ce Champion pendant 2 tours si cette attaque tue un ennemi.`,
          damage: "0.34*PV",
          cooldown: 4,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "L'inflexible [P]",
          description: `Dès qu'un ennemi résiste à une tentative de débuffs de ce Champion, il est impossible de résister au prochain débuff placé par ce Champion. 

Chaque débuff placé par ce Champion augmente ses PV MAX de 3 % (s'accumule jusqu'à 30 %).`,
          isPassive: true,
        },
      ],
      stats: {
        PV: "22 800",
        ATQ: "892",
        DEF: "1 167",
        VIT: "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "30",
        PRÉ: "10",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/hp.webp",
    description: `
      Augmente la statistique PV des Alliés lors de toutes les Batailles de 28%.
    `,
  };

