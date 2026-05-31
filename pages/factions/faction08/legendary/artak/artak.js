const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Rasoir-chaos",
          description: `Attaque tous les ennemis. Possède 35 % de chances de prolonger d'1 tour la durée des débuffs ${DEBUFFS.BURN} sur chaque cible.`,
          damage: "0.1*HP",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Chiens de guerre",
          description: `Attaque tous les ennemis. Avant d'attaquer, active instantanément un déclenchement de tous les débuffs ${DEBUFFS.BURN} sur tous les ennemis. 

A 75 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % sur tous les ennemis pendant 2 tours.`,
          damage: "0.25*HP",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Purifeu",
          description: `Attaque 2 fois tous les ennemis. La première frappe possède 75 % de chances de placer un débuff ${DEBUFFS.BURN} sur tous les ennemis pendant 2 tours. 

Rétablit les PV MAX détruits de ce Champion de 10 % pour chaque débuff ${DEBUFFS.BURN} placé par cette compétence. Soigne ce Champion de 5 % de ses PV MAX pour chaque tentative de débuff ${DEBUFFS.BURN} à laquelle l'équipe ennemie a résisté ou qu'elle a bloquée.`,
          damage: "0.14*HP",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Sang brûlant [P]",
          description: `Dès qu'un débuff ${DEBUFFS.BURN} est activé, détruit les PV MAX de ce Champion de 5 %. S'accumule jusqu'à 50 %. 

Augmente les DÉG, les DÉG C. et la DÉF de ce Champion de 1 % par tranche de 1 % de ses PV MAX détruits. Augmente également la VIT et la RÉS de ce Champion de 2 points par tranche de 1 % de ses PV MAX détruits.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 140",
        "ATQ": "936",
        "DEF": "1 167",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
