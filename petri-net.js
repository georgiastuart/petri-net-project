(() => {
    let places = [
        // Dirty Dishes in Dishwasher
        {
            name: "A",
            x: 600,
            y: 300,
        },
        {
            name: "B",
            x: 650,
            y: 300
        },
        {
            name: "C",
            x: 700,
            y: 300
        },

        // Start Dishwasher
        {
            name: "D",
            x: 550,
            y: 300
        },

        // Dishwasher ready
        {
            name: "E",
            x: 750,
            y: 250
        },

        // Dishwasher loaded
        {
            name: "F",
            x: 650,
            y: 200
        },

        // Clean Dishes
        {
            name: "G",
            x: 600,
            y: 100,
        },
        {
            name: "H",
            x: 650,
            y: 100
        },
        {
            name: "I",
            x: 700,
            y: 100
        },

        // Chef Ready
        {
            name: "chef",
            x: 400,
            y: 375
        },

        // Ingredients chopped
        {
            name: "K",
            x: 250,
            y: 300
        },

        // Ingredients cooked
        {
            name: "L",
            x: 250,
            y: 200
        },

        // Counter Dirty
        {
            name: "M",
            x: 350,
            y: 200
        },

        // Counter Clean
        {
            name: "M",
            x: 350,
            y: 150
        },

        // Food Served
        {
            name: "M",
            x: 250,
            y: 100
        },

        // Family Ready
        {
            name: "family",
            x: 100,
            y: 375
        },

    ];


    let transitions = [
        {
            // Load dishwasher
            name: "t1",
            x: 600,
            y: 245,
            width: 100,
            height: 5
        },

        {
            // Run Dishwasher
            name: "t2",
            x: 600,
            y: 145,
            width: 100,
            height: 5
        },

        {
            // Put Away Dishes
            name: "t3",
            x: 600,
            y: 45,
            width: 100,
            height: 5
        }
    ];

    let arcs = [
        {
            start: "A",
            end: "t1"
        }
    ];

    let w = 800;
    let h = 400;
    let place_radius = 15;

    console.log('Getting here');
    let svg = d3.select("#d3div")
        .append("svg")
        .attr("viewBox", "0 0 " + w + " " + h)
        .attr("preserveAspectRatio", "xMidYMid meet");


    svg.selectAll("circle")
        .data(places)
        .enter()
        .append("circle")
        .attr("r", place_radius)
        .attr("cx", (d) => d.x)
        .attr("cy", (d) => d.y)
        .attr("class", "place");

    svg.selectAll("rect")
        .data(transitions)
        .enter()
        .append("rect")
        .attr("x", (d) => d.x)
        .attr("y", (d) => d.y)
        .attr("width", (d) => d.width)
        .attr("height", (d) => d.height)
        .attr("rx", 3)
        .attr("ry", 3);

    svg.selectAll(".transitionText")
        .data(transitions)
        .enter()
        .append("text")
        .text((d) => d.name)
        .attr("x", (d) => d.x)
        .attr("y", (d) => d.y);

    svg.selectAll(".placeText")
        .data(places)
        .enter()
        .append("text")
        .text((d) => d.name)
        .attr("x", (d) => d.x)
        .attr("y", (d) => d.y);

    svg.selectAll(".arcs")
        .data(arcs)
        .enter()
        .append()


})();
