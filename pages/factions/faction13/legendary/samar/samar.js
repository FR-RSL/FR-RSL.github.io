const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Chair Cristalline",
          description: `Attaque un ennemi. Soigne de 15 % des dégâts infligés si ce Champion possède 50 % de PV ou moins. Remplit le Compteur de Tour de ce Champion de 15 % s'il possède plus de 50 % de PV.`,
          damage: "0.25*HP",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Malédiction d'Émeraude",
          description: `Attaque un ennemi.${RETURN}
Inflige des dégâts bonus équivalents à la différence entre le niveau de pourcentage de PV de ce Champion et celui de la cible (+1 % de dégâts par 1 % de différence).${RETURN}
Inflige des dégâts bonus égaux à la différence entre le nombre de buffs de ce Champion et celui de la cible (+10 % de dégâts par buff).`,
          damage: "0.35*HP",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Joyeuse Subversion",
          description: `Attaque tous les ennemis. Possède 80 % de chances de voler 2 buffs aléatoires avant d'attaquer. Place une frappe supplémentaire sur les ennemis à qui il reste des buffs.`,
          damage: "0.2*HP",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Peau Diamant [P]",
          description: `${PASSIVE}

Place un buff ${BUFFS.BLOCK_DAMAGE} sur ce Champion pendant 1 round au début de chaque Manche.${RETURN}${RETURN}

${ACTIVE}

Bloque les dégâts en approche et place un buff ${BUFFS.BLOCK_DAMAGE} sur ce Champion pendant 1 tour lorsqu'il subit une frappe qui ferait tomber ses PV sous 30 %.`,
          cooldown: 4,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 480",
        "ATQ": "936",
        "DEF": "1 211",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "80",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 30%`,
};
