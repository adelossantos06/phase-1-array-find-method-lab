const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    //...
]

function superbowlWin(record) {
    for (const items of record) {
        if (items.result === "W") {
            return items.year
        }
    }
}





