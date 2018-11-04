import React, { Component } from "react"
import "./EmployeeList.css";

export default class EmployeeList  extends Component {
    render() {
        return (
            <article class="employees">
                <h3>EMPLOYEE LIST</h3>
                <section>Jessica Younker</section>
                <section>Jordan Nelson</section>
                <section>Zoe LeBlanc</section>
                <section>Blaise Roberts</section>
            </article>
        );
    }
}