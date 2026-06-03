const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lieur d'Enfer",
          description: `Attaque 2 fois un ennemi. Possède 30% de chances de placer un débuff ${DEBUFFS.DEF} de 60% pendant 2 tours. Comtesse Lix unira ses forces et rejoindra l'attaque si elle se se trouve dans la même équipe. Comtesse Lix utilisera sa compétence par défaut.${RETURN}${RETURN}

Comtesse Lix n'unira pas ses forces lors de cette attaque si cette compétence est utilisée lors d'une contre-attaque ou lorsqu'elle fait équipe pour attaquer avec un autre Champion.`,
          damage: "1.7*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Immanence Divine",
          description: `Attaque un ennemi. Ignorera les buffs ${BUFFS.DEF}, ${BUFFS.STRENGTHEN} et ${BUFFS.ALLY_PROTECT}.${RETURN}${RETURN}

Ranime un allié choisi au hasard avec 40% de PV, puis lui accorde un buff ${BUFFS.SHIELD} équivalent à 20% de ses PV MAX pendant 2 tours si cette attaque tue un ennemi.${RETURN}${RETURN}

Place également sur ce Champion un buff ${BUFFS.SHIELD} équivalent à 20% de ses PV MAX pendant 2 tours si cette attaque tue un ennemi.`,
          damage: "5.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Lumière de Sainteté",
          description: `Retire tous les buffs des cibles se trouvant sous buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}, place un débuff ${DEBUFFS.WEAKEN} de 25% sur les ennemis dont les buffs ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL} ont été retirés, puis attaque tous les ennemis.${RETURN}${RETURN}

Possède également 75% de chances de placer un débuff ${DEBUFFS.STUN} sur tous les ennemis pendant 1 tour.`,
          damage: "4*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Émissaire [P]",
          description: `Remplit le Compteur de Tour de ce Champion de 3% chaque fois qu'un allié se fait frapper. Réduit les dégâts en approche de 25% si l'ATQ de l'assaillant est inférieure à celle de ce Champion.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 845",
        "ATQ": "1 619",
        "DEF": "837",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
