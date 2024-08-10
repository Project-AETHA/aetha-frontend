import React from 'react';
import { Button, Input, Spacer, Card, Divider, DatePicker, Image, RadioGroup, Radio, Select, SelectItem, SelectSection } from '@nextui-org/react';

const NewCampaign = () => {

  const headingClasses = "flex w-full sticky top-1 z-20 py-1.5 px-2 bg-default-100 shadow-small rounded-small";

  return (
    <div className="min-h-screen  flex flex-col items-center p-2">
      <Card className="w-full p-6  shadow-md" radius='sm'>
        <h2 className="text-2xl font-bold mb-4">New Campaign</h2>
        <form className="space-y-4">
          <div>
            <Input fullWidth placeholder="Internal Title" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Rectangle</label>
              <RadioGroup label="Select your prefered place" orientation="horizontal" size='sm'>
                <Radio value="Leaderboard" className='p-7'>Leaderboard (728 x 90)
                  <Image
                    width={300}
                    alt="NextUI hero Image"
                    src="../../public/images/ads/LatestUpdatesLeaderboard.png"
                  />
                </Radio>
                <Radio value="Rectangle" className='p-7'>Rectangle (300 x 250)
                  <Image
                    width={300}
                    alt="NextUI hero Image"
                    src="../../public/images/ads/LatestUpdatesRectangle.png"
                  />
                </Radio>
              </RadioGroup>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Background Upload</label>
            <input className="flex h-9 w-full max-w-xl min-h-10 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-foreground file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="picture" name="picture" type="file">
            </input>
          </div>
          <Input
            type="link"
            label="Link"
            defaultValue="www.aetha.com/fiction/90062"
            description="The URL to redirect the users to when clicking the ad; or optionally the link of a custom button on the ad."
            className="max-w-xl"
          />
          <div className="w-full max-w-xl flex flex-row gap-4">
            <DatePicker
              label="Start Date"
              variant="bordered"
              showMonthAndYearPickers
            />
          </div>
          <div>
            <Select
              label="price"
              placeholder="Select an preferd plan"
              className="w-full max-w-xl"
              scrollShadowProps={{
                isEnabled: false,
              }}
            >
              <SelectSection
                title="Aetha Content Discount"
                classNames={{
                  heading: headingClasses,
                }}
              >
                <SelectItem key="1">Impressions: 280,500 Cost: $55 ($55 + 0% VAT for LK) (CPM: 0.2)</SelectItem>
                <SelectItem key="2">Impressions: 527,000 Cost: $100 ($100 + 0% VAT for LK) (CPM: 0.19)</SelectItem>
                <SelectItem key="3">3</SelectItem>
                <SelectItem key="4">4</SelectItem>
              </SelectSection>
              <SelectSection
                title="Other"
                classNames={{
                  heading: headingClasses,
                }}
              >
                <SelectItem key="5">Impressions: 140,250 Cost: $55 ($55 + 0% VAT for LK) (CPM: 0.39)</SelectItem>
                <SelectItem key="5">Impressions: 263,500 Cost: $100 ($100 + 0% VAT for LK) (CPM: 0.38)</SelectItem>
                <SelectItem key="7">3</SelectItem>
                <SelectItem key="8">4</SelectItem>
              </SelectSection>
            </Select>
          </div>
          <div className="text-sm text-blue-500">
            VAT rates are based on your last entered billing address or the country of your IP address; an accurate VAT rate will be calculated and displayed on the next page.
          </div>
          <Divider />
          <div className="flex justify-between">
            <Button shadow color="primary">Continue to Payment</Button>
            <Button shadow color="danger">Cancel</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default NewCampaign;
