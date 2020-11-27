$(document).ready(function () {

    //disable image drag and drop
    $('img').on('dragstart', false);

    //buttons
    $("btn").each(function () {
        $(this).click(function () {
            //if has link attr set, open link
            if ($(this).is("[link]")) {
                window.location = $(this).attr("link");
            }
        });
    });

    //accordions
    let lastActiveAccElt = [];

    $("accordion").each(function (index) {
        $(this).attr("index", index);
        lastActiveAccElt.push(null);
    });

    $("accordion item").each(function (index) {
        $(this).attr("index", index);
    });


    $("accordion item btn").each(function (index) {
        $(this).click(function () {
            let accIndex = $(this).parent().parent().attr("index");
            let currentItemIndex = $(this).parent().attr("index");

            if (lastActiveAccElt[accIndex] != currentItemIndex) {
                $("accordion item[index=" + lastActiveAccElt[accIndex] + "]").toggleClass("active");

                lastActiveAccElt[accIndex] = currentItemIndex;
                $(this).parent().toggleClass("active");
            } else {

                lastActiveAccElt[accIndex] = null;
                $(this).parent().toggleClass("active");
            }

        });
    });
});