window.addEventListener('load', function() {
    let btn = document.querySelector('.statistika-btn');
    let dropdown = document.querySelector('.statistika-dropdown');
    let ar = document.querySelector('.statistika-arrow');
    btn.addEventListener('click', show)
    function show() {
        if (dropdown.classList.contains('show')) {
            ar.style.transform = 'none';
            dropdown.classList.remove('show');
            btn.classList.remove('show-btn');
        }
        else {
            dropdown.classList.add('show');
            ar.style.transform = 'rotateX(180deg)';
            btn.classList.add('show-btn');
        }
    } 
});

function sort(ascending, columnClassName) {
    var tbody = document.getElementById("season-table").getElementsByTagName("tbody")[0];
    var rows = tbody.getElementsByTagName("tr");

    var unsorted = true;

    while (unsorted) {
        unsorted = false

        for (var r = 0; r < rows.length - 1; r++) {
            var row = rows[r];
            var nextRow = rows[r + 1];

            var value = row.getElementsByClassName(columnClassName)[0].innerHTML;
            var nextValue = nextRow.getElementsByClassName(columnClassName)[0].innerHTML;

            value = value.replace(',', '.'); // in case a comma is used in float number
            nextValue = nextValue.replace(',', '.');

            if (!isNaN(value)) {
                value = parseFloat(value);
                nextValue = parseFloat(nextValue);
            }

            if (ascending ? value < nextValue : value > nextValue) {
                tbody.insertBefore(nextRow, row);
                unsorted = true;
            }
        }
    }
};
