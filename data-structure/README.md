# Data Structure for PSG Scapes
### in Apache Cassandra


Following is the finalized *de-centralized* structure, as we call it

Each class in a department is a keyspace, analogous to database in RDBMS
| Class   | Rollnumber Prefix | Keyspace Name|
|---------|-------------------|--------------|
|CSE-G1   |*22Z2-(XX)*        |`c22z2`       |
|CSE-G2   |*22Z3-(XX)*        |`c22z3`       |
|CSE-AIML |*22N2-(XX)*        |`c22n2`       |

In keyspace `c22z2`, every course taken is a table.

Consider the course *19Z104 - Problem Solving and Python Programing* given to `c22z2`.
In the table `cr19z104`,

| Roll Number | totalPercentage |classesPresent | totalClassesHeld | classesExempted | classesMedicallyExempted| ABclassStamps |
|-------------|-----------------|---------------|------------------|-----------------|-------------------------|--------------|
|'22z201'     |100              |34             |34                |0                |0                        |[]            |
|'22z202'     |88               |30             |34                |0                |0                        |['2-02-01-2023','1-11-01-2023']             |
|'22z203'     |94               |30             |34                |1                |1                        |[]            |
|...          |...              |...            |...               |...              |...                      |...           |


`<ABclassStamps>` is a pre-determined datatype for identifying all classes the student was not present

`<ABclassStamp> = [<N-DD-MM-YYYY>, ..]`

*where N stands for nth class on that day*

Apart from each coursetable, an additional `schedule` table exists, which contains information regarding the latest time-schedule for a class.

| Period | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 |
|--------|---|---|---|---|---|---|---|---|---|----|----|
|Monday  |LIB|19Z101|LIB|19G105|19Z103|19Z102|19Z104| | | | |
|Tuesday |19Z102|19G105|LIB|19Z104|19Z112|19Z112|19Z112|19Z112| | | |
|...|...|...|...|...|...|...|...|...|...|...|...|

**NOTE:** The `time-field` was removed considering that time slots remain the same for all the departments and classes.

## systeminfo Structure
The `systeminfo` keyspace is the core container which stores important admin information like privileges, credentials etc

A `userinfo` table lists personal information and the privileges of the user briefly.
| UserID  | Name            | Department                       | Role      | Email Address                | Password              | Keyspace Access                        |
|---------|-----------------|----------------------------------|-----------|------------------------------|-----------------------|----------------------------------------|
| p2316   | Murugananthan M | Chemistry                        | Professor | murugananthanm@psgtech.ac.in | **********            | ['22Z2', '22N2', '21C3', '20P1', ... ] |
| s22z255 | S Akash         | Computer Science and Engineering | Student   | 22z255@psgtech.ac.in         | ********************* | ['22z2']                               |

**NOTE**: The `usercredential` table was merged with the above table to reduce space and memory allocation.
It will be seperated into seperate table as it was, if there are any related security problems 
