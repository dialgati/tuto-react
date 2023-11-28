export function TweetForm({onSubmit}) {

    const handleSubmit = (event) => {
      event.preventDefault();

      const name = event.target.name.value;
      const content = event.target.content.value;

      const newTweet = {
        id: tweets[tweets.length - 1]?.id + 1 ?? 0,
        name,
        content,
        like: 0,
      };

      onSubmit(newTweet);
    };

    return(
       <form onSubmit={handleSubmit} className="tweet-form">
         <h4>New tweet</h4>
         <input  placeholder="name" type="text" name="name"/>
         <input placeholder="content" type="content" name="content" />
         <input type="submit" />
       </form>
    );
}
