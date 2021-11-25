$(document).ready(function () {
  $('.project-block_click').click(function () {
    $(this).children('.project-dropdown__information').slideToggle('normal');
    return false;
  });

  $('.project-block_click').click(function () {
    $('.project-dropdown_item').children('.dropdown-icon').toggleClass('transform');
  });
});
