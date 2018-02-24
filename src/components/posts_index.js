import React , {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions/index';
import {Link} from 'react-router';


class PostIndex extends Component{

    componentWillMount(){
        this.props.fetchPost();
    }

    render(){
        return(
            <div>
              <div className="text-xs-right">
                <Link to="/posts/new" className="btn btn-primary" >
                    Add a post
                </Link>
              </div>
                List of Posts
            </div>
        )
    }

}

export default connect(null,{fetchPost})(PostIndex);