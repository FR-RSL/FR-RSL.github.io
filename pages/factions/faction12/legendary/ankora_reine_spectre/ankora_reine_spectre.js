const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Nécro-éclair",
          description: `Attaque un ennemi. 

Possède 30 % de chances de réduire de 2 tours le temps de recharge d'une compétence aléatoire d'un allié (sauf cette Championne). 

Si Narses Roi Spectre se trouve dans la même équipe et a des compétences actives en recharge, réduit de 2 tours le temps de recharge de l'une de ses compétences. 

Si Narses Roi Spectre se trouve dans la même équipe et n'a aucune compétence active en recharge, réduit de 2 tours le temps de recharge d'une compétence aléatoire d'un allié (sauf cette Championne). 

Si le temps de recharge d'une compétence est totalement rechargé, soigne également cet allié de 10 % des PV MAX de cette Championne.`,
          damage: "5.6*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Bouclier d'Emaria",
          description: `Retire tous les débuffs sur tous les alliés et place un buff ${BUFFS.SHIELD} équivalent à 25 % des PV MAX de cette Championne pendant 2 tours. 

Si Narses Roi Spectre se trouve dans la même équipe, place également un buff ${BUFFS.STRENGTHEN} de 25 % sur tous les alliés pendant 2 tours. 

Ensuite, remplit le Compteur de Tour de tous les alliés de 10 %.`,
          cooldown: 4,
          levelInfo: ["Bouclier +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Lève-toi, mon amour",
          description: `Ranime un allié mort avec 50 % de PV et 75 % de Compteur de Tour. Réinitialise les temps de recharge des compétences de l'allié ranimé. 

Si la cible est Narses Roi Spectre, le ranime avec 75 % de PV et 100 % de Compteur de Tour. 

Après la réanimation, réduit le Compteur de Tour de tous les ennemis de 10 %. 

Si Narses Roi Spectre est ranimé, réduit le Compteur de Tour de tous les ennemis de 20 %. Il est impossible de résister à cet effet.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Reine consort [P]",
          description: `Dès qu'un ennemi essaie de placer un débuff ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.GEL}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.SLEEP}, ${DEBUFFS.STUN} ou ${DEBUFFS.PETRIFICATION} sur l'allié qui a les DÉG C. les plus élevés, transfère au lieu de cela ces débuffs sur cette Championne.

Remplit le Compteur de Tour de cette Championne de 50 % si elle manque son tour à cause de l'un de ces débuffs.

Au début du tour de cette Championne, retire les débuffs ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.GEL}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.SLEEP}, ${DEBUFFS.STUN} ou ${DEBUFFS.PETRIFICATION} sur cette Championne si Narses Roi Spectre se trouve dans la même équipe. 

Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de cette Championne si cette Championne spécifique est morte.`,
          cooldown: 3,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: true,
        }
  ],
  stats: {
        "PV": "20 805",
        "ATQ": "980",
        "DEF": "1 211",
        "VIT": "111",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "40",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 19%.`
};
