function generateStory(){

    const topic =
        document.getElementById("prompt").value;

    const storyElement =
        document.getElementById("story");

    if(topic === ""){

        storyElement.innerText =
            "Please enter a topic.";

        return;
    }

    // Simple AI-like Story Templates
    const stories = [

        `Once upon a time, there was a brave explorer
        searching for ${topic}. One day, the explorer
        discovered a hidden secret that changed the
        world forever.`,

        `In a futuristic city, a robot learned the
        true meaning of ${topic}. The journey became
        an unforgettable adventure.`,

        `Long ago, a mysterious kingdom protected
        the magical power of ${topic}. Only one hero
        could unlock its secrets.`,

        `A young scientist accidentally created
        ${topic}, leading to unexpected events
        across the universe.`

    ];

    const randomStory =
        stories[Math.floor(
            Math.random() * stories.length
        )];

    storyElement.innerText = randomStory;
}
