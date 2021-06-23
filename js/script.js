var app = new Vue({
    el: "#root",
    data: {
        todo_list: [
            {
                text: 'aperitivo',
                date: '24/06/2021'
            },
            {
                text: 'dentista',
                date: '25/06/2021'
            },
            {
                text: 'Calcetto',
                date: '26/06/2021'
            }
        ],
        new_todo: ''
    },
    methods: {
        aggiungi_todo() {
            let nuovo_todo = {
                text: this.new_todo,
                date: '12/11/2020'
            };
            this.todo_list.push(nuovo_todo);
            this.new_todo = '';
        },
        rimuovi_todo(indice_todo) {
            this.todo_list.splice(indice_todo, 1);
        }
    }
});