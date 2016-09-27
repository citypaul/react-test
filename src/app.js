var CommentList = React.createClass({
  getCommentNodes: function() {
    return this.props.comments.map(function(comment) {
        return (
          <Comment author={comment.author} key={comment.id}>
           {comment.text}
          </Comment>);
    });
  },

  render: function() {
    var Comments = this.getCommentNodes();

    return (
      <div className="CommentList">
        {Comments}
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render:function(){
    return(
      <div className="CommentForm">
      Hello world! I am a CommentForm.
      </div>
    )
  }
});

var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});

var CommentBox= React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log('my data: ', data);
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  render:function(){
    return(
      <div className="CommentBox">
        <h1>Comments</h1>
        <CommentList comments={this.state.data}/>
        <CommentForm />
      </div>
    )
  }
});


ReactDOM.render(
  <CommentBox url="http://localhost:3000" />,
  document.getElementById('content')

);
