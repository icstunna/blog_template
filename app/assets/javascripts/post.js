$(document).on('page:change', function() {
  $('.render_post').on('click', function(event) {
    event.preventDefault();

    var post_id = $(this).data('id')

    $('.post'+post_id+'_comments').show();
    var request = $.ajax({
      url: '/post',
      type: 'GET',
      dataType: 'JSON',
      data: {id: $(this).data('id')}
    })
    request.done(function(data) {
      var x = data.post_content
      var form = '<form class="render_comment" data-id="'+data.id+'"><input class="comment_input" type="text" name="comment"><input type="submit" value="new comment"></form>'

      var remove = '<span><button type="button" data-id="'+data.id+'" class="delete">DELETE</button><form action="post/'+data.id+'/edit" data-id="'+data.id+'" class="edit"><input type="submit" value="edit"></form></span>'

      $('div.post'+data.id).append('<span class="post'+data.id+'"><p>'+x+'</p>'+remove+form+'</span>')
    })
    request.fail(function(data) {
      console.log('failing')
    })
  });

  $('body').on('click', '.delete', function(event) {
    event.preventDefault();

    var post_id = $(this).data('id')

    var request = $.ajax({
      url: '/post/'+post_id,
      type: 'DELETE',
      dataType: 'JSON',
      data: {destroy_id: post_id}
    })
    request.done(function(data) {
      $('li.post'+data.id).hide()
    })
    request.fail(function(data) {
      console.log('failing')
    })
  });

  // $('body').on('click', '.edit', function(event) {
  //   event.preventDefault();

  //   // debugger
  //   var post_id = $(this).data('id')

  //   var request = $.ajax({
  //     url: '/post/'+post_id+'/edit',
  //     type: 'GET'
  //   })
  //   request.done(function(data) {
  //     console.log("win")
  //   })
  // })
});
