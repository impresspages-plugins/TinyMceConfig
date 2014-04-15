
var originalConfigFunction = ipTinyMceConfig;

var ipTinyMceConfig = function () {
    var originalConfig = originalConfigFunction();
    originalConfig.style_formats = [
        {title: 'Main', items: [
            {title: 'Subheading', inline: 'span', classes: 'mainSubheading'}
        ]},
        {title: 'Docs :: Styles', items: [
            {title: 'Description', inline: 'span', classes: 'docsDescription'},
            {title: 'Code', inline: 'span', classes: 'docsCode'},
            {title: 'Danger', inline: 'span', classes: 'docsDanger'},
            {title: 'UI element', inline: 'span', classes: 'docsUi'}
        ]},
        {title: 'Docs :: Notes', items: [
            {title: 'Note heading', inline: 'span', classes: '_heading'},
            {title: 'Note: info', inline: 'span', classes: 'docsNoteInfo'},
            {title: 'Note: warning', inline: 'span', classes: 'docsNoteWarning'},
            {title: 'Note: danger', inline: 'span', classes: 'docsNoteDanger'}
        ]},
        {title: 'Default', items: [
            {title : 'Quote', inline : 'span', classes : 'quote'},
            {title : 'Note', inline : 'span', classes : 'note'},
            {title : 'Button', inline : 'span', classes : 'button'}
        ]}
    ];
    return originalConfig;
}
