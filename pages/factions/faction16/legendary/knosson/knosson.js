const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Force de Lakon",
          description: `Attaque un ennemi.${RETURN}${RETURN}
Detruit 10% des PV MAX de la cible. Detruit au lieu de cela 20% des PV MAX de la cible si elle se trouve sous debuff ${DEBUFFS.PROVOKE} (s'accumule jusqu'a 50%).${RETURN}${RETURN}
Chaque coup augmente le Compteur de Tour de ce Champion de 20%.${RETURN}
Augmente au lieu de cela le Compteur de Tour de 40% si la cible est affligee d'un debuff ${DEBUFFS.PROVOKE}.`,
          damage: "0.23*PV",
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +15%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Par les cornes",
          description: `Attaque un ennemi.${RETURN}${RETURN}
Ignorera 50% de la DEF de la cible et les buffs ${BUFFS.STONE_SKIN} si les PV MAX de ce Champion sont plus eleves que ceux de la cible.${RETURN}${RETURN}
Si la cible est tuee, active instantanement la competence <span class="grn-t">Confiance durement gagnee</span>.${RETURN}
Si la cible survit, soigne tous les allies d'une quantite egale a la difference entre les PV actuels et les PV MAX de la cible.`,
          damage: "0.35*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +15%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Confiance durement gagnee",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}
A 80% de chances de placer un debuff ${DEBUFFS.PROVOKE} sur tous les ennemis pendant 1 tour. Ignorera 50% de la RES contre les cibles dont les PV MAX sont inferieurs a ceux de ce Champion.${RETURN}${RETURN}
Place un buff ${BUFFS.COUNTER} sur ce Champion pendant 2 tours.`,
          damage: "0.27*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort4.webp",
          name: "C'est tout ce que t'as ? [P]",
          description: `Les ennemis sous debuff ${DEBUFFS.PROVOKE} infligent 50% de degats en moins.${RETURN}${RETURN}
Les allies infligent 20% de degats supplementaires contre les ennemis sous debuffs ${DEBUFFS.PROVOKE}.${RETURN}${RETURN}
Si plusieurs Champions de l'equipe disposent de cette Competence, une seule sera activee. Cette competence ne s'activera pas sur les copies en double de ce Champion si ce Champion specifique est mort.`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "23 130",
        "ATQ": "738",
        "DEF": "1 299",
        "VIT": "97",
        "TAUX C.": "15%",
        "DEG C.": "63%",
        "RES": "30",
        "PRE": "10"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRE des Allies dans les batailles d'Arene de 80.`
};
