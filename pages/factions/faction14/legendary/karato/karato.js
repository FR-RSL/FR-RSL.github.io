const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Trois Apparitions",
          description: `Attaque 3 fois un ennemi. Chaque frappe possède 20% de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25% pendant 2 tours.`,
          damage: "1.5*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Perturber",
          description: `Attaque un ennemi. Place un débuff ${DEBUFFS.STUN} pendant 2 tours. Accorde un Tour supplémentaire et réinitialise le temps de recharge de cette compétence si Yumeko se trouve dans la même équipe et que cette compétence tue un ennemi.`,
          damage: "6.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Suppression",
          description: `Attaque tous les ennemis. Possède 80% de chances de placer un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 2 tours. Il est impossible de résister à ce débuff si Yumeko se trouve dans la même équipe.`,
          damage: "4.65*ATQ",
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Stoïcisme [P]",
          description: `Les dégâts infligés par ce Champion ne peuvent pas être réduits par les Compétences Passives ou les Maîtrises des ennemis, sauf par les Compétences Passives des Boss.${RETURN}${RETURN}

Les dégâts infligés par ce Champion ne peuvent pas non plus être augmentés par les Maîtrises de ce Champion ou les compétences Passives des alliés, sauf lors d'attaques sur les Boss.${RETURN}${RETURN}

Dès que Yumeko meurt, accorde instantanément un tour à ce Champion et réinitialise le temps de recharge de chacune de ses compétences.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 340",
        "ATQ": "1 564",
        "DEF": "859",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Augmente la statistique TAUX DE C. des Alliés lors de toutes les Batailles de 20%`,
};
