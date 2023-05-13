import React, { Component } from 'react';
import { RouteProps, withRouter } from '../utility/withRouter';
import { autorun } from 'mobx';
import { Note } from '../types/note';
import store from '../store/rootStore';

interface Props {
    id: string;
}

interface State {
    loading: boolean;
    note?: Note;
}

class NotePage extends Component<RouteProps<Props>, State> {
    id: string;

    constructor(props: Readonly<RouteProps<Props>>) {
        super(props);

        this.id = this.props.params.id;
        this.state = {
            loading: true,
            note: undefined,
        };
    }

    componentDidMount(): void {
        autorun(() => {
            this.setState({ loading: false, note: store.note.getNote(this.id) })
        });
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>
        }

        if (!this.state.note) {
            return <div>Note not found</div>
        }

        return <div>
            <h1>{this.state.note.title}</h1>
            <div>{this.id}</div>
        </div>
    }
}

export default withRouter(NotePage);
