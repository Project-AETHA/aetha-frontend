import React from 'react';
import { Card, Button, Spacer, Link} from '@nextui-org/react';

const Submissions = () => {
  return (
    <div className="p-4">
      <Card className="p-4">
        <h2 className="text-2xl font-bold mb-4">Submissions | Royal Road</h2>
        <p>
          It can take up to 48 hours for a submission to be approved. If issues are found within the submission, it will be rejected and corrections will have to be made before re-submission.
        </p>
        <Spacer y={1} />
        <Button className="mb-4">Submit a new Fiction</Button>
        <Spacer y={1} />
        <Button className="mb-4">Pending Submissions</Button>
        <Spacer y={1} />
      </Card>
    </div>
  );
};

export default Submissions;
