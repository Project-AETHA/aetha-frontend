import React from 'react';
import { Button, Input, Spacer, Card, Divider } from '@nextui-org/react';

const NewCampaign = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <Card className="w-full max-w-3xl p-6 bg-white shadow-md">
        <h2 className="text-2xl font-bold mb-4">New Campaign</h2>
        <form className="space-y-4">
          <div>
            <Input fullWidth placeholder="Internal Title" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Leaderboard (728 x 90)</label>
              <Input fullWidth type="file" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Rectangle (300 x 250)</label>
              <Input fullWidth type="file" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Background Upload</label>
            <Input fullWidth type="file" />
          </div>
          <div>
            <Input fullWidth placeholder="Link" />
          </div>
          <div>
            <Input fullWidth type="date" placeholder="Start Date (Optional)" />
          </div>
          <div>
            <Input fullWidth placeholder="Impressions" />
          </div>
          <div>
            <Input fullWidth placeholder="Cost" />
          </div>
          <div className="text-sm text-gray-500">
            VAT rates are based on your last entered billing address or the country of your IP address; an accurate VAT rate will be calculated and displayed on the next page.
          </div>
          <Divider />
          <div className="flex justify-between">
            <Button shadow color="primary">Continue to Payment</Button>
            <Button shadow color="error">Cancel</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default NewCampaign;
