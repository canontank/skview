var imgList = new Array(
																										'2020-10', '2020-11'
);

$(document).ready(function() {
    for (var img of imgList) {
        $('#skview').append($('<div/>', { html : img.replace('-', '. ') }));
        $('#skview').append($('<div/>', {})
            .append($('<img/>', { src : 'img/' + img + '.jpg' }))
        );
        $('#skview').append($('<div/>', { class : 'clear20' }));
    }
});