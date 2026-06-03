const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Liens de mort",
          description: `Attaque tous les ennemis. A 50% de chances de placer un débuff ${DEBUFFS.ATK} de 50% et un débuff ${DEBUFFS.WEAKEN} de 25% pendant 1 tour.`,
          damage: "2.3*DEF",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Guillotine abjecte",
          description: `Attaque tous les ennemis. A 75% de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 1 tour.${RETURN}${RETURN}

Place un buff ${BUFFS.DEF} de 60% et un buff ${BUFFS.SHIELD} sur tous les alliés pendant 2 tours. La valeur du ${BUFFS.SHIELD} est proportionnelle à la DÉF de ce Champion.`,
          damage: "4.1*DEF",
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Tu es accusé",
          description: `Attaque un ennemi. Ignorera les buffs ${BUFFS.LIFE_BARRIER}, ${BUFFS.POISON_CLOUD}, ${BUFFS.SHIELD} et ${BUFFS.BLOCK_DAMAGE}, ainsi que 25% de la DÉF de la cible.${RETURN}${RETURN}

Si la cible a été tuée par cette compétence, ranime un allié mort aléatoire avec 50% de PV et 50% de Compteur de Tour. Cette réanimation ignorera les débuffs ${DEBUFFS.BLOCK_REA}.${RETURN}${RETURN}

Place un débuff ${DEBUFFS.BLOCK_REA} sur les cibles tuées par cette compétence.`,
          damage: "5.2*DEF",
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Légende déchue [P]",
          description: `Dès que ce Champion tue un ennemi ou décapite une Tête d'Hydre, remplit de 25% le Compteur de Tour de tous les alliés et les soigne de 25% de leurs PV MAX.`,
          isPassive: true
        },
        {
          img: "assets/passif1.webp",
          name: "Maître le veut [P]",
          description: `Dès qu'un ennemi est ranimé, active instantanément la compétence Tu es accusé contre cet ennemi. Si plusieurs ennemis sont ranimés, la cible initiale de la réanimation sera ciblée par la compétence Tu es accusé. Ne placera pas la compétence Tu es accusé en temps de recharge.${RETURN}${RETURN}

A 50% de chances d'activer la compétence Tu es accusé sur un ennemi dès qu'un allié est tué. Se produit une fois par tour.${RETURN}${RETURN}

Active instantanément la compétence Tu es accusé contre une Tête d'Hydre dès qu'un allié est consommé par cette Tête. Ne placera pas la compétence Tu es accusé en temps de recharge.${RETURN}${RETURN}

Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de ce Champion si ce Champion spécifique est mort.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 495",
        "ATQ": "749",
        "DEF": "1 597",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 33%`,
};
