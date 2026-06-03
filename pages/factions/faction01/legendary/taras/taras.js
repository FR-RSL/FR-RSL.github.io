const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Fracas sur nous",
          description: `Attaque 2 fois un ennemi. Possède 40 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % pendant 2 tours. Chaque coup critique remplit le Compteur de Tour de tous les alliés de 5 %.`,
          damage: "0.12*B_HP",
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Entremise de héros",
          description: `Attaque un ennemi. Place un débuff ${DEBUFFS.STUN} pendant 2 tours. Inflige le double de dégâts aux ennemis dont l'ATQ est supérieure ou égale à celle de ce Champion.${RETURN}${RETURN}

${PASSIVE}

Dès qu'un ennemi attaque Marichka la Robuste, attaque cet ennemi en utilisant cette compétence.`,
          damage: "0.35*B_HP",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Pression constante",
          description: `Attaque tous les ennemis. Les dégâts augmentent de 15 % pour chaque buff sur les alliés. Augmente ensuite d'1 tour la durée de tous les buffs des alliés.${RETURN}${RETURN}

Soigne ce Champion de 5 % pour chaque buff dont la durée est augmentée. Restaure les PV MAX réduits d'une valeur équivalente à tous les soins en surplus.`,
          damage: "0.26*B_HP",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Battant féroce [P]",
          description: `${PASSIVE}

Lorsque ce Champion est attaqué, réduit l'ATQ de l'ennemi de 10 % (jusqu'à 50 % ; 25 % contre les Boss). Ne peut se produire qu'une fois par compétence. La réduction d'ATQ se réinitialise après chaque round.${RETURN}${RETURN}

${ACTIVE}

Place un débuff ${DEBUFFS.FEAR} sur tous les ennemis des Factions Orcs, Tribus Ogryn, Hordes Mortes-vivantes et Rejetons Démoniaques au début de chaque round et pour un tour. Il est impossible de résister à ce débuff.`,
          isPassive: true
        },
        {
          img: "assets/passif1.webp",
          name: "Élégance [P]",
          description: `Tous les dégâts en approche dus à des compétences sont réduits de 50 %.${RETURN}${RETURN}

Lorsque ce Champion est attaqué, ses PV MAX seront réduits de 25 % des dégâts initiaux de l'attaque (avant la réduction des dégâts).`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 305",
        "ATQ": "705",
        "DEF": "1 387",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Augmente la statistique TAUX DE C. des Alliés lors de toutes les Batailles de 24%`,
};
