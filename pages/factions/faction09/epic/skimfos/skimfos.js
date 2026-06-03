const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Faim Croissante",
          description: `Attaque 2 fois un ennemi. La première frappe possède 35% de chances de placer un débuff ${DEBUFFS.SPD} de 30% pendant 2 tours. La seconde frappe possède 35% de chances de réduire le Compteur de Tour de la cible de 10%.`,
          damage: "1.85*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Maudis la Nourrice",
          description: `Attaque tous les ennemis. Possède 75% de chances de placer un débuff ${DEBUFFS.ATK} de 50% pendant 2 tours. Après l'attaque, transfère sur ce Champion tous les débuffs de tous les alliés, sauf ${DEBUFFS.STUN}, ${DEBUFFS.GEL}, ${DEBUFFS.SLEEP}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.PROVOKE} et ${DEBUFFS.PETRIFICATION}.`,
          damage: "3.75*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Étreinte de Malheur",
          description: `Transfère tous les débuffs de ce Champion sur une cible ennemie, puis attaque la cible. Vole 100% du Compteur de Tour de la cible si cette attaque passe en critique.`,
          damage: "5.6*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Déformé [P]",
          description: `Au début de chaque tour, soigne ce Champion de 5% de ses PV MAX pour chaque débuff dont il est affligé.${RETURN}${RETURN}

Si ce Champion est affligé de 4 débuffs ou plus au début du tour, place un buff ${BUFFS.ATK} de 50% et un buff ${BUFFS.CDAM} de 30% sur ce Champion pendant 2 tours.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "13 050",
        "ATQ": "1 432",
        "DEF": "1 002",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de la Tour du Malheur de 30%`,
};
