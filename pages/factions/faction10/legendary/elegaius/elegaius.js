const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Esprits malveillants",
          description: `Attaque un ennemi. A 50 % de chances de placer un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 2 tours.`,
          damage: "0.18*HP",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Arrêt complet",
          description: `Attaque un ennemi. Place les compétences de la cible en recharge. Place également un débuff ${DEBUFFS.BLOCK_BUFFS} pendant 2 tours.

S'il y a des Champions ennemis qui ont la même Affinité que la cible initiale, place également toutes leurs compétences en recharge et leur inflige un débuff ${DEBUFFS.BLOCK_BUFFS} pendant 2 tours.`,
          damage: "0.27*HP",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rage fantomatique",
          description: `Attaque tous les ennemis. A 75 % de chances de retirer tous les buffs. 

A également 75 % de chances de réduire les Compteurs de Tour de tous les ennemis de 20 %. Réduit le Compteur de Tour de chaque ennemi de 10 % supplémentaires pour chaque buff retiré.`,
          damage: "0.2*HP",
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Rejetée par la Mort [P]",
          description: `Empêche la mort de cette Championne et la garde vivante avec 1 PV lorsqu'elle est frappée par un coup fatal.

Si cette compétence empêche la mort de cette Championne, elle la soigne de 30 % de ses PV MAX, remplit son Compteur de Tour de 30 % et lui accorde un buff ${BUFFS.SHIELD} équivalent à 30 % de ses PV MAX pendant 2 tours.

N'empêchera pas la mort de cette Championne si elle est affligée d'un débuff ${DEBUFFS.HEALS}.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 305",
        "ATQ": "881",
        "DEF": "1 211",
        "VIT": "106",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 60`,
};
