const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.png",
          name: "Enferrer",
          description: `Attaque 3 fois un ennemi. Chaque frappe possede 40% de chances de placer un debuff ${DEBUFFS.POISON} de 5% pendant 2 tours.`,
          damage: "1.1*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
        },
        {
          img: "assets/sort2.png",
          name: "Pluie de Poison",
          description: `Attaque 2 fois tous les ennemis. Chaque frappe possede 50% de chances de placer un debuff ${DEBUFFS.POISON} de 5% pendant 2 tours.`,
          damage: "2*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort3.png",
          name: "Catalyseur Mortel",
          description: `Attaque tous les ennemis. Active instantanement tous les debuffs ${DEBUFFS.POISON} sur tous les ennemis.${RETURN}${RETURN}
Place un debuff ${DEBUFFS.BLOCK_REA} sur les ennemis tues.`,
          damage: "4.1*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
        },
        {
          img: "assets/sort4.png",
          name: "Partenaire Calamiteux",
          description: `Attaque un ennemi. Applique un effet de <span class="grn-t">Propagation de Debuff</span>, prenant 4 debuffs aleatoires sur la cible pour les placer sur tous les ennemis.${RETURN}${RETURN}
[Uniquement Disponible lorsque <span class="gold-t">Belanor</span> se trouve dans la meme equipe.]`,
          damage: "4*ATQ",
          cooldown: 5,
        }
  ],
  stats: {
        "PV": "18 660",
        "ATQ": "1 586",
        "DEF": "749",
        "VIT": "105",
        "TAUX C.": "15%",
        "DEG C.": "63%",
        "RES": "30",
        "PRE": "10"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/attack.png",
  description: `Augmente la statistique ATQ des Allies lors de toutes les Batailles de 33%`
};
