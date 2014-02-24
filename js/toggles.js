$('.toggle').each(function() {
  $(this).toggles({
    click: !$(this).hasClass('noclick'),
    drag: !$(this).hasClass('nodrag'),
    clicker: ($(this).attr('rel')) ? $('.'+$(this).attr('rel')) : null,
    on: $(this).hasClass('on'),
    checkbox: ($(this).data('checkbox')) ? $('.'+$(this).data('checkbox')) : null,
    text: {
      on: $(this).data('ontext') || 'ON',
      off: $(this).data('offtext') || 'OFF'
    },
    transition: 'ease-out',
    type: $(this).data('type')
  });
});

$('#theme').on('change',function() {
  $('.examples').removeClass('toggle-light toggle-dark toggle-iphone toggle-modern toggle-soft').addClass('toggle-'+$(this).find('option:selected').attr('rel'));
  GoSquared.q.push(['TrackEvent','Changed Theme to '+$(this).find('option:selected').text(), {}]);
});

$('.downloads .min').on('click',function() {
  GoSquared.q.push(['TrackEvent','Downloaded Toggles', {}]);
});
$('.downloads .minny').on('click',function() {
  GoSquared.q.push(['TrackEvent','Downloaded Minified Toggles', {}]);
});

function selectText(element) {
  var doc = document;
  var text = element;

  if (doc.body.createTextRange) {
    var range = doc.body.createTextRange();
    range.moveToElementText(text);
    range.select();
  } else if (window.getSelection) {
    var selection = window.getSelection();
    var range = doc.createRange();
    range.selectNodeContents(text);
    selection.removeAllRanges();
    selection.addRange(range);
  }
}
$('code').on('click',function() {
  selectText(this);
});
