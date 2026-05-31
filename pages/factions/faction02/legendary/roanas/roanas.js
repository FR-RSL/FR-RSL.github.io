const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Carreaux de Mépris",
          description: `Attaque un ennemi. Possède 80 % de chances de voler un buff aléatoire à la cible. Possède 80 % de chances de placer un débuff de ${DEBUFFS.BLOCK_BUFFS} d'1 tour si la cible ne possède aucun buff actif.`,
          damage: "3.6*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Triple Perforation",
          description: `Attaque 3 fois un ennemi. Ignorera les buffs ${BUFFS.DEF}, ${BUFFS.SHIELD} et ${BUFFS.BLOCK_DAMAGE}, ainsi que 50 % de la DÉF de la cible.`,
          damage: "1.8*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Majesté",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour. Réduit le Compteur de Tour de chaque cible de 50 % si le débuff ${DEBUFFS.STUN} n'est pas placé.`,
          damage: "3.7*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 525",
        "ATQ": "1 542",
        "DEF": "1 002",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
