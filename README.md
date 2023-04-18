# PSG Scapes Back-end Server

A Node.JS server that utilises Mongoose and Express.JS to communicate between Flutter and MongoDB

---

## Tech Stack

**Client:** Flutter

**Server:** Node, Express, Mongoose

**DataBase:** MongoDB

# API Reference

#### Get details of all the students

```http
/students
```

#### Get details of all the faculty

```http
/faculty
```

#### Get the details of a single student according to the "\_id"

```http
/students-user-details/:id
```

#### Get the attendance details of all the students for all the students

```http
/attendance
```

#### Get the details of all the students part of a specific course

```http
/attendance-single-course/:id
```

#### Get the details of a specifc student for a specific course

```http
/attendance-single-course-student/:id/:studentId
```

#### Get the details of a student for all the course they are a part of

```http
/attendance-single-student/:studentId
```

#### Get the timetable of all the classes for all days

```http
/timetable
```

#### Get the timetable for all classes for a specific day

```http
/timetable/all-classes/:day
```

#### Get the timetable for a specific class for the whole week

```http
/timetable-full-week-single-class/:classKey
```

#### Get the details of a specifc class for a specific day

```http
/timetable-single-day-class/:day/:classKey
```

## Deployment

To deploy this project run start by running

```bash
  npm install --production
```

The above command will install all mentioned dependencies

To start the server run

```bash
npm index.js
```
