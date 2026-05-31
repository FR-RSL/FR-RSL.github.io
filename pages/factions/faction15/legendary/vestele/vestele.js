const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Rivière en crue",
          description: `Attaque 2 fois un ennemi. Avant d'attaquer, a 50 % de chances de retirer tous les buffs de la cible. Sinon, a 100 % de chance de voler tous les buffs si cette compétence est utilisée en dehors du tour de cette Championne. Les cibles dont l'ATQ est inférieure ou égale à l'ATQ de cette Championne ne peuvent pas résister à cet effet. 

Ignorera 5 % de la DÉF de la cible pour chaque buff dont bénéficie cette Championne.`,
          damage: "1.7*ATQ",
          levelInfo: ["Dégâts +20%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Force érosive",
          description: `Attaque un ennemi. Avant d'attaquer, place un buff ${BUFFS.ATK} de 50 % et un buff ${BUFFS.SHATTER} de 15 % sur cette Championne pendant 2 tours. Ignorera les buffs ${BUFFS.BLOCK_DAMAGE} et ${BUFFS.STONE_SKIN}. 

Accorde un Tour supplémentaire si cette attaque tue un ennemi. Si la cible survit, remplit au lieu de cela le Compteur de Tour de tous les alliés de 30 %.`,
          damage: "5.2*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Crue d'eau de fonte",
          description: `Attaque tous les ennemis. Avant d'attaquer, a 75 % de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25 % sur tous les ennemis pendant 2 tours. Les cibles dont l'ATQ est inférieure ou égale à l'ATQ de cette Championne ne peuvent pas résister à ce débuff. Ignorera 25 % de la DÉF de chaque cible. 

Place une frappe supplémentaire sur les ennemis dont l'ATQ est inférieure ou égale à l'ATQ de cette Championne. 

Place également un buff ${BUFFS.UNKILLABLE} et un buff ${BUFFS.COUNTER} sur cette Championne pendant 2 tours.`,
          damage: "3*ATQ",
          cooldown: 6,
          levelInfo: ["Dégâts +20%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Élève de Glaicad [P]",
          description: `A 50 % de chances d'infliger 100 % de dégâts supplémentaires contre les ennemis dont l'ATQ est inférieure ou égale à l'ATQ de cette Championne. 

Cette Championne reçoit 30 % de dégâts en moins de la part des ennemis dont l'ATQ est inférieure ou égale à son ATQ.`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "14 700",
        "ATQ": "1 729",
        "DEF": "870",
        "VIT": "103",
        "TAUX C.": "15%",
        "DEG C.": "63%",
        "RES": "30",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Allies dans les Batailles d'Arene de 30%.`
};
