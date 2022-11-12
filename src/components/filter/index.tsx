import React from "react";
import { FilterProps } from "../../types";
import Form from 'react-bootstrap/Form';
import './index.css';
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function Filter(props: FilterProps) {
    const navigate = useNavigate();

    return (
        <div className="filterWrapper">
            <div className="dropdownFilters">
                <div className="dropdownFilter">
                    <p>Order By</p>
                    <Form.Select
                        aria-label="Default select example"
                        value={props.filter?.orderBy}
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
                    <p>Favorites</p>
                    <Button
                        onClick={() => navigate(props.goToFavorite ? "/favorite" : "/")}
                        variant={props.goToFavorite ? 'success' : 'danger'}
                    >
                        {props.goToFavorite ? 'Enable' : 'Disable'}
                    </Button>
                </div>
            </div>
            <div className="dropdownFilters">
                <div className="dropdownFilter">
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
                <div className="dropdownFilter">
                    <p>Types</p>
                    <Form.Select
                        aria-label="Default select example"
                        value={props.filter?.typeId}
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
        </div>
    );
}


export default Filter;
