import React from 'react';
import { Avatar, Link, Spacer } from '@nextui-org/react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Avatar
        src="https://via.placeholder.com/150"
        size="xl"
        className="avatar"
      />
      <Spacer y={2} />
      <Link href="#">Author Dashboard</Link>
      <Spacer y={0.5} />
      <Link href="#">Submissions</Link>
      <Spacer y={0.5} />
      <Link href="#">Notes</Link>
      <Spacer y={0.5} />
      <Link href="#">Writathon</Link>
      <Spacer y={0.5} />
      <Link href="#">Invitations</Link>
      <Spacer y={0.5} />
      <Link href="#">Advertising</Link>
      <Spacer y={2} />
      <Link href="#">Dark</Link>
      <style jsx>{`
        .sidebar {
          padding: 20px;
          background: #1e1e2f;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          color: white;
        }
        .avatar {
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
