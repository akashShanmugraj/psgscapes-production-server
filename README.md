# PSG Scapes

PSG Scapes is a Full Stack Node.JS server that utilizes Mongoose and Express.JS to communicate between Flutter, React, and MongoDB for the backend. It also uses React for the online interface.

## Routes

1. **Faculty Information**

    ```
    /api/facultyInfo/:id
    ```

    Description: Retrieve faculty information by providing the ID number.

2. **Student Information by ID**

    ```
    /api/userInfo/:id
    ```

    Description: Retrieve student information by providing the ID number. Works for both students and faculty.

3. **Student Information by Class**

    ```
    /api/userInfo/studentsofclass/:classKey
    ```

    Description: Retrieve student information by providing the class key. Works for students of a specific class.

4. **All Students Information**

    ```
    /api/userInfo/students/all
    ```

    Description: Retrieve information of all the students in the database.

5. **Timetable for the Week with Room UUIDs**

    ```
    /api/timetable/comparison/week/:id
    ```

    Description: Retrieve the timetable for the week along with room UUIDs.

6. **Timetable for a Single Day with Room UUIDs**

    ```
    /api/timetable/comparison/day/:id/:day
    ```

    Description: Retrieve the timetable for a single day with room UUIDs.

7. **Timetable for the Week without Room UUIDs**

    ```
    /api/timetable/schedule/week/:id
    ```

    Description: Retrieve the timetable for the week without room UUIDs.

8. **Timetable for a Single Day without Room UUIDs**

    ```
    /api/timetable/schedule/day/:id/:day
    ```

    Description: Retrieve the timetable for a single day without room UUIDs.

9. **Attendance Information by Course ID**

    ```
    /api/attendance/byClass/:id
    ```

    Description: Retrieve attendance information according to the Course ID.

10. **Attendance Information by Student ID**

    ```
    /api/attendance/student/:id
    ```

    Description: Retrieve attendance information according to the Student ID.

11. **Course Data by Course ID**

    ```
    /api/courseData/:id
    ```

    Description: Retrieve course data according to the Course ID.

12. **Attendance Information for All Students**

    ```
    /api/attendance/students
    ```

    Description: Retrieve attendance information for all students.

13. **Attendance Information for Specific Student in Specific Class**

    ```
    /api/attendance/singleRecord/:id/:studentCode
    ```

    Description: Retrieve attendance information for a specific student in a specific class.

14. **Attendance Verification**

    ```
    /api/attendanceUpdate/presenceVerify
    ```

    Description: Verify attendance information. The required data to be passed in `req.body` includes studentCode, datetime, courseCode, classKey, periodNumber, and os.

## Installation and Usage

You can clone this server and then run "npm run server" in the terminal window in the folder to start the server

## Contributing
Akash Shanmugaraj, Anandkumar NS

