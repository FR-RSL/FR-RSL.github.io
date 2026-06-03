const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Marteau Tue-Dragon",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 40% de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour. Chaque frappe remplira le Compteur de Tour de ce Champion de 15% si la cible ne se trouve pas sous débuff ${DEBUFFS.STUN} après la frappe.`,
          damage: "1.75*ATQ",
          levelInfo: ["Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Rage de Dragon",
          description: `Attaque un ennemi. Possède 80% de chances de réduire le Compteur de Tour de la cible de 75%. Si cette compétence vide totalement le Compteur de Tour de la cible, possède également 80% de chances de placer un débuff ${DEBUFFS.STUN} sur tous les autres ennemis pendant 1 tour.`,
          damage: "3.5*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Briseur d'Écailles",
          description: `Attaque un ennemi. Ignorera 50% de la DÉF de la cible.${RETURN}${RETURN}

${PASSIVE}

Utilisera toujours cette Compétence au lieu de la Compétence par défaut lors d'une contre-attaque.${RETURN}${RETURN}

Cette Compétence ne sera pas bloquée par les débuffs ${DEBUFFS.LOCK_ACTIVE}.`,
          damage: "4.7*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Fin du Titan [P]",
          description: `Immunisé contre les débuffs ${DEBUFFS.STUN}.${RETURN}${RETURN}

Inflige 15% de dégâts en plus sur les Boss et reçoit 15% de dégâts en moins de leur part.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 535",
        "ATQ": "1 641",
        "DEF": "969",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 19%`,
};
