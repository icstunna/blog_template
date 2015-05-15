$(document).on('page:change', function() {
  $("body").on('submit', '.render_comment',function(event) {
    event.preventDefault();

    var request = $.ajax({
      url: '/post/'+$(this).data('id')+'/comment',
      type: 'POST',
      dataType: 'JSON',
      data: {id: $(this).data('id'), comment: $('input.comment_input').val()}
    })
    request.done(function(data) {
      var comment = data.comment_content
      if (data.comment_content != "") {
        $('div.post'+data.id+'_comments ul').append('<li>'+comment+'</li>')
      }

    })
    request.fail(function(data) {
      console.log('fail')
    })
  });
});