<script>
$(document).ready(function(){
    $(".github-link").hover(
        function() {
            // On mouse over
            $(this).find(".arrow").animate({
                left: '50%'
            }, 300);
        },
        function() {
            // On mouse out
            $(this).find(".arrow").animate({
                left: '-30px'
            }, 300);
        }
    );
});
</script>