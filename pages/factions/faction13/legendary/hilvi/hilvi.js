const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Torche de flamme-gel",
          description: `Attaque 2 fois un ennemi. Chaque frappe a 50% de chances de placer un débuff ${DEBUFFS.DEF} de 60% pendant 2 tours.${RETURN}${RETURN}

Si Tormin le Froid se trouve dans la même équipe, a 25% de chances d'activer instantanément sa compétence Feu givré.`,
          damage: "2.6*ATQ",
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Froid d'amertume",
          description: `Retire tous les buffs sur tous les ennemis, puis leur inflige un débuff ${DEBUFFS.GEL} pendant 1 tour.${RETURN}${RETURN}

Si Tormin le Froid se trouve dans la même équipe, active instantanément sa compétence Rage du Blizzard.${RETURN}${RETURN}

Le temps de recharge de cette compétence ne peut être ni réduit ni réinitialisé.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Garde du glacier",
          description: `Ranime tous les alliés morts avec 50% de PV et 30% de Compteur de Tour.${RETURN}${RETURN}

Place sur tous les alliés un buff ${BUFFS.BLOCK_DAMAGE} pendant 1 tour et un buff ${BUFFS.SPD} de 30% pendant 2 tours. Ces buffs seront placés même si aucun allié n'a été ranimé.${RETURN}${RETURN}

Si aucun allié n'a été ranimé par cette compétence, remplit également de 25% les Compteurs de Tour de tous les alliés.${RETURN}${RETURN}

Le temps de recharge de cette compétence ne peut être ni réduit ni réinitialisé.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Mission divine [P]",
          description: `Dès qu'un ennemi reçoit un débuff ${DEBUFFS.GEL}, cette Championne lui vole 1 buff aléatoire, lui inflige un débuff ${DEBUFFS.BURN} pendant 2 tours et réduit de 10% son Compteur de Tour.${RETURN}${RETURN}

Si Tormin le Froid se trouve dans la même équipe, remplit son Compteur de Tour d'une quantité égale au Compteur de Tour ennemi réduit par cette compétence. Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de cette Championne si cette Championne spécifique est morte.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 475",
        "ATQ": "826",
        "DEF": "1 387",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 19%`,
};
