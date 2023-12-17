$(document).ready(function() {

    $("#generateStoryBtn").on("click", function() {
        // take input
        var nounName = $("#nounName").val();
        var nounObject = $("#nounObject").val();
        var adjective = $("#adjective").val();
        var adverb = $("#adverb").val();
        
        // Story
        var madLibsStory = "<h2> Story Timee !</h2>";
        madLibsStory += `<p>Once upon a time, ${nounName} found a magical ${nounObject}. `;
        madLibsStory += `It was ${adjective} and ${adverb}, making everyone around it laugh. `;
        madLibsStory += `People traveled from ${nounName}'s hometown just to see the ${adjective} ${nounObject}. `;
        madLibsStory += `In the end, ${nounName} and the ${nounObject} lived ${adverb} ever after.</p>`;

        // output
        $("#madLibsStory").html(madLibsStory);
    });
});
