import { Tabs, Tab } from "@nextui-org/react";
import Item from "../../../components/common/ItemHorizontal";

export default function LatestUpdates({ data }) {
  return (
    <div className="flex w-full flex-col items-center">
      <Tabs aria-label="Options" radius="full" color="secondary" className="py-4">
        <Tab key="daily" title="Daily">
          <div className="flex flex-col gap-2">
          {data.daily &&
            data.daily.map((data_unit, index) => (
              <Item key={index} content={data_unit} />
            ))}
          </div>
        </Tab>
        <Tab key="weekly" title="Weekly">
        <div className="flex flex-col gap-2">
          {data.weekly &&
            data.weekly.map((data_unit, index) => (
              <Item key={index} content={data_unit} />
            ))}
          </div>
        </Tab>
        <Tab key="monthly" title="Monthly">
        <div className="flex flex-col gap-2">
          {data.monthly &&
            data.monthly.map((data_unit, index) => (
              <Item key={index} content={data_unit} />
            ))}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
