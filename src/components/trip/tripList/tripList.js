import React, { Component } from "react";
import { Table } from "antd";

class TripList extends Component {
    state = {
        tripsData: ""
    }

    render() {
        const columns = [
            {
                title: "Country",
                key: "country",
                width: "12%",
            },
            {
                title: "City",
                key: "city",
                width: "12%",
            },
            {
                title: "Start Date",
                key: "statrDate",
                width: "12%",
            },
            {
                title: "End Date",
                key: "endDate",
                width: "12%",
            },
            {
                title: "Transportation",
                key: "transportation",
                width: "12%",
            },
            {
                title: "Duration",
                key: "duration",
                width: "12%",
            },
            {
                title: "Number of People",
                key: "numberOfPeople",
                width: "12%",
            },
            {
                title: "Rating",
                key: "rating",
                width: "16%",
            },
        ];
        return (
            <div>
                <Table
                    columns={columns}
                />
            </div>
        )
    }
};

export default TripList;