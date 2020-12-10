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
      newItem: "",
      listItem: [
        "cosa da fare 1",
        "cosa da fare 2",
        "cosa da fare 3",
        "cosa da fare 4"
      ]
    },
    methods: {
      addList: function () {
        this.listItem.push(this.newItem);
      },
      removeItem: function (item) {
        this.listItem.splice(this.listItem.indexOf(item), 1);
      }
    }
  }
);
