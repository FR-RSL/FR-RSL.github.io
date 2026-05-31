const championData = {
  type: "Soutien",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Hache de Défense-noire",
          description: `Attaque un ennemi. Possède 40 % de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour. 

Il est impossible de résister à ce débuff lorsque ce Champion attaque au cours de son tour actif.`,
          damage: "3*DEF + 0.2*PV",
          levelInfo: [
            "Dégâts +10%",
            "Chances de Buff/débuff +10%",
            "Dégâts +10%",
            "Chances de Buff/débuff +10%"
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Ordres de l'Amiral",
          description: `Retire tous les débuffs sur tous les alliés. 

Fait ensuite équipe avec tous les alliés pour attaquer un seul ennemi. Les alliés qui rejoignent l'attaque utiliseront leurs compétences par défaut.`,
          cooldown: 6,
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Défenseur de Fer céleste",
          description: `Retire tous les buffs d'une cible ennemie, puis lui inflige un débuff ${DEBUFFS.STUN} pendant 2 tours.

Remplit le Compteur de Tour de ce Champion de 50 %. Remplit le Compteur de Tour de ce Champion de 10 % supplémentaires pour chaque buff retiré à la cible.`,
          cooldown: 5,
          factions: [
            "Il est impossible de resister au retrait de buff et au placement du débuff <span class='gbt'>Etourdissement</span>.",
            "Reinitialise le temps de recharge de cette compétence des qu'un ennemi est tuee lorsqu'il se trouve sous débuff <span class='gbt'>Etourdissement</span> place par ce Champion.",
            "Les alliés infligent le double des degats aux cibles affligees de débuffs <span class='gbt'>Etourdissement</span> places par ce Champion."
          ],
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Rassembleur des Nains [P]",
          description: `Les alliés contre-attaqueront dès qu'ils perdent 10 % ou plus de leurs PV MAX lors d'une seule frappe. Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de ce Champion si ce Champion spécifique est mort.`,
          factions: [
            `Des qu'un allié place un débuff <span class='gbt'>Peur</span>,
            <span class='gbt'>Peur Absolue</span>,
            <span class='gbt'>Gel</span>,
            <span class='gbt'>Provocation</span>,
            <span class='gbt'>Sommeil</span>,
            <span class='gbt'>Etourdissement</span> ou
            <span class='gbt'>Petrification</span>,
            remplit le Compteur de TOur de ce Champion de 20%.
            Se produit une fois par compétence. Si plusieurs Champions de l'equipe
            disposent de cette compétence, une seule sera activee. Cette competence ne s'activera pas sur les copies en double de ce Champion si ce Champion specifique est mort.`,
            `Lorsqu'un allié est attaque, a 50% de chances de placer un débuff
            <span class='gbt'>Reduction de RES</span> de 50% et un débuff
            <span class='gbt'>Reduction de VIT</span> de 30% sur l'assaillant pendant 1 tour.
            Si l'allié benificie de buffs
            <span class='gbt'>Blocage des Degats</span>,
            <span class='gbt'>Invincible</span>,
            <span class='gbt'>Protection d'allié</span> ou
            <span class='gbt'>Peau de Pierre</span>, les chances passent a 100%.
            Si plusieurs Champions de l'equipe
            disposent de cette compétence, une seule sera activee. Cette competence ne s'activera pas sur les copies en double de ce Champion si ce Champion specifique est mort.`,
            `Au debut de chaque manche, place un buff
            <span class='gbt'>Peau de Pierre</span> sur tous les alliés pendant 1 tour.
            Si plusieurs Champions de l'equipe
            disposent de cette compétence, une seule sera activee. Cette competence ne s'activera pas sur les copies en double de ce Champion si ce Champion specifique est mort.`,
          ],
          isPassive: true,
        },
      ],
      stats: {
        PV: "20 640",
        ATQ: "826",
        DEF: "1 376",
        VIT: "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "50",
        PRÉ: "0",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/sup-acc.webp",
    description: `
      Augmente la statistique PRE des Alliés lors de toutes les Batailles de 60.<br><br>
      Augmente la statistique VIT des Alliés lors de toutes les Batailles de 15%<br>
      (ne s'applique qu'a la Faction des Nains).
    `,
  };

