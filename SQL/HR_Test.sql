--1.	Get the First and last Name of the most recent hire.
SELECT FirstName, LastName
FROM Employee
WHERE DateOfHire = (SELECT MAX(DateOfHire) FROM Employee);

--2.	Get the First and last Name of the oldest hire.
SELECT FirstName, LastName
FROM Employee
WHERE DateOfHire = (SELECT MIN(DateOfHire) FROM Employee);

--3.	Get all the customers that earn more than 30.000.
SELECT FirstName, LastName
FROM Employee
WHERE Salary > 30000;

--4.	Insert one person into the employment table.
INSERT INTO Employee (EmployeeID, FirstName, LastName, DateOfHire, Salary, Department)
VALUES (100, 'Samuel', 'Penna', '2023-11-01', 15600.00, 1);

--5.	Delete one person where employee is equals to 100.
DELETE FROM Employee
WHERE EmployeeID = 100;

--6.	Create and statement to list all employees by salary ascending.
SELECT FirstName, LastName, Salary
FROM Employee
ORDER BY Salary ASC;

--7.	Create a statement that gets all employees that belong to the department 20.
SELECT FirstName, LastName
FROM Employee
WHERE Department = 20;

--8.	Create a statement that contains a column that is called Salary range, if salary is   between $0 and 10.00 then write the word “Low”, when the salary is between 10.000 and 40.000 then write the word “Medium”, salaries greater than 40.00 have then say “High”.
SELECT
    FirstName,
    LastName,
    Salary,
    CASE
        WHEN Salary BETWEEN 0 AND 10000 THEN 'Low'
        WHEN Salary BETWEEN 10001 AND 40000 THEN 'Medium'
        ELSE 'High'
    END AS 'Salary Range'
FROM Employee;

--9.	Create a table value function that given a date it will provide be the salaries of employees that were hired before that date.
CREATE FUNCTION GetSalariesBeforeDate (@HireDate VARCHAR(200))
RETURNS TABLE
AS
RETURN
(
    SELECT Salary
    FROM Employee
    WHERE DateOfHire < @HireDate
);

SELECT * FROM GetSalariesBeforeDate('20200-01-01');