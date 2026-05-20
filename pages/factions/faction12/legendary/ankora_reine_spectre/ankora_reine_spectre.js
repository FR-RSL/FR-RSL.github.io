const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Necro-eclair",
          description: `Attaque un ennemi.${RETURN}${RETURN}
Possede 30% de chances de reduire de 2 tours le temps de recharge d'une competence aleatoire d'un allie (sauf cette Championne).${RETURN}${RETURN}
Si <span class="gold-t">Narses Roi Spectre</span> se trouve dans la meme equipe et a des competences actives en recharge, reduit de 2 tours le temps de recharge de l'une de ses competences.${RETURN}${RETURN}
Si <span class="gold-t">Narses Roi Spectre</span> se trouve dans la meme equipe equipe et n'a aucune competence active en recharge, reduit de 2 tours le temps de recharge d'une competence aleatoire d'un allie (sauf cette Championne).${RETURN}${RETURN}
Si le temps de recharge d'un competence est totalement recharge, soigne egalement cet allie de 10% des PV MAX de cette Championne.`,
          damage: "5.6*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Bouclier d'Emaria",
          description: `Retire tous les debuffs sur tous les allies et place un buff ${BUFFS.SHIELD} equivalent a 25% des PV MAX de cette Championne pendan 2 tours.${RETURN}${RETURN}
Si <span class="gold-t">Narses Roi Spectre</span> se trouve dans la meme equipe, place egalement un buff ${BUFFS.STRENGTHEN} de 2% sur tous les allies pendant 2 tours.${RETURN}${RETURN}
Ensuite, remplit le Compteur de Tour de tous les allies de 10%.`,
          cooldown: 4,
          levelInfo: ["Bouclier +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Leve-toi, mon amour",
          description: `Ranime un allie mort avec 50% de PV et 75% de Compteur de Tour. Reinitialise les temps de recharge des competences de l'allie ranime.${RETURN}${RETURN}
Si la cible est <span class="gold-t">Narses Roi Spectre</span>, le ranime avec 75% de PV et 100% de Compteur de Tour.${RETURN}${RETURN}
Apres la reanimation, reduit le Compteur de Tour de tous les ennemis de 10%.${RETURN}${RETURN}
Si <span class="gold-t">Narses Roi Spectre</span> est ranime, reduit le Compteur de Tour de tous les ennemis de 20%. Il est impossible de resister a cet effet.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Reine consort [P]",
          description: `Des qu'un ennemi essaie de placer un debuff ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.GEL}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.SLEEP}, ${DEBUFFS.STUN} ou ${DEBUFFS.PETRIFICATION} sur l'allie qui a les DEG C. les plus eleves, transfere au lieu de cela ces debuffs sur cette Championne.${RETURN}${RETURN}
Remplit le Compteur de Tour de cette Championne de 50% si elle manque un tour a cause de l'un de ces debuffs.${RETURN}${RETURN}
Au debut du tour de cette Championne, retire les debuffs ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.GEL}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.SLEEP}, ${DEBUFFS.STUN} ou ${DEBUFFS.PETRIFICATION} sur cette Championne si <span class="gold-t">Narses Roi Spectre</span> se trouve dans la meme equipe.${RETURN}${RETURN}
Si plusieurs Champions de l'equipe disposent de cette compétence, une seule sera activee. Cette competence ne s'activera pas sur les copies en double de cette Championne si cette Championne specifique est morte.`,
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
