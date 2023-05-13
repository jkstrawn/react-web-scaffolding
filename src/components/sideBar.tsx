import { observer } from "mobx-react";
import React, { Component } from "react";
import store from "../store/rootStore";
import SearchIcon from '@mui/icons-material/Search';
import { AccountCircle } from "@mui/icons-material";
import { Box, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { ROUTES } from "../resources/routes";

interface State {
    filter: string;
}

@observer
export default class Sidebar extends Component<{}, State> {

    constructor(props: any) {
        super(props);

        this.state = {
            filter: "",
        };
    }

    render() {
        return <div className="sidebar">
            <div className="header">
                <Link className="home-link" to={"/"}>
                    Home
                </Link>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="filter" label="Filter" variant="standard" />
                </Box>
            </div>
            <div>
                {store.note.notes.map(note => {
                    return <div key={note.id}>
                        <Link to={ROUTES.notePage(note.id)}>
                            {note.title}
                        </Link>
                    </div>
                })}
            </div>
        </div>
    }
}