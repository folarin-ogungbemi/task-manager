document.addEventListener('DOMContentLoaded', function() {
    // Sidenav initialization
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // datepicker initialization
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format: 'mmm dd, yyyy',
      i18n: { done: 'select'}
    });

    // category initialization
    let category = document.querySelectorAll('select');
    M.FormSelect.init(category);

    // collapse initialization
    let collapse = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapse);
  });
