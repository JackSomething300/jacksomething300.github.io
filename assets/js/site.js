

$('.videosection').hover(
    function () {
        console.log("enetered");
        var $this = $('.videosection')
        if (!$this.hasClass("videoStyle")) {
            $this.addClass("videoStyle");
        }
        else
        {
            $this.removeClass("videoStyle");
        }
    }
)