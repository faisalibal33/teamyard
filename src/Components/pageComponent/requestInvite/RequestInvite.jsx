const RequestInvite = () => {
  return (
    <div className="requestInviteContainer">
      <h1 className="title">Ask your HR to join Teamyard</h1>
      <form type="post">
        <label>HR Email</label>
        <input
          className="input"
          type="text"
          placeholder="Example@teamyard.com"
        />
        <div className="submit">
          <input type="submit" value="Ask to Join Teamyard" />
        </div>
      </form>
      <p className="message">
        Your HR will send invitations links to you and your collegues to join
        Teamyard
      </p>
    </div>
  );
};

export default RequestInvite;
