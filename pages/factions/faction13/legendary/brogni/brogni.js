const championData = {
  type: "Soutien",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Fleau de Crystal",
          description: `
            Attaque un ennemi.
            Possède 45% de chances de placer un débuff
            <span class='gbt'>Brulure de PV</span> pendant 2 tours.
          `,
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
          description: `
            Attaque tous les ennemis. Possède 75% de chances de retirer
            un buff aleatoire sur tous les ennemis.<br><br>
            Possède 75% de chances de retirer 1 débuff aleatoire sur tous les alliés.
            Augmente la valeur des buffs <span class='gbt'>Bouclier</span> sur tous les alliés 
            de 30% des degats infliges.
          `,
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
          description: `
            Place un buff <span class='gbt'>Blocage des débuffs</span> et un buff <span class='gbt'>Augmentation d'ATQ</span>
            de 50% sur tous les alliés pendant 2 tours.
            Place également sur tous les alliés un buff <span class='gbt'>Bouclier</span>
            equivalent a 30% des PV MAX de ce Champion pendant 2 tours.
            Le buff <span class='gbt'>Bouclier</span> ne peut etre retire. 
          `,
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
            Lorsqu'un allié se trouvant sous buff <span class='gbt'>Bouclier</span>
            se fait attaquer, renvoie sur l'assaillant 25% des degats infliges au <span class='gbt'>Bouclier</span>.
            Soigne également cet allié de 25% des degats infliges au <span class='gbt'>Bouclier</span>.<br><br>
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

