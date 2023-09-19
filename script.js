var app = "vnd.youtube://www.youtube.com/redirect?event=comments&redir_token=QUFFLUhqbUh3QVNLZU12UUJldTdQb2Y5RlNwN2EwVmlJZ3xBQ3Jtc0tuRmsxQzJzOGdXcmgwbklCUHA4Z3BLS0hyck03cVhnMlBoT19QdDdraTFlQ21oTzRxOUwtTWpHT2NKQXoxU29zQnE0Rk5sY1ltcksxYlBhNXhSMkxPNTdRU1RWMkhOaGRaZ3lSaF9jV3FSNWpTMHdKWQ&q=https%3A%2F%2Ft.co%2FKDmsAcAL3v&html_redirect=1";

    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(function() {

        if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          window.location.href = app;
          window.setTimeout(function() {
            window.location.href = mobileFallback;
          }, 25);
        } else {
          window.location.href = desktopFallback;
        }

        function killPopup() {
          window.removeEventListener('pagehide', killPopup);
        }

        window.addEventListener('pagehide', killPopup);
      }, 10);
    });