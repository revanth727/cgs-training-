// Shift Management
var shifts = [];

document.getElementById('scheduleForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var employeeName = document.getElementById('employeeName').value;
    var shiftDate = document.getElementById('shiftDate').value;
    var shiftTime = document.getElementById('shiftTime').value;

    var shift = {
        id: Date.now(),
        employeeName: employeeName,
        shiftDate: shiftDate,
        shiftTime: shiftTime
    };

    shifts.push(shift);
    displayShifts();
    this.reset();
});

function displayShifts() {
    var shiftTableBody = document.getElementById('shiftTableBody');
    shiftTableBody.innerHTML = '';
    shifts.forEach(function(shift) {
        var row = document.createElement('tr');
        row.innerHTML = `
            <td>${shift.employeeName}</td>
            <td>${shift.shiftDate}</td>
            <td>${shift.shiftTime}</td>
            <td><button class="btn btn-danger btn-sm" onclick="deleteShift(${shift.id})">Delete</button></td>
        `;
        shiftTableBody.appendChild(row);
    });
}

function deleteShift(id) {
    shifts = shifts.filter(function(shift) {
        return shift.id !== id;
    });
    displayShifts();
}

// Time Tracking
var timeLogs = [];

document.getElementById('timeTrackingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var employeeName = document.getElementById('trackingEmployeeName').value;
    var now = new Date();
    var status = 'Clocked In';

    // Check if employee is already clocked in
    var lastLog = timeLogs.filter(function(log) {
        return log.employeeName === employeeName;
    }).pop();

    if (lastLog && lastLog.status === 'Clocked In') {
        status = 'Clocked Out';
    }

    var timeLog = {
        employeeName: employeeName,
        time: now.toLocaleString(),
        status: status
    };

    timeLogs.push(timeLog);
    displayTimeLogs();
    this.reset();
});

function displayTimeLogs() {
    var timeLogTableBody = document.getElementById('timeLogTableBody');
    timeLogTableBody.innerHTML = '';
    timeLogs.forEach(function(log) {
        var row = document.createElement('tr');
        row.innerHTML = `
            <td>${log.employeeName}</td>
            <td>${log.time}</td>
            <td>${log.status}</td>
        `;
        timeLogTableBody.appendChild(row);
    });
    
}
