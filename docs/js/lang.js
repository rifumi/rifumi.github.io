var selected_lang = '';
document.addEventListener('DOMContentLoaded', function () {
    var dropdownItems = document.querySelectorAll('.dropdown-item[data-lang]');
    dropdownItems.forEach(function (item) {
        item.addEventListener('click', function () {
            selected_Lang = item.getAttribute('data-lang');
            changeLanguage(selected_Lang);
        });
    });
    work_lang = localStorage.getItem("lang");
    if (work_lang == null || work_lang.length == 0) {
        if (navigator.languages[0].indexOf('ja') >= 0) {
            selected_lang = 'ja';
        } else {
            selected_lang = 'en';
        }
    } else if (work_lang != null && work_lang.length > 0) {
        selected_lang = work_lang;
    } else {
        selected_lang = 'ja';
    }
    changeLanguage(selected_lang);
})

function changeLanguage(lang) {
    console.log('Selected language:', lang);
    ref_list = []
    if (typeof getContentJsonPathAndProcList === "function") {
        ref_list = getContentJsonPathAndProcList(lang);
    } else {
        console.error('Please declare getContentJsonPathAndProcList(lang).');
        return;
    }
    localStorage.setItem("lang", lang);

    for (const refer of ref_list) {
        let ref = refer.path;
        let readProc = refer.readProc;
        fetch(ref)
            .then(response => response.json())
            .then(data => {
                readProc(data);
            });
    }
}