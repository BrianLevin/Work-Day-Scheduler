document.ready(function () {
    // listen for save button clicks
    $('.saveBtn').on('click', function () {
        // get nearby values
        var value = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');

        // save in localStorage
        localStorage.setItem(time, value);

    });
    function hourUpdater() {
        // get current number of hours
        var currentHour = moment().hours();

        // loop over time blocks
        $('.time-block').each(function () {
            var blockHour = parseInt($(this).attr('id').split('-')[1]);
        }

    }

});