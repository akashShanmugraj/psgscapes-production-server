
# List of API Routes
Here's a list of the API routes included in this project:

##### GET /students - Get a list of students from MongoDB
##### GET /faculty - Get a list of faculties (currently not implemented)
##### GET /attendance - Get attendance data from MongoDB
##### GET /timeTable - Get time table data from MongoDB (currently not implemented)
##### GET /students/:id - Get details of a single student by ID
##### GET /attendance/:id - Get details of a single course's attendance by course code
##### GET /attendance/student/:studentId - Get details of a single student's attendance by student ID
##### GET /attendance/:id/:studentId - Get details of a specific course's attendance for a specific student
##### GET /attendance/stud-details/:id/:studentId - Get the attendance of a student for a specific course along with the student details
##### PUT /attendance/:id/:studentId - Update attendance data for a specific course and student by course code and student ID
Note: Routes marked as "currently not implemented" are not yet fully functional and will return a placeholder response.




#### rest-api-psg-scapes
The mock up REST API for the PSG Scapes App
