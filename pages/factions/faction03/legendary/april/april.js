const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Flash info",
          description: `Attaque un ennemi.${RETURN}${RETURN}

A 50% de chances de placer un débuff ${DEBUFFS.STUN}, ${DEBUFFS.GEL}, ${DEBUFFS.SLEEP}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR} ou ${DEBUFFS.PETRIFICATION} sur la cible pendant 1 tour.${RETURN}${RETURN}

Ensuite, place un buff ${BUFFS.PERFECT_VEIL} sur cette Championne pendant 2 tours.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Scoop explosif",
          description: `Attaque un ennemi.${RETURN}${RETURN}

A 75% de chances de voler tous les buffs de la cible. A également 75% de chances de voler 100% du Compteur de Tour actuel de la cible. Ensuite, a 75% de chances de placer un débuff [Annuler] et un débuff ${DEBUFFS.SCEAU} sur la cible pendant 2 tours.${RETURN}${RETURN}

${PASSIVE}

A 25% de chances d'activer la compétence Scoop explosif sur un ennemi lorsqu'il gagne un Tour supplémentaire ou un effet de Tour instantané. Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de cette Championne si cette Championne spécifique est morte.`,
          damage: "5.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "En direct sur les lieux !",
          description: `Place un buff ${BUFFS.PRE} de 50% sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

Réduit également le Compteur de Tour de tous les ennemis de 20%.${RETURN}${RETURN}

Accorde ensuite un Tour supplémentaire.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Journaliste émérite [P]",
          description: `${PASSIVE}

Réduit le Compteur de Tour de tous les ennemis de 10% dès qu'un ennemi a sa compétence activée, fait équipe avec ses alliés pour attaquer, gagne un Tour supplémentaire ou un Tour instantané, voit les temps de recharge de ses compétences réduits, bénéficie d'une augmentation de la valeur de son Bouclier, voit ses PV détruits rétablis, voit ses PV échangés par ses alliés ou lui-même, Esquive un effet ou une compétence d'un ennemi, voit son Compteur de Tour égalisé ou voit ses PV équilibrés grâce à une compétence. Se produit une fois par compétence. Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de cette Championne si cette Championne spécifique est morte.${RETURN}${RETURN}

${ACTIVE}

Dès que les ennemis retirent, transfèrent ou réduisent la durée d'un débuff à 0, réduit de 25% les Compteurs de Tour de tous les ennemis. Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de cette Championne si cette Championne spécifique est morte.`,
          cooldown: 3,
          levelInfo: ["Temps de recharge -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 320",
        "ATQ": "1 046",
        "DEF": "1 244",
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
