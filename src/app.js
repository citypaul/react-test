var CommentList = React.createClass({
  render: function() {
    return (
      <div className="CommentList">
        Hello, world! I am a CommentList.
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


var CommentBox= React.createClass({
  render:function(){
    return(
      <div className="CommentBox">
      <h1>Comments</h1>
      <CommentList />
      <CommentForm />
      </div>
    )
  }
});



ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
