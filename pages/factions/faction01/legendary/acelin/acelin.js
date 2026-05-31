const championData = {
type: "Defense",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Marteau de Kaerok",
          description: `Attaque un ennemi. Possède 50 % de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour. 

Ignorera 25 % de la RÉS de la cible si ce Champion dispose d'un buff ${BUFFS.SHIELD}.`,
          damage: "3.5*DEF",
          levelInfo: [
            "Dégâts +10%",
            "Chance de Buff/débuff +10%",
            "Dégâts +10%",
            "Chance de Buff/débuff +15%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Écrasement de bouclier",
          description: `Soigne tous les alliés de la valeur totale des ${BUFFS.SHIELD}s sur tous les alliés. 

Retire ensuite tous les ${BUFFS.SHIELD}s sur les alliés, puis attaque tous les ennemis. Les dégâts infligés par cette attaque sont équivalents à la valeur totale des ${BUFFS.SHIELD}s retirés (les dégâts ne peuvent pas dépasser 1 000 % de la DÉF de ce Champion).`,
		  damage: "DEF + Valeur du Bouclier",
          cooldown: 4,
          levelInfo: [
            "Soins +10%",
            "Soins +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Admirez la bannière",
          description: `Place un buff ${BUFFS.SHIELD} équivalent à 30 % des PV MAX de ce Champion sur tous les alliés pendant 2 tours et un buff ${BUFFS.ALLY_PROTECT} de 50 % sur tous les alliés sauf ce Champion pendant 2 tours.`,
          cooldown: 5,
          factions: [
            `Active instantanément cette compétence  dès qu’un allié est ranimé. Ne placera pas cette compétence en temps de recharge. Si plusieurs Champion de l’équipe disposent de cette Compétence, une seule sera activée. Cette competence ne s'activera pas sur les copies en double de ce Champion si ce Champion specifique est mort.`,
            `Place également un buff ${BUFFS.BLOCK_DAMAGE} sur ce Champion pendant 2 tours.`,
            `Les buffs placés par cette compétence ne peuvent pas être retirés.`,
          ],
          levelInfo: [
            "Bouclier +10%",
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Chevalier ultime [P]",
          description: `Les alliés sous buff ${BUFFS.SHIELD} reçoivent 10 % de dégâts en moins. Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de ce Champion si ce Champion spécifique est mort.`,
          factions: [
            `Les alliés sous buff ${BUFFS.SHIELD} sont immunisés contre les débuffs ${DEBUFFS.STUN}, ${DEBUFFS.GEL}, ${DEBUFFS.SLEEP}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR} et ${DEBUFFS.PETRIFICATION}`,
            `Les alliés sous buffs ${BUFFS.ALLY_PROTECT} ont 20% de chances de contre-attaquer lorsqu’ils sont frappés.`,
            `La valeur de tous les buffs ${BUFFS.SHIELD} alliés est augmentée de 100% sauf les buffs ${BUFFS.SHIELD} accordés par des Jeux d’Artefacts.`,
          ],
          isPassive: true,
        },
      ],
      stats: {
        PV: "18 825",
        ATQ: "760",
        DEF: "1 564",
        VIT: "106",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "30",
        PRÉ: "0",
      },
  };

  const aura = {
  img: "../../../../../../assets/images/auras/sup-defence.webp",
  description: `
    Augmente la statistique DEF des Alliés lors de toutes les Batailles de 25%.<br><br>
    Augmente la statistique PV des Alliés lors de toutes les Batailles de 15%.
    (ne s'applique qu'a la Faction des Seigneurs de l'Oriflamme).
  `,
};

