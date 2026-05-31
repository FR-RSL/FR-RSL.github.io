const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Propagation de Chaos",
          description: `Attaque un ennemi. Possède 40 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours. 
Sinon, attaquera tous les ennemis si la cible est affligée de 4 débuffs ou plus.`,
          damage: "4.2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fumée Mystique",
          description: `Attaque 2 fois un ennemi. La seconde frappe possède 75 % de chances de transférer tous les débuffs de ce Champion sur la cible.

La première frappe possède 75 % de chances de voler tous les buffs de la cible lors d'une attaque sous buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}.`,
          damage: "3.15*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Arts Ninja",
          description: `Place un buff ${BUFFS.CRATE} de 30 % et un buff ${BUFFS.CDAM} de 30 % sur ce Champion pendant 2 tours, puis attaque un ennemi. Place un buff ${BUFFS.PERFECT_VEIL} sur ce Champion pendant 2 tours si cette attaque passe en critique.`,
          damage: "5.6*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Volatilisé [P]",
          description: `Place un buff ${BUFFS.REVIVE_ON_DEATH} sur ce Champion pendant 3 tours chaque fois qu'il reçoit un buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 360",
        "ATQ": "1 454",
        "DEF": "826",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors des Donjons de 33%`,
};
