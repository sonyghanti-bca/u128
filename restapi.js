const express = require("express")
const app = express()

app.use(express.json())

let employee = [
    { empid: 101, name: "Raju", salary: 25000 },
    { empid: 102, name: "Rani", salary: 35000 }
]

// GET - Get all employees
app.get("/emp", (req, resp) => {
    resp.json(employee)
})

// GET - Get employee by ID
app.get("/emp/:id", (req, resp) => {
    let empid = Number(req.params.id)

    const e = employee.find((e) => {
        return e.empid === empid
    })

    if (e) {
        resp.json(e)
    } else {
        resp.status(404).json({
            message: "employee record not found"
        })
    }
})

// POST - Add employee
app.post("/emp", (req, resp) => {
    let empid = req.body.empid
    let name = req.body.name
    let salary = req.body.salary

    let e = {
        empid: empid,
        name: name,
        salary: salary
    }

    employee.push(e)

    resp.status(201).json({
        message: "new employee record has been created",
        employee: e
    })
})

// PUT - Update employee
app.put("/emp/:id", (req, resp) => {
    let empid = Number(req.params.id)

    const index = employee.findIndex((e) => {
        return e.empid === empid
    })

    if (index !== -1) {
        employee[index].name = req.body.name
        employee[index].salary = req.body.salary

        resp.json({
            message: "employee record updated",
            employee: employee[index]
        })
    } else {
        resp.status(404).json({
            message: "employee record not found"
        })
    }
})

// DELETE - Delete employee
app.delete("/emp/:id", (req, resp) => {
    let empid = Number(req.params.id)

    const index = employee.findIndex((e) => {
        return e.empid === empid
    })

    if (index !== -1) {
        let deleted = employee.splice(index, 1)

        resp.json({
            message: "employee record deleted",
            employee: deleted[0]
        })
    } else {
        resp.status(404).json({
            message: "employee record not found"
        })
    }
})

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000")
})