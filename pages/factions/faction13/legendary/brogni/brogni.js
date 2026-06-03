const championData = {
  type: "Soutien",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Fléau de Cristal",
          description: `Attaque un ennemi. Possède 45 % de chances de placer un débuff ${DEBUFFS.BURN} pendant 2 tours.`,
          damage: "6.5*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Chances de Buff/débuff +5%",
            "Chances de Buff/débuff +5%",
            "Chances de Buff/débuff +5%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Poigne de Caverne",
          description: `Attaque tous les ennemis. Possède 75 % de chances de retirer 1 buff aléatoire sur tous les ennemis.${RETURN}${RETURN}

Possède 75 % de chances de retirer 1 débuff aléatoire sur tous les alliés. Augmente la valeur des buffs ${BUFFS.SHIELD} sur tous les alliés de 30 % des dégâts infligés.`,
          damage: "6.6*ATQ",
          cooldown: 4,
          levelInfo: [
            "Dégâts +10%",
            "Chances de Buff/débuff +5%",
            "Chances de Buff/débuff +10%",
            "Chances de Buff/débuff +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Lueur Tenace",
          description: `Place un buff ${BUFFS.BLOCK_DEBUFFS} et un buff ${BUFFS.ATK} de 50 % sur tous les alliés pendant 2 tours. Place également sur tous les alliés un buff ${BUFFS.SHIELD} équivalent à 30 % des PV MAX de ce Champion pendant 2 tours. Le buff ${BUFFS.SHIELD} ne peut être retiré.`,
          cooldown: 5,
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Redoute [P]",
          description: `
            Lorsqu'un allié se trouvant sous buff <span class='gbt'>Bouclier</span>${RETURN}
            se fait attaquer, renvoie sur l'assaillant 25% des degats infliges au <span class='gbt'>Bouclier</span>.${RETURN}
            Soigne également cet allié de 25% des degats infliges au <span class='gbt'>Bouclier</span>.<br><br>${RETURN}
            Si plusieurs Champions de l'equipe disposent de cette compétence, une seule sera activee.
          `,
          isPassive: true,
        },
      ],
      stats: {
        PV: "22 965",
        ATQ: "782",
        DEF: "1 266",
        VIT: "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "90",
        PRÉ: "0",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/res.webp",
    description: `
      Augmente la statistique RES des Alliés dans la Tour du Malheur de 60.
    `,
  };

