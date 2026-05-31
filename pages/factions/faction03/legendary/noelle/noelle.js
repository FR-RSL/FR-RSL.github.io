const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bâton craque-glace",
          description: `Attaque un ennemi. 

Possède 80 % de chances de placer un débuff ${DEBUFFS.BLOCK_BUFFS} pendant 2 tours. 

Réduit également le Compteur de Tour de la cible de 20 % si elle se trouve sous débuff ${DEBUFFS.GEL}. 

Il est impossible de résister à ces effets si Sieur Nicolas se trouve dans la même équipe.`,
          damage: "5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Frisson revigorant",
          description: `Cible un allié.

Si l'allié ciblé se trouve sous débuff ${DEBUFFS.SHEEP}, retire ce dernier. Si l'allié ciblé ne se trouve pas sous débuff ${DEBUFFS.SHEEP}, retire au lieu de ça tous ses débuffs. 

Si l'allié ciblé ne se trouve pas sous débuff ${DEBUFFS.SHEEP}, le soigne de 50 % des PV MAX de cette Championne. Soigne également tous les alliés à hauteur de 50 % du soin excédentaire. 

Si l'allié ciblé est Sieur Nicolas, active instantanément sa compétence Bienveillance. 

Place ensuite un buff ${BUFFS.SPD} de 30 % sur tous les alliés pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Garde-foyer",
          description: `Ranime tous les alliés morts avec 50 % de PV et 50 % de Compteur de Tour. 

Possède ensuite 75 % de chances de placer un débuff ${DEBUFFS.GEL} sur tous les ennemis pendant 1 tour. Placera un débuff ${DEBUFFS.GEL} même s'il n'y a pas d'alliés morts. Il est impossible de résister à ce débuff et de le bloquer si Sieur Nicolas se trouve dans la même équipe.`,
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Reine cryomantique [P]",
          description: `Réduit la VIT des ennemis sous débuff ${DEBUFFS.GEL} de 10 %. 

Dès qu'un débuff ${DEBUFFS.SHEEP} expire sur un allié, remplit son Compteur de Tour de 50 %. 

Si plusieurs Champions de l'équipe disposent de cette Compétence, ces effets ne seront activés qu'une fois.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 805",
        "ATQ": "892",
        "DEF": "1 299",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors des batailles d'Arène de 30%`,
};
