const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.png",
          name: "Baton dechire-vie",
          description: `Attaque un ennemi. Soigne ce Champion a hauteur de 5% de ses PV MAX. Soigne ce Champion a hauteur de 10% de ses PV MAX s'il a 50% de PV ou moins.`,
          damage: "0.2*PV",
          levelInfo: ["Dégâts +10%", "Soins +10%", "Dégâts +10%", "Soins +10%"],
        },
        {
          img: "assets/sort2.png",
          name: "Regardez-moi",
          description: `Attaque tous les ennemis. Place un buff ${BUFFS.PERFECT_VEIL} sur tous les allies sauf ce Champion pendant 2 tours. Place egalement un buff ${BUFFS.COUNTER} et un buff ${BUFFS.STRENGTHEN} de 25% sur ce Champion pendant 2 tours.`,
          damage: "0.27*PV",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.png",
          name: "Infusion d'Animus",
          description: `Soigne une cible alliee de 20% des PV MAX de ce Champion, puis equilibre les PV de tous les allies. Les niveaux de PV de tous les allies seront amenes au niveau de l'allie ayant le plus de PV.${RETURN}${RETURN}
Apres avoir equilibre les PV, place un buff ${BUFFS.ALLY_PROTECT} de 50% sur la cible initiale pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Soins +10%", "Soins +10%", "Soins +10%", "Soins +10%"],
        },
        {
          img: "assets/sort4.png",
          name: "Douleur transmutee [P]",
          description: `Reduit le temps de recharge de la competence <span class="grn-t">Infusion d'Animus</span> d'1 tour par tranche de 10% de PV que perd ce Champion.`,
          cooldown: 1,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "22 635",
        "ATQ": "925",
        "DEF": "1 145",
        "VIT": "101",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "50",
        "PRE": "0"
  }
};

const aura = null;
