
# PSG Scapes 

A Full Stack Node.JS server that utilises Mongoose and Express.JS to communicate between Flutter, React and MongoDB for the backend and uses React for the online interface...

- - -
# Routes
User Infomation by giving ID number. Works for both students and faculty
``` 
/api/userInfo/:id
```
Timetable for the week along with room UUIDs
``` 
/api/timetable/comparison/week/:id
```
Timetable for a single day with room UUIDs
``` 
/api/timetable/comparison/day/:id/:day
```
Timetable for the week without room UUIDs
``` 
/api/timetable/schedule/week/:id
```
Timetable for a single day without room UUIDs
``` 
/api/timetable/schedule/day/:id/:day
```
Attendance information according to the Course ID
``` 
/api/attendance/byClass/:id
```
Attendance information according to the Student ID
``` 
/api/attendance/student/:id
```
Course Data according to the Course ID 
``` 
/api/courseData/:id
```
_________________________________________
Attedance Verification
```
/api/attendanceUpdate/preseneVerify
```
The information that needs to be passed in req.body are: -
studentCode
datetime
courseCode
classKey
periodNumber