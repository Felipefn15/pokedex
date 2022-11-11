import React from "react";
import { FilterProps } from "../../types";
import Form from 'react-bootstrap/Form';
import './index.css';

function Filter(props: FilterProps) {
    return (
        <div className="filterWrapper">
            <div className="dropdownFilters">
                <div className="dropdownFilter">
                    <p>Order By</p>
                    <Form.Select
                        aria-label="Default select example"
                        onChange={(e) => {
                            props.setFilter({ ...props.filter, orderBy: e.target.value })
                        }}
                    >
                        <option>Select the order</option>
                        <option value="1">Name</option>
                        <option value="2">Type</option>
                    </Form.Select>
                </div>
                <div className="dropdownFilter">
                    <p>Types</p>
                    <Form.Select
                        aria-label="Default select example"
                        onChange={(e) => {
                            props.setFilter({ ...props.filter, typeId: e.target.value })
                        }}
                    >
                        <option>Select the type</option>
                        {props.types.map((type) => {
                            return <option value={type.id} key={type.id}>{type.name.toUpperCase()}</option>
                        })}
                    </Form.Select>
                </div>
            </div>
            <div className="TextFilter">
                <p>Name</p>
                <Form.Control
                    type="text"
                    placeholder="Filter by pokemon name"
                    value={props.filter?.name}
                    onChange={(e) => {
                        props.setFilter({ ...props.filter, name: e.target.value })
                    }}
                />
            </div>
        </div>
    );
}


export default Filter;
