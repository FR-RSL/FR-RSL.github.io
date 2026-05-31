const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Coup spirituel",
          description: `Attaque un ennemi. Possède 50 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours. 

Si la cible est un Boss, il est impossible de résister à ce débuff.`,
          damage: "3.2*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Coup mobile spirituel",
          description: `Attaque un ennemi. Chaque deuxième utilisation de cette compétence lors d'un round attaquera tous les ennemis à la place. 

Ignorera également 25 % de la DÉF de la cible. Si la cible est un Boss, ignorera 100 % de la DÉF de la cible.`,
          damage: "4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Coup vertical",
          description: `Attaque tous les ennemis. Avant d'attaquer, place un buff ${BUFFS.CDAM} de 30 % et un buff ${BUFFS.SPD} de 30 % sur ce Champion pendant 2 tours.`,
          damage: "4.1*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Rathalos Mastery [P]",
          description: `Inflicts 50% more damage against targets under ${DEBUFFS.BURN} debuffs. <br><br>Receives 25% less damage from enemies under ${DEBUFFS.BURN} debuffs. <br><br>Every fifth skill used by this Champion deals 200% more damage.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 185",
        "ATQ": "1 487",
        "DEF": "1 013",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors des Donjons de 30%`,
};
