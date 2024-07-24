import React from 'react'

function Reviews() {
  return (
    <div>
      <div className="content">
          <div className="side-bar-main">
          <div className="mb-4">
          <div className="bg-sky-600 justify-start pl-4 align-middle ">Messages</div>
          <div className="side-topic"><Link to ="/compose">Compose</Link></div>
          <div className="side-topic">Inbox</div>
          <div className="side-topic">Sent Items</div>
          <div className="side-topic">Drafts</div>
          <div className="side-topic">Trash Can</div>
          </div>
          <div className="mb-4">
          <div className="bg-sky-600 justify-start pl-4 align-middle ">Settings</div>
          <div className="side-topic">Profile Info</div>
          <div className="side-topic">Settings</div>
          <div className="side-topic">Premium</div>
          <div className="side-topic">Achievements</div>
          <div className="side-topic">Border Wardrobe</div>
          <div className="side-topic">Refer A Friend</div>
          </div>
          <div className="mb-4">
          <div className="bg-sky-600 justify-start pl-4 align-middle ">Security & Privacy</div>
          <div className="side-topic">Change Email</div>
          <div className="side-topic">Change Password</div>
          <div className="side-topic">Two Factor Auth</div>
          <div className="side-topic">External Logins</div>
          <div className="side-topic">Download Account</div>
          <div className="side-topic">Delete Account</div>
          </div>
          <div className="mb-4">
          <div className="bg-sky-600 justify-start pl-4 align-middle ">Notifications</div>
          <div className="side-topic">General Settings</div>
          <div className="side-topic">Threads</div>
          <div className="side-topic">Notification History</div>
          </div>
          <div className="mb-4">
          <div className="bg-sky-600 justify-start pl-4 align-middle ">Forum</div>
          <div className="side-topic">UserCP</div>
          <div className="side-topic">Edit Signature</div>
          </div>
          <div className="mb-4">
          <div className="bg-sky-600 justify-start pl-4 align-middle ">My</div>
          <div className="side-topic">Fictions</div>
          <div className="side-topic">Follow List</div>
          <div className="side-topic">Favorites</div>
          <div className="side-topic">Read Later</div>
          <div className="side-topic">Reading History</div>
          <div className="side-topic">Reviews</div>
          <div className="side-topic">Comments</div>
          <div className="side-topic">Blocked Users</div>
          </div>
          </div>
          <div className="dashboard">
          <div className="details">
              <div className="topics"> Personal Information</div>
              <p>Joined : </p>
              <p>Gender: </p>
              <p>Location: </p>
              <p>Last Active: </p>
              <p>Bio:</p>
          </div>
          <div className="details">
              <div className="topics">Activity</div>
              <p>Follows   : </p>
              <p>Favorites : </p>
              <p>Ratings   : </p>
              <p>Reviews   : </p>
              <p>Comments  : </p>
          </div>
          <div className="details">
              <div className="topics">Author Information</div>
              <p>Fictions    :</p>
              <p>Total Words :</p>
              <p>Total Reviews Received  : </p>
              <p>Total Ratings Received  :</p>
              <p>Followers  :</p>
              <p>Favorites  : </p>
          </div>
          </div>
      </div>
      {/* <div className="footer"></div> */}
    </div>
  )
}

export default Reviews