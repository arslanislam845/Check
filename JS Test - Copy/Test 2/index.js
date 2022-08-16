let data=[
    ["machine_name", "machine_id", "current", "voltage", "power_factor", "active_power", "apparent_power", "reactive_power", "daily_energy", "monthly_energy", "yearly_energy", "idle_daily", "idle_monthly", "idle_yearly"],
    ["Auto Winding Machine", "machine001", 0, 0, 0, 0.0, 0.0, 0.0, 0, 0, 0, 0, 0, 0],
    ["Boiler Machine", "machine004", 0, 0, 0, 0.0, 0.0, 0.0, 0, 0, 0, 0, 0, 0]
]
    
	console.log(data);
        var table = document.createElement("table");
        var col = [];
        
        for (var i = 0; i < data.length; i++) {
            for (var key in data[i]) {
                if (col.indexOf(key) === -1) {
                	col.push(key);
                }
			
            }
        }
        

        // Adding JSON DATA in ROWS.
        for (var i = 0; i < data.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tableCell = tr.insertCell(-1);
                tableCell.innerHTML = data[i][col[j]];
            }
        }

        //ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("data");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);

