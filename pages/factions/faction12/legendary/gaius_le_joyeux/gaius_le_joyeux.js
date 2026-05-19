const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Faucilles rieuses",
          description: `Attaque 2 fois un ennemi. Accorde un Tour Supplementaire si cette attaque tue un ennemi.`,
          damage: "1.9*ATQ",
          levelInfo: ["Dégâts +10%", "Dégâts +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Remede de bouffon",
          description: `Attaque tous les ennemis. Possede 75% de chances de placer un debuff ${DEBUFFS.SLEEP} sur chaque ennemi pendant 1 tour.${RETURN}${RETURN}
Possede egalement 75% de chances de placer sur chaque ennemi 2 debuffs ${DEBUFFS.BOMB} equivalent a 500% de l'ATQ de ce Champion pendant 2 tours.`,
          damage: "3.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Esprit explosif",
          description: `Attaque 2 fois un ennemi. La premiere frappe fait exploser instantanement tous les debuffs ${DEBUFFS.BOMB} sur la cible. La seconde frappe ignorera tous les buffs ${BUFFS.UNKILLABLE} sur la cible.`,
          damage: "2.9*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Bombardier fou [P]",
          description: `Lorsque ce Champion est attaque, possede 30% de chances de placer sur l'assaillant un debuff ${DEBUFFS.BOMB} equivalent a 500% de l'ATQ de ce Champion pendant 2 tours. Se produit une fois par frappe.${RETURN}${RETURN}
Fait exploser instantanement tous les debuffs ${DEBUFFS.BOMB} sur tous les ennemis lorsque ce Champion se fait tuer.`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "15 195",
        "ATQ": "1 586",
        "DEF": "980",
        "VIT": "105",
        "TAUX C.": "15%",
        "DEG C.": "63%",
        "RES": "30",
        "PRE": "10"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 25%.`
};
