(() => {
    let w = 800;
    let h = 450;
    let place_radius = 15;
    let transitionHeight = 10;

    class Place {
        constructor(name, x, y, label) {
            this.name = name;
            this.x = x;
            this.y = y;
            this.label = label;
            this.token = false;
        }
    }

    class Transition {
        constructor(name, x, y, label) {
            this.name = name;
            this.x = x;
            this.y = y;
            this.label = label;
            this.active = false;
            this.width = 80;
        }
    }

    let places = [
        // Dirty Dishes in Dishwasher
        new Place("A", 600, 300, "Dish Dirty"),
        new Place("B", 650, 300, "Dish Dirty"),
        new Place("C", 700, 300, "Dish Dirty"),
        new Place("E", 750, 250, "Dishwasher Ready"),
        new Place("F", 650, 200, "Dishwasher Loaded"),
        new Place("H", 650, 100, "Dish Clean"),
        new Place("chef", 400, 375, "Chef Ready"),
        new Place("K", 250, 300, "Ingredients Ready"),
        new Place("L", 250, 200, "Food Cooked"),
        new Place("M", 350, 200, "Counter Dirty"),
        new Place("N", 350, 100, "Counter Clean"),
        new Place("O", 250, 100, "Food Served"),
        new Place("family", 100, 375, "Family Ready"),
    ];

    places.find((place) => place.name === "chef").token = true;
    places.find((place) => place.name === "A").token = true;
    places.find((place) => place.name === "B").token = true;
    places.find((place) => place.name === "C").token = true;
    places.find((place) => place.name === "family").token = true;
    places.find((place) => place.name === "M").token = true;
    places.find((place) => place.name === "E").token = true;
    places.find((place) => place.name === "K").token = true;





    let transitions = [
        new Transition("t1", 600, 250, "Load Dishwasher"),
        new Transition("t2", 600, 150, "Run Dishwasher"),
        new Transition("t3", 600, 50, "Unload Dishwasher"),
        new Transition("t4", 320, 150, "Clean Counter"),
        new Transition("t6", 220, 150, "Serve Food"),
        new Transition("t5", 220, 250, "Cook Food"),
        new Transition("t7", 220, 50, "Eat")
    ];

    let arcs = [
        {
            start: "A",
            end: "t1"
        },
        {
            start: "B",
            end: "t1"
        },
        {
            start: "C",
            end: "t1"
        },
        {
            start: "t1",
            end: "F"
        },
        {
            start: "F",
            end: "t2"
        },
        {
            start: "t2",
            end: "H"
        },
        {
            start: "H",
            end: "t3"
        },
        {
            start: "chef",
            end: "t1"
        },
        {
            start: "chef",
            end: "t2"
        },
        {
            start: "chef",
            end: "t3"
        },
        {
            start: "t1",
            midpoints: [
                {x: 650, y: 200},
                {x: 500, y: 300}
            ],
            end: "chef"
        },
        {
            start: "t2",
            midpoints: [
                {x: 650, y: 100},
                {x: 500, y: 200}
            ],
            end: "chef"
        },
        {
            start: "t3",
            midpoints: [
                {x: 600, y: 10},
                {x: 500, y: 10}
            ],
            end: "chef"
        },
        {
            start: "t4",
            midpoints: [
                {x: 400, y: 100},
                {x: 450, y: 200}
            ],
            end: "chef"
        },
        {
            start: "t5",
            midpoints: [
                {x: 250, y: 225},
                {x: 275, y: 225}
            ],
            end: "chef"
        },
        {
            start: "t6",
            midpoints: [
                {x: 250, y: 125},
                {x: 300, y: 125}
            ],
            end: "chef"
        },
        {
            start: "t7",
            midpoints: [
                {x: 250, y: 25},
                {x: 300, y: 25}
            ],
            end: "chef"
        },
        {
            start: "chef",
            midpoints: [{x: 400, y: 200}],
            end: "t4"
        },
        {
            start: "chef",
            end: "t5"
        },
        {
            start: "chef",
            end: "t6"
        },
        {
            start: "chef",
            end: "t7"
        },
        {
            start: "family",
            end: "t7"
        },
        {
            start: "t7",
            midpoints: [{x: 100, y: 200}],
            end: "family"
        },
        {
            start: "K",
            end: "t5"
        },
        {
            start: "t5",
            end: "L"
        },
        {
            start: "L",
            end: "t6"
        },
        {
            start: "t6",
            end: "O"
        },
        {
            start: "O",
            end: "t7"
        },
        {
            start: "N",
            midpoints: [
                {x: 300, y: 100},
                {x: 300, y: 350}
            ],
            end: "t5"
        },
        {
            start: "M",
            end: "t4"
        },
        {
            start: "t4",
            end: "N"
        },
        {
            start: "E",
            midpoints: [
                {x: 700, y: 280}
            ],
            end: "t1"
        },
        {
            start: "t3",
            midpoints: [
                {x: 650, y: 20},
                {x: 700, y: 20}
            ],
            end: "E"
        },
        {
            start: "t5",
            end: "M"
        },
        {
            start: "t5",
            midpoints: [{x: 300, y: 220}],
            end: "A"
        },
        {
            start: "t7",
            midpoints: [
                {x: 250, y: 20},
                {x: 400, y: 20},
                {x: 500, y: 400},
            ],
            end: "B"
        },
        {
            start: "t7",
            midpoints: [
                {x: 250, y: 20},
                {x: 400, y: 20},
                {x: 500, y: 400},
            ],
            end: "C"
        }
    ];

    let placesAndTransitions = places.concat(transitions);

    let assembleArcPaths = (arc) => {
        let startObj = placesAndTransitions.find((e) => arc.start === e.name);
        let endObj = placesAndTransitions.find((e) => arc.end === e.name);
        let start, end;

        if (startObj.hasOwnProperty("width")) {
            start = {
                x: startObj.x + startObj.width / 2.0,
                y: startObj.y,
                startType: "transition"
            }
        } else {
            start = {
                x: startObj.x,
                y: startObj.y,
                startType: "place"
            }
        }

        if (endObj.hasOwnProperty("width")) {
            end = {
                x: endObj.x + endObj.width / 2.0,
                y: endObj.y,
                endType: "transition"
            }
        } else {
            end = {
                x: endObj.x,
                y: endObj.y,
                endType: "place"
            }
        }

        if (arc.hasOwnProperty("midpoints")) {
            return [start].concat(arc.midpoints).concat([end])
        } else {
            return [start, end]
        }

    };



    console.log('Getting here');
    let svg = d3.select("#d3div")
        .append("svg")
        .attr("viewBox", "0 0 " + w + " " + h)
        .attr("preserveAspectRatio", "xMidYMid meet");


    // from https://stackoverflow.com/questions/36579339/how-to-draw-line-with-arrow-using-d3-js
    svg.append("svg:defs").append("svg:marker")
        .attr("id", "arrowhead")
        .attr("refX", 6)
        .attr("refY", 6)
        .attr("markerWidth", 30)
        .attr("markerHeight", 30)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M 0 0 12 6 0 12 3 6")
        .style("fill", "black");
    // end

    var line = d3.line()
        .x((d) => d.x)
        .y((d) => d.y)
        .curve(d3.curveBasis);


    for (let arc of arcs) {
        let arcPath = assembleArcPaths(arc);
        console.log();
        let path = svg.append("path")
            .datum(arcPath)
            .attr("class", "parentArc")
            .attr("d", line);
        // .attr("marker-end", "url(#arrowhead)");

        path = path.node();

        if (arcPath[arcPath.length - 1].endType === "place") {
            let new_end = path.getPointAtLength(path.getTotalLength() - place_radius - 7);
            arcPath.pop();
            arcPath.push(new_end);
        } else {
            let new_end = path.getPointAtLength(path.getTotalLength() - transitionHeight - 2);
            arcPath.pop();
            arcPath.push(new_end);
        }

        svg.append("path")
            .datum(arcPath)
            .attr("class", "arc")
            .attr("d", line)
            .attr("marker-end", "url(#arrowhead)");

    }

    let checkIfActive = function (d) {
        let connectedNodes = arcs.filter((arc) => arc.end === d.name);
        for (let node of connectedNodes) {
            let place = places.find((place) => place.name === node.start);
            console.log(place);
            if (!place.token) {
                d.active = false;
                return false;
            }
        }
        d.active = true;
        return true;
    };

    let activateTransition = (transition) => {
        let inputNodes = arcs.filter((arc) => arc.end === transition.name);
        console.log(inputNodes);
        for (let node of inputNodes) {
            console.log(node.start);
            d3.select("." + node.start)
                .classed("tokenClick", false)
                .classed("token", true);

            let place = places.find((place) => place.name === node.start);
            console.log(place);
            place.token = false;
        }

        let outputNodes = arcs.filter((arc) => arc.start === transition.name);

        for (let node of outputNodes) {
            d3.select("." + node.end)
                .classed("tokenClick", true)
                .classed("token", false);
            places.find((place) => place.name === node.end).token = true;
        }
    };

    svg.selectAll(".place")
        .data(places)
        .enter()
        .append("circle")
        .attr("r", place_radius)
        .attr("cx", (d) => d.x)
        .attr("cy", (d) => d.y)
        .attr("class", "place");

    svg.selectAll(".token")
        .data(places)
        .enter()
        .append("circle")
        .attr("r", place_radius - 5)
        .attr("cx", (d) => d.x)
        .attr("cy", (d) => d.y)
        .attr("class", (d) => d.name)
        .classed("token", (d) => !d.token)
        .classed("tokenClick", (d) => d.token)
        .on("click", function (d) {
            d.token = !d.token;
            d3.select(this)
                .classed("tokenClick", d.token)
                .classed("token", !d.token);

            svg.selectAll("rect")
                .classed("transitionActive", (d) => checkIfActive(d))
        });

    svg.selectAll("rect")
        .data(transitions)
        .enter()
        .append("rect")
        .attr("x", (d) => d.x)
        .attr("y", (d) => d.y - transitionHeight / 2)
        .attr("width", (d) => d.width)
        .attr("height", transitionHeight)
        .attr("rx", 3)
        .attr("ry", 3)
        .attr("class", "transition")
        .classed("transitionActive", (d) => checkIfActive(d))
        .on("click", function (d) {
            if (d.active) {
                activateTransition(d)
            }

            svg.selectAll("rect")
                .classed("transitionActive", (d) => checkIfActive(d));
        });

    svg.selectAll(".transitionText")
        .data(transitions)
        .enter()
        .append("text")
        .text((d) => d.label)
        .attr("x", (d) => d.x + 5)
        .attr("y", (d) => d.y + transitionHeight / 3)
        .attr("class", "label")
        .on("click", function (d) {
            if (d.active) {
                activateTransition(d)
            }

            svg.selectAll("rect")
                .classed("transitionActive", (d) => checkIfActive(d));
        });

    svg.selectAll(".placeText")
        .data(places)
        .enter()
        .append("text")
        .text((d) => d.label)
        .attr("x", (d) => d.x - place_radius - 10)
        .attr("y", (d) => d.y + place_radius + 10)
        .attr("class", "label");




})();
