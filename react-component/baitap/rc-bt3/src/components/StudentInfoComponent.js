import { Component } from "react"
import ListStudent from "./ListStudent";
import "./style.css"
class StudentInfoComponent extends Component {

    constructor() {
        super();
        this.state = {
            student: [
                {
                    "id": '1',
                    "name": 'foreword',
                    "age": 14,
                    "address": 'HN'
                },
                {
                    "id": '2',
                    "name": 'david',
                    "age": 10,
                    "address": 'HCM'
                },
                {
                    "id": '3',
                    "name": 'thiago',
                    "age": 12,
                    "address": 'DN'
                },
                {
                    "id": '4',
                    "name": 'messi',
                    "age": 19,
                    "address": 'KH'
                },
                {
                    "id": '5',
                    "name": 'ronaldo',
                    "age": 20,
                    "address": 'HT'
                }
            ]

        }
    }


    render() {

        return (

            <div>
                <table style={{ border: "1px solid black" }}>
                    <thead >
                        <tr >
                            <th >Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody >
                        {this.state.student.map((person, i) => <ListStudent key={i}
                            student={person} />)}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default StudentInfoComponent;