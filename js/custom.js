$(function(){
    $('#dialog').dialog({
        autoOpen: false,
        autofocus: true,
        dialogClass: 'no-close',
        resizable: false,
        height: 'auto',
        modal: false,
        width: 400,
        draggable: false,
        classes: {
            "ui-dialog": "highlight"
        },
        closeOnEscape: false,
        closeText: "hide",
        buttons: [
            {
                text: "Close",icon: "ui-icon-heart",
                click: function(){
                    $(this).dialog("close");
                }
            }
        ],
        hide: {
            effect: 'fold',
            duration: '1500',
            delay: '1000',
        },
        maxHeight: 600,
        modal: true
    });
    $("#openDialog").click(function(){
        $('#dialog').dialog("open");
    })
});