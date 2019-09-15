
var createTimeline = function() {
    var timeline = $(".timeline");

    var information = [
        `March – Beginning of unrest in Syria following military action on peaceful protestors.
        <br><br>
        May – Syrian families begin to flee their homes. In Turkey, the first refugee camps open.`,

        `July – UNHCR and Jordanian authorities open Za’atari Refugee Camp. In just a year, it will host some 120,000 refugees.
        <br><br>
        December – The number of Syrians seeking refuge in other countries reaches half a million.`,

        `March – One million Syrian refugees registered with UNHCR.
        <br><br>
        April – UNHCR warns of the increased need for funds to support the Syrians seeking safety in host countries like Jordan and Lebanon. Chemical attacks, considered war crimes, are confirmed in Syria. 
        <br><br>
        August – The number of Syrian refugee children reaches one million.
        <br><br>
        September – Syrian refugees total 2 million`,

        `June – Nearly half of Syria’s 22 million population is estimated to be affected by the conflict and in need of immediate humanitarian aid.
        <br><br>
        October – More and more Syrians risk deadly sea journeys to reach safety in Europe.`,

        `June – Hungary approves a 523km long border wall, closing the border with Serbia to deflect migrants from entering Europe.
        <br>br>
        July – The number of Syrian refugees tops the four million mark.
        <br><br>
        August – The UN Security Council expresses grave alarm over the continuing crisis in Syria, estimated to have claimed 250,000 lives and displaced 12 million people.
        <br><br>
        September – The image that shocked the world: the body of Syrian toddler Aylan Kurdi washes up on a Turkish beach after a failed attempt to reach Greece.`,
        
        `January – A humanitarian convoy delivers life-saving aid to starving civilians trapped in besieged towns in Syria. More convoys follow, bringing UNHCR blankets, winter clothes and other aid to families in desperate need.
        <br><br>
        July-August – The battle for Aleppo, Syria’s largest city, displaces thousands. UNHCR rushes to provide shelter and basic items like blankets to those left out on the streets.
        <br><br>
        December – Civilians are caught in the crossfire as the Syrian government retakes Aleppo from rebels. A ceasefire to free them fails.`,
        
        `January – UN Refugee Chief Filippo Grandi heads to Syria. Moved by the scale of the devastation, he calls for faster humanitarian aid for Syrians in desperate need.
        <br><br>
        March – The number of people fleeing the war in Syria surpasses five million.
        <br><br>
        July – A ceasefire is brokered at the G20 meeting for southwest Syria. Clashes are ongoing in Daraa, ar Raqqa, Homs, and Hama provinces and Deir ez-Zor city. More than 900,000 Syrians have been displaced this year.
        <br><br>
        December – Nearly 60 per cent of Syrian refugee households in Lebanon now live in extreme poverty (under US$2.87 per person per day), forcing families to make tough choices just to survive. Across the region, UNHCR steps up aid as displaced Syrians brace for another winter.`,
        
        `International agreements for de-escalation fail as conflict continues, limiting humanitarian access. 2.9 million people remain in hard-to-reach areas, far from aid.`,

        ``
    ]
    
    var direction = true;
    for (var i = 0; i < 8; i++) {
        var container = $("<div>");
        var circle = $("<div>");
        var content = $("<div>");
        var header = $("<h4>");
        var text = $("<p>");
        
        if (direction) {
            container.addClass("container left");
            circle.addClass("circle cLeft");
        } else {
            container.addClass("container right");
            circle.addClass("circle cRight");
        }
        
        content.addClass("content");
        header.text(i + 2011);
        text.append(information[i]);
        
        content.append(header);
        content.append(text);
        container.append(circle);
        container.append(content);

        timeline.append(container);
        
        direction = !direction;
    }

}

createTimeline();

