const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lame de destinée",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Possède 35% de chances d'augmenter le temps de recharge d'une compétence active de 2 tours.${RETURN}${RETURN}

Remplit le Compteur de Tour de ce Champion de 10% pour chaque tour ajouté au temps de recharge.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Plus grands succès",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Vole tout le Compteur de Tour de chaque cible, sauf les ennemis sous débuffs ${DEBUFFS.SHEEP}. Place également un débuff ${DEBUFFS.STUN} pendant 1 tour sur tous les ennemis ne se trouvant pas sous débuff ${DEBUFFS.SHEEP}.`,
          damage: "4.2*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Pour mon prochain tour !",
          description: `Place un débuff ${DEBUFFS.SHEEP} sur un ennemi pendant 1 tour. Il est impossible de bloquer ce débuff.${RETURN}${RETURN}

Ensuite, possède 75% de chances de retirer tous les buffs de tous les ennemis. Remplit le Compteur de Tour de ce Champion de 5% pour chaque buff retiré.`,
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +10%", "Temps de recharge -1", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Maître de cérémonie [P]",
          description: `Dès qu'un débuff ${DEBUFFS.SHEEP} est retiré ou expire sur un ennemi, augmente au maximum le temps de recharge d'une compétence active aléatoire sur cet ennemi.${RETURN}${RETURN}

Remplit le Compteur de Tour de ce Champion de 10% pour chaque tour ajouté au temps de recharge.${RETURN}${RETURN}

Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de ce Champion si ce Champion spécifique est mort.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 320",
        "ATQ": "1 167",
        "DEF": "1 123",
        "VIT": "108",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors des batailles d'Arène de 28%`,
};
