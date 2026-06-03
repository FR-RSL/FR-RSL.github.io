/**
 * Tri des champions dans les hubs de faction
 * Ordre : Affinité (Magie → Force → Esprit → Néant), puis ancienneté (Id interne croissant)
 * Dépend de champion-sort-data.js (CHAMPION_SORT)
 */
(function () {
  function sortHubGrids() {
    document.querySelectorAll('.champions-grid').forEach(function (grid) {
      var cards = Array.from(grid.querySelectorAll('.champion-card'));
      if (cards.length < 2) return;

      cards.sort(function (a, b) {
        var folderA = getFolderFromCard(a);
        var folderB = getFolderFromCard(b);
        var sortA = (typeof CHAMPION_SORT !== 'undefined' && CHAMPION_SORT[folderA]) || { a: 99, i: 99999 };
        var sortB = (typeof CHAMPION_SORT !== 'undefined' && CHAMPION_SORT[folderB]) || { a: 99, i: 99999 };

        if (sortA.a !== sortB.a) return sortA.a - sortB.a;
        return sortA.i - sortB.i;
      });

      cards.forEach(function (card) { grid.appendChild(card); });
    });
  }

  function hideEmptyRaritySections() {
    document.querySelectorAll('.rarity-section').forEach(function (section) {
      var grid = section.querySelector('.champions-grid');
      if (!grid || grid.querySelectorAll('.champion-card').length === 0) {
        section.style.display = 'none';
      }
    });
  }

  function getFolderFromCard(card) {
    var href = card.getAttribute('href') || '';
    // e.g. "legendary/champfort/champfort.html" → "champfort"
    // or   "../legendary/champfort/champfort.html"
    var parts = href.replace(/\\/g, '/').split('/');
    // Remove trailing filename (lastPart) and take the segment before it
    // parts[-1] = "champfort.html", parts[-2] = "champfort"
    if (parts.length >= 2) {
      var last = parts[parts.length - 1];
      // folder = filename without extension
      return last.replace(/\.html$/i, '');
    }
    return href;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      sortHubGrids();
      hideEmptyRaritySections();
    });
  } else {
    sortHubGrids();
    hideEmptyRaritySections();
  }
})();
