


SELECT 
BillingCountry,
BillingCity,
UPPER(CONCAT(BillingCountry ,", ",BillingCity )) as Location,
LENGTH(BillingCountry) as CountryLenght,
SUBSTRING(BillingCountry,1,3)
FROM Invoice;

SELECT 
	SUM(Total) as TotalSum,
	MIN(Total) as TotalMin,
	Max(Total) as TotalMax,
	ROUND(AVG(Total),2) as TotalAvg,
	COUNT(Total) as TotalCount
FROM Invoice;


SELECT 
STRFTIME("%Y/%m/%d",InvoiceDate ),
STRFTIME("%Y",InvoiceDate ),
DATETIME('now')
FROM Invoice
;

SELECT 
STRFTIME("%Y",InvoiceDate) AS Year,
IIF(CAST(STRFTIME("%Y",InvoiceDate) AS INTEGER) < 2010,"DECADA PASADA","DECADA ACTUAL") as Decada
FROM Invoice;




SELECT * FROM Employee
ORDER BY Employee.LastName DESC, Employee.FirstName DESC
;

SELECT * FROM Employee
ORDER BY BirthDate DESC;


SELECT 
CONCAT(Customer.FirstName," ",Customer.LastName) as Customer,
SUM(Invoice.Total) as InvoiceTotal,
ROUND(AVG(Invoice.Total),2) as InvoiceAvg,
GROUP_CONCAT(Invoice.Total) as InvoiceList
FROM Customer
JOIN Invoice ON Invoice.CustomerId = Customer.CustomerId 
GROUP BY Customer.CustomerId 
ORDER BY Customer.LastName ASC
;




