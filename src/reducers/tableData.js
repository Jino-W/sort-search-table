const tableDataInitialState = {
    "columnHeaders": [
        {
            "id": "firstName",
            "label": "First Name",
            "sortable": "true",
            "filterable": "true"
        },
        {
            "id": "lastName",
            "label": "Last Name",
            "sortable": "true",
            "filterable": "true"
        },
        {
            "id": "dateOfBirth",
            "label": "Date of Birth",
            "sortable": "false",
            "filterable": "true"
        },
        {
            "id": "designation",
            "label": "Designation",
            "sortable": "true",
            "filterable": "true"
        },
        {
            "id": "department",
            "label": "Department",
            "sortable": "true",
            "filterable": "true"
        }
    ],
    "rowData": [
        {
            "id": "user_id_1",
            "data": [
                {
                    "id": "firstName",
                    "value": "John"
                },
                {
                    "id": "lastName",
                    "value": "Smith"
                },
                {
                    "id": "dateOfBirth",
                    "value": "07-11-1992"
                },
                {
                    "id": "designation",
                    "value": "Software Engineer"
                },
                {
                    "id": "department",
                    "value": "Web"
                }
            ]
        },
        {
            "id": "user_id_2",
            "data": [
                {
                    "id": "firstName",
                    "value": "sam"
                },
                {
                    "id": "lastName",
                    "value": "Anand"
                },
                {
                    "id": "dateOfBirth",
                    "value": "08-05-1995"
                },
                {
                    "id": "designation",
                    "value": "manager"
                },
                {
                    "id": "department",
                    "value": "IT"
                }
            ]
        },
        {
            "id": "user_id_3",
            "data": [
                {
                    "id": "firstName",
                    "value": "minu"
                },
                {
                    "id": "lastName",
                    "value": "esther"
                },
                {
                    "id": "dateOfBirth",
                    "value": "31-10-1996"
                },
                {
                    "id": "designation",
                    "value": "HR"
                },
                {
                    "id": "department",
                    "value": "Sales"
                }
            ]
        },
        {
            "id": "user_id_4",
            "data": [
                {
                    "id": "firstName",
                    "value": "jim"
                },
                {
                    "id": "lastName",
                    "value": "david"
                },
                {
                    "id": "dateOfBirth",
                    "value": "13-08-2000"
                },
                {
                    "id": "designation",
                    "value": "student"
                },
                {
                    "id": "department",
                    "value": "ECE"
                }
            ]
        }
    ]
}

const tableDataReducer = (state = tableDataInitialState, action)=>{
    switch (action.type) {
        case "GET_TABLE_DATA":{
            return {...state}
        }
        // case "FILTER_TABLE_DATA":{
        //     console.log("p",Object.assign({},{...state}).rowData.map(person=>{
        //         return person.data.filter(detail=>{
        //             return detail.value.toLowerCase().includes(action.payload.toLowerCase())
        //         })
        //     }))
            
        // }
        default:{
            return {...state}
        }
    }
}

export default tableDataReducer