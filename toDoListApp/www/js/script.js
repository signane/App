$(document).ready(function() {
    // Fonction pour ajouter une tâche
    function addTask(taskText) {
        $('#taskList').append(`
            <li>
                <a href="#">${taskText}</a>
                <button class="removeTaskBtn ui-btn ui-btn-inline ui-corner-all">Remove</button>
            </li>
        `);
        $('#taskInput').val('');
        $('#taskList').listview('refresh');

        // Ajouter un écouteur d'événements swiperight à la nouvelle tâche
        $('#taskList li').last().on('swiperight', function() {
            $(this).addClass('completed');
        });

        // Ajouter un écouteur d'événements click pour le bouton de suppression
        $('#taskList li').last().find('.removeTaskBtn').on('click', function() {
            $(this).closest('li').remove();
            $('#taskList').listview('refresh');
        });
    }

    // Ajouter une tâche en cliquant sur le bouton
    $('#addTaskBtn').on('click', function() {
        let taskText = $('#taskInput').val();
        if (taskText.trim() !== "") {
            addTask(taskText);
        }
    });

    // Ajouter une tâche en appuyant sur la touche Enter
    $('#taskInput').on('keypress', function(event) {
        if (event.which === 13) { // 13 est le code de la touche Enter
            let taskText = $('#taskInput').val();
            if (taskText.trim() !== "") {
                addTask(taskText);
            }
        }
    });

    // Ajouter un écouteur d'événements swiperight aux tâches existantes au chargement de la page
    $('#taskList').on('swiperight', 'li', function() {
        $(this).addClass('completed');
    });

    // Ajouter un écouteur d'événements click pour le bouton de suppression aux tâches existantes
    $('#taskList').on('click', '.removeTaskBtn', function() {
        $(this).closest('li').remove();
        $('#taskList').listview('refresh');
    });
});
