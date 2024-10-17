import { Tabs, Tab } from "@nextui-org/react";
import ItemHorizontal from "../../../components/common/ItemHorizontal";
import LoadingComponent from "@/components/utility/LoadingComponent.jsx";
import NothingToDisplay from "@/components/utility/NothingToDisplay.jsx";

export default function LatestUpdates({ data,loading }) {
  return (
    <div className="flex w-full flex-col items-center">
      <Tabs aria-label="Options" radius="full" color="secondary" className="py-4">
        <Tab key="daily" title="Daily">
          <div className="flex flex-col gap-2">
            {loading ? (
                <LoadingComponent />
            ) : data.daily.length > 0 ? (
                data.daily.map((data_unit, index) => (
                    <ItemHorizontal key={index} content={data_unit} />
                ))
            ) : (
                <NothingToDisplay />
            )}
          </div>
        </Tab>
        <Tab key="weekly" title="Weekly">
        <div className="flex flex-col gap-2">
          {loading ? (
              <LoadingComponent />
          ) : data.weekly.length > 0 ? (
              data.weekly.map((data_unit, index) => (
                  <ItemHorizontal key={index} content={data_unit} />
              ))
          ) : (
              <NothingToDisplay />
          )}
          </div>
        </Tab>
        <Tab key="monthly" title="Monthly">
        <div className="flex flex-col gap-2">
          {loading ? (
              <LoadingComponent />
          ) : data.monthly.length > 0 ? (
              data.monthly.map((data_unit, index) => (
                  <ItemHorizontal key={index} content={data_unit} />
              ))
          ) : (
              <NothingToDisplay />
          )}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
