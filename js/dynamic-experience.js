(function($) {
    // Dynamically calculate experience years
    const startDate = new Date("2021-07-01");
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();

    if (months < 0 || (months === 0 && now.getDate() < startDate.getDate())) {
        years--;
        months += 12;
    }

    // Display as "X+ years" if more than 6 months
    const experienceText = (months >= 6) ? `${years}+ years` : `${years} years`;

    // Update the DOM
    $(document).ready(function() {
        $("#experience-years").text(experienceText);
    });
})(jQuery);
