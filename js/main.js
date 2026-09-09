// Size guide interactive tab switching
document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.cat-btn');
  const panels = document.querySelectorAll('.tab-panel');

  tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      // Deactivate all tabs
      tabs.forEach(function(t) {
        t.classList.remove('is-active');
        t.setAttribute('aria-selected', 'false');
      });

      // Activate clicked tab
      tab.classList.add('is-active');
      tab.setAttribute('aria-selected', 'true');

      // Hide all panels
      panels.forEach(function(p) {
        p.classList.remove('is-active');
      });

      // Show matching panel
      const target = tab.getAttribute('data-tab');
      const panel = document.getElementById('panel-' + target);
      if (panel) {
        panel.classList.add('is-active');
      }
    });
  });
});
