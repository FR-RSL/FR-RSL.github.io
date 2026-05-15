const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.png",
          name: "Oppression",
          description: `Attaque un ennemi. Possede 75% de chances de placer un debuff ${DEBUFFS.FEAR} pendant 1 tour. Possede 75% de chances d'augmenter d'1 tour la duree de tous les debuffs ${DEBUFFS.POISON_S}.${RETURN}${RETURN}
${PASSIVE}
Attaque tous les ennemis avec cette Competence des qu'ils place un debuff ${DEBUFFS.GEL}, ${DEBUFFS.STUN}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR} ou ${DEBUFFS.PETRIFICATION} sur un allie. Le nombre d'attaques augmente en fonction du nombre de debuffs places a ce moment : 1 attaque pour chaque debuff ${DEBUFFS.GEL}, ${DEBUFFS.STUN}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR} ou ${DEBUFFS.PETRIFICATION} place. La premiere attaque ciblera l'assaillant et toutes les frappes supplementaires attaqueront des ennemis choisis au hasard. Ne peut attaquer chaque ennemi qu'une fois.`,
          damage: "3.75*ATQ",
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
        },
        {
          img: "assets/sort2.png",
          name: "Pleurs de Sirene",
          description: `Attaque tous les ennemis. Possede 75% de chances de placer un debuff ${DEBUFFS.DEF} de 60% et un debuff ${DEBUFFS.WEAKEN} de 25% pendant 2 tours.${RETURN}${RETURN}
Place egalement un buff ${BUFFS.STRENGTHEN} de 25% et un buff ${BUFFS.SPD} de 30% sur tous les allies pendant 2 tours.`,
          damage: "4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.png",
          name: "Invalidation",
          description: `Attaque 2 fois un ennemi. La premiere frappe possede 75% de chances de placer un debuff ${DEBUFFS.POISON_S} de 25% pendant 2 tours. La seconde frappe possede 75% de chances de placer un debuff ${DEBUFFS.BLOCK_BUFFS} et un debuff ${DEBUFFS.LOCK_ACTIVE} pendant 2 tours.`,
          damage: "3.2*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.png",
          name: "Prise Mortelle [P]",
          description: `<span class="grn-t">Empeche</span> chaque tentative de reanimation ennemie. Cela fonctionne meme si cette Championne est morte.${RETURN}${RETURN}
Si cette Championne est vivante lorsqu'une reanimation ennemie est empechee, ranime les allies morts avec 50% de PV et 50% de Compteur de Tour. Accorde un Tour Supplementaire si aucun allie n'est mort.${RETURN}${RETURN}
Si cette Championne est morte lorsqu'une reanimation ennemie est empechee, ranime cette Championne avec 50% de PV et 50% de Compteur de Tour.${RETURN}${RETURN}
Cette competence ignorera ${DEBUFFS.BLOCK_REA}.`,
          cooldown: 9,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: true,
        }
  ],
  stats: {
        "PV": "20 805",
        "ATQ": "903",
        "DEF": "1 288",
        "VIT": "110",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "40",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/res.png",
  description: `Augmente la statistique RES des Allies dans les batailles d'Arène de 100.`
};
