// Esercizio:
// - creare una lista di cose da fare e mostrarla in pagina con Vue;
// - aggiungere un campo di input e un pulsante per aggiungere nuove cose da fare alla lista;
// - cancellare un item dalla lista, al click sulla relativa icona 'X'.
// Bonus:
// - Oltre al click sul pulsante, consentire l'inserimento del nuovo item anche premendo il tasto Invio della tastiera, dopo aver scritto il testo nel campo di input.

var app = new Vue(
  {
  el: "#vue_container",
    data: {
      listItem: [
        "",
        "",
        "",
        ""
      ]
    },
    methods: {
      nextImage: function () {
        this.imageIndex++;
        if (this.imageIndex == this.images.length) {
          this.imageIndex = 0;
          }
      },
    }
  }
);
