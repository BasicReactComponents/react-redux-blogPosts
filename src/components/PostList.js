import React from "react";
import { connect } from "react-redux";
import {fetchPostsAndUsers} from "../actions/index";
import UserInfo from "./UserInfo";

class PostList extends React.Component {

    componentDidMount(){
        this.props.fetchPostsAndUsers();
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserInfo userId={post.userId} />
                    </div>
                    <hr />
                </div>
            )
        });
    }

    render(){
        return(
            <div>
                {this.renderList()}
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);