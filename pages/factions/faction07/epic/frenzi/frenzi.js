const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Charcutage brûlant",
          description: `Attaque un ennemi. Possède 50 % de chances d'activer instantanément un débuff ${DEBUFFS.BURN} sur la cible.`,
          damage: "3.4*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Mâchoires de flamme",
          description: `Attaque 3 fois au hasard. Chaque frappe possède 75 % de chances de placer un débuff ${DEBUFFS.BURN} pendant 2 tours. 

Remplit le Compteur de Tour de cette Championne de 10 % pour chaque débuff ${DEBUFFS.BURN} placé par cette compétence.`,
          damage: "1.8*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Ricanement vexant",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 1 tour. 

Place également un buff ${BUFFS.DEF} de 60 % sur cette Championne pendant 2 tours.`,
          damage: "3.8*DEF",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Rempart grillant [P]",
          description: `Augmente la DÉF de cette Championne de 2 % chaque fois qu'un débuff ${DEBUFFS.BURN} est activé sur les ennemis (s'accumule jusqu'à 20 %). 

Se réinitialise à chaque round.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 680",
        "ATQ": "749",
        "DEF": "1 443",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des Donjons de 30%`,
};
