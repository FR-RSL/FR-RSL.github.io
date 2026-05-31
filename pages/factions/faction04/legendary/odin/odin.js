const championData = {
  type: "Soutien",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Dard de Gungnir",
          description: `Attaque un ennemi. Possède 50 % de chances de placer un débuff ${DEBUFFS.BERSERK} pendant 2 tours. 

Il est impossible de placer ce débuff sur les Boss.`,
          damage: "5*ATQ",
          levelInfo: [
            "Dégâts +10%",
            "Chances de Buff/débuff +10%",
            "Chances de Buff/débuff +15%"
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Tempête de familiers",
          description: `Retire tous les buffs dont disposent les ennemis. 

Possède 80 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % sur tous les ennemis pendant 2 tours. Possède également 80 % de chances de placer un débuff ${DEBUFFS.STUN} sur tous les ennemis pendant 1 tour.`,
          cooldown: 4,
          levelInfo: [
            "Chances de Buff/débuff +10%",
            "Chances de Buff/débuff +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Jugement asgardien",
          description: `Attaque un ennemi. Avant d'attaquer, vole tous les buffs de la cible. Les dégâts infligés par cette compétence dépendent du Type de la cible :

ATQ : infligera des dégâts basés sur l'ATQ de la cible

DÉF : infligera des dégâts basés sur la DÉF de la cible

PV/Soutien/Boss : infligera des dégâts basés sur les PV MAX de la cible. 

Cette attaque ignorera également 100 % de la DÉF de la cible. 

Si la cible a été tuée par cette compétence, ranime un allié mort aléatoire avec 50 % de PV et 50 % de Compteur de Tour.`,
          cooldown: 4,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Sagesse d'Odin [P]",
          description: `Tous les 9 tours, place un buff ${BUFFS.BLOCK_DAMAGE} sur ce Champion pendant 1 tour, puis applique également un effet [Propagation de Buff], prenant tous les buffs de ce Champion pour les placer sur tous les alliés.`,
          isPassive: true,
        },
      ],
      stats: {
        PV: "18 825",
        ATQ: "1 002",
        DEF: "1 321",
        VIT: "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "30",
        PRÉ: "10",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/speed.webp",
    description: `
      Augmente la statistique VIT des Alliés du Neant dans les batailles d'Arene de 40%.
    `,
  };

