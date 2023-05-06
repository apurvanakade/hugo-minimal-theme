document.addEventListener('DOMContentLoaded', function () {
  var toggleMenuButton = document.getElementById('toggle-menu');
  var postMenu = document.getElementById('post-menu');

  toggleMenuButton.addEventListener('click', function () {
    postMenu.style.display = postMenu.style.display === 'block' ? 'none' : 'block';
  });
});
