const championForms = {
  form1: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort1.png",
          name: "Chant d'acier",
          description: `Attaque un ennemi. Place une frappe supplementaire si la cible se trouve sous debuff ${DEBUFFS.DEATHBRAND}.<br><br>

Reduit les PV et la DEF de la cible de 10% (s'accumule jusqu'a 30%).<br>
Cet effet ne fonctionne pas contre les Boss.`,
          damage: "4*ATQ",
          levelInfo: ["Degats +20%"],
        },
        {
          img: "assets/sort2.png",
          name: "Rage incandescente",
          description: `Attaque un ennemi. Avant d'attaquer, place un debuff ${DEBUFFS.LOCK_PASSIF} pendant 1 tour. Ignorera 50% de la DEF de la cible, ainsi que les buffs ${BUFFS.BLOCK_DAMAGE} et ${BUFFS.UNKILLABLE}.<br><br>

Si la cible initiale est tuee, repetera l'attaque contre tous les ennemis et ignorera 25% de la DEF de chaque cible.<br>
Reduira egalement de 2 tours le temps de recharge de la competence <span class='gt'>Hurlement polaire</span> si la cible initiale est tuee lorsqu'elle se trouve sous debuff ${DEBUFFS.DEATHBRAND}.`,
          damage: "6*ATQ",
          cooldown: 4,
          levelInfo: ["Degats +20%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.png",
          name: "Hurlement polaire",
          description: `Place un buff ${BUFFS.ATK} de 50% et un buff ${BUFFS.PRE} de 50% sur tous les allies pendant 3 tours.<br><br>

Place un debuff ${DEBUFFS.DEATHBRAND} sur tous les ennemis pendant 2 tours.<br><br>

Accorde ensuite un Tour supplementaire.`,
          cooldown: 5,
          levelInfo: ["Ignorer la Res +20%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.png",
          name: "Metamorphe",
          description: `Fait passer ce Champion a sa Forme alternative. Accorde ensuite un Tour supplementaire.`,
          cooldown: 4,
        },
        {
          img: "assets/sort5.png",
          name: "Volonte de la toundra [P]",
          description: `${PASSIVE}

Les ennemis sous debuff ${DEBUFFS.DEATHBRAND} recoivent 20% de degats en plus et infligent 20% de degats en moins.<br>
Si plusieurs Champions de l'equipe disposent de cette Competence, une seule sera activee. Cette competence ne s'activera pas sur les copies en double de ce Champion si ce Champion specifique est mort.<br><br>

Immunise contre les debuffs ${DEBUFFS.GEL}, ${DEBUFFS.STUN} et ${DEBUFFS.PROVOKE}.<br><br>

${ACTIVE}

Des que ce Champion est tue, le ranime avec 50% de PV et 100% de Compteur de Tour, puis lui accorde un buff ${BUFFS.BLOCK_DAMAGE} pendant 1 tour.`,
          cooldown: 5,
          isPassive: true,
        }
    ],
    stats: {
          "PV": "17505",
          "ATQ": "1707",
          "DEF": "980",
          "VIT": "115",
          "TAUX C.": "15",
          "DEG C.": "63",
          "RES": "30",
          "PRE": "0"
    }
  },
  form2: {
    type: "HP",
    spells: [
        {
          img: "assets/sort_f2_1.png",
          name: "Tempete d'epees",
          description: `Attaque 2 fois un ennemi. Place un debuff ${DEBUFFS.STUN} pendant 1 tour.<br><br>

Si les PV MAX de ce Champion sont superieurs ou egaux a ceux de la cible, il est impossible de resister a ce debuff.`,
          damage: "0.12*HP + 1.4*ATQ",
          levelInfo: ["Degats +20%"],
        },
        {
          img: "assets/sort_f2_2.png",
          name: "Rugissement provoquant",
          description: `Place un debuff ${DEBUFFS.PROVOKE} sur tous les ennemis pendant 1 tour. Si la cible est un Boss, place au lieu de ca un debuff ${DEBUFFS.PROVOKE} pendant 2 tours. Si les PV MAX de ce Champion sont superieurs ou egaux a ceux de la cible, il est impossible de resister a ces debuffs.<br><br>

Place un buff ${BUFFS.STRENGTHEN} de 25% sur tous les allies pendant 2 tours. Place egalement un buff ${BUFFS.COUNTER} sur ce Champion pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Ignorer la RES +20%", "Temps de rechare -1"],
        },
        {
          img: "assets/sort_f2_3.png",
          name: "Rupture glaciale",
          description: `Attaque tous les ennemis. Avant d'attaquer, place un debuff ${DEBUFFS.DEF} de 60% sur tous les ennemis pendant 2 tours. Si les PV MAX de ce Champion sont superieurs ou egaux a ceux de la cible, il est impossible de resister a ce debuff.<br><br>

Cette attaque inflige a chaque cible des degats individuelle des degats sur cible unique plutot que des degats de zone. Ignorera 30% de la DEF de chaque cible.<br>
Place une frappe supplementaire sur les Boss et les ennemis sous debuffs ${DEBUFFS.STUN} et ${DEBUFFS.PROVOKE}.<br>
Si une cible est un Boss, ou se trouve sous debuffs ${DEBUFFS.STUN} ou ${DEBUFFS.PROVOKE}, ignorera au lieu de cela 50% de la DEF.`,
          damage: "0.35*PV + 1.4*ATQ",
          cooldown: 4,
          levelInfo: ["Degats +20%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort_f2_4.png",
          name: "Metamorphe",
          description: `Fait passer ce Champion a sa Forme alternative. Accorde ensuite un Tour supplementaire.`,
          cooldown: 4,
        },
        {
          img: "assets/sort_f2_5.png",
          name: "Coeur d'ours [P]",
          description: `${PASSIVE}

Augmente les PV MAX et la DEF de ce Champion de 20% pour chaque ennemi et allie mort, dont les Boss et leurs sibres, lors d'un combat (s'accumule jusqu'a 100%).<br><br>

Immunise contre les debuffs ${DEBUFFS.GEL}, ${DEBUFFS.STUN} et ${DEBUFFS.PROVOKE}.<br><br>

${ACTIVE}

Des qu'un ennemi essaie de placer un debuff ${DEBUFFS.GEL}, ${DEBUFFS.STUN} ou ${DEBUFFS.PROVOKE} sur ce Champion, active instantanement la competence <span class='gt'>Rupture Glaciale</span>.<br>
Ceci ne placera pas la competence <span class='gt'>Rupture Glaciale</span> en temps de recharge.`,
          cooldown: 2,
          isPassive: true,
        }
    ],
    stats: {
          "PV": "25605",
          "ATQ": "815",
          "DEF": "1332",
          "VIT": "115",
          "TAUX C.": "15",
          "DEG C.": "63",
          "RES": "30",
          "PRE": "0"
    }
  }
};

const aura = {
  img: "../../../../../assets/images/auras/acc.png",
  description: `Augmente la statistique PRE des Allies lors de toutes les Batailles de 80.`
};
