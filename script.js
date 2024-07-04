const result_years = document.querySelector('.results_years');
const result_months = document.querySelector('.results_months');
const result_days = document.querySelector('.results_days');

const submit_btn = document.querySelector(".submit-btn");

const input_year = document.querySelector("#year");
const input_day = document.querySelector("#day");
const input_month = document.querySelector("#month");

submit_btn.addEventListener('click', function() {
    const day = parseInt(input_day.value);
    const month = parseInt(input_month.value);
    const year = parseInt(input_year.value);

    if (isValidDate(day, month, year)) {
        const birthDate = new Date(year, month - 1, day);
        const today = new Date();

        let ageYears = today.getFullYear() - birthDate.getFullYear();
        let ageMonths = today.getMonth() - birthDate.getMonth();
        let ageDays = today.getDate() - birthDate.getDate();

        if (ageDays < 0) {
            ageMonths -= 1;
            ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }

        if (ageMonths < 0) {
            ageYears -= 1;
            ageMonths += 12;
        }

        result_days.textContent = ageDays;
        result_months.textContent = ageMonths;
        result_years.textContent = ageYears;
    } else {
        alert('Please enter a valid date');
    }
});

function isValidDate(day, month, year) {
    const date = new Date(year, month - 1, day);
    return date.getDate() === day && date.getMonth() === month - 1 && date.getFullYear() === year;
}
