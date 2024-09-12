// Shift Management
var shifts = [];

document.getElementById('scheduleForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var employeeName = document.getElementById('employeeName').value;
    var shiftDate = document.getElementById('shiftDate').value;
    var shiftTime = document.getElementById('shiftTime').value;

    var shift = {
        id: Date.now(), // Unique ID for each shift
        employeeName: employeeName,
        shiftDate: shiftDate,
        shiftTime: shiftTime
    };

    shifts.push(shift);
    displayShifts(); // Refresh the table with new shifts
    this.reset(); // Clear the form after submission
});


// Function to display scheduled shifts in the table
function displayShifts() {
    var shiftTableBody = document.getElementById('shiftTableBody');
    shiftTableBody.innerHTML = ''; // Clear the table first
    shifts.forEach(function(shift) {
        var row = document.createElement('tr');
        row.innerHTML = `
            <td>${shift.employeeName}</td>
            <td>${shift.shiftDate}</td>
            <td>${shift.shiftTime}</td>
            <td><button class="btn btn-danger btn-sm" onclick="deleteShift(${shift.id})">Delete</button></td>
        `;
        shiftTableBody.appendChild(row); // Add each shift row to the table
    });
}

// Function to delete a shift from the array and update the display
function deleteShift(id) {
    shifts = shifts.filter(function(shift) {
        return shift.id !== id; // Remove the shift with the matching ID
    });
    displayShifts(); // Refresh the table after deletion
}

// Time Tracking
var timeLogs = [];

document.getElementById('timeTrackingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var employeeName = document.getElementById('trackingEmployeeName').value;
    var now = new Date();
    var status = 'Clocked In';

    // Check if the employee is already clocked in (toggle to Clock Out)
    var lastLog = timeLogs.filter(function(log) {
        return log.employeeName === employeeName;
    }).pop();

    if (lastLog && lastLog.status === 'Clocked In') {
        status = 'Clocked Out'; // Toggle the status
    }

    var timeLog = {
        employeeName: employeeName,
        time: now.toLocaleString(), // Get current time in a readable format
        status: status
    };

    timeLogs.push(timeLog); // Add time log entry
    displayTimeLogs(); // Refresh time logs
    this.reset(); // Clear the form
});

// Function to display the time logs in the table
function displayTimeLogs() {
    var timeLogTableBody = document.getElementById('timeLogTableBody');
    timeLogTableBody.innerHTML = ''; // Clear previous logs
    timeLogs.forEach(function(log) {
        var row = document.createElement('tr');
        row.innerHTML = `
            <td>${log.employeeName}</td>
            <td>${log.time}</td>
            <td>${log.status}</td>
        `;
        timeLogTableBody.appendChild(row); // Add each log row to the table
    });
}
