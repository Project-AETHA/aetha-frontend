import { Tabs, Tab, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function PublishesPage() {
  return (
    <div className="w-full h-full p-2 bg-foreground-300">
      <div className="bg-foreground-50 w-full h-full rounded p-2 flex flex-col gap-6">
      <div className="flex flex-col gap-0">
          <p className="font-bold text-large w-full flex justify-center">
            Poems
          </p>
          <p className="text-small w-full flex justify-center">
            Pen your verses and let your soul speak, for poetry is the heart's language, waiting to be heard.
          </p>
        </div>
        <div className="border-2 rounded-lg flex justify-between items-center p-2">
          <p>Interested in creating content ?</p>
          <Link to="/author/poems/create">
            <Button variant="flat" color="secondary" className="">
                Start Writing
            </Button>
          </Link>
        </div>

        <div className="flex w-full flex-col h-full">
          <Tabs aria-label="Options">
            <Tab key="listed" title="Listed">
              <div className="bg-foreground-50 p-2 rounded h-full flex flex-col gap-4">
                <div className="border-2 rounded-lg flex justify-between items-center p-2">
                  <p>All Publishes</p>
                </div>
              </div>
            </Tab>
            <Tab key="draft_poems" title="Drafts">
              <div className="bg-blue-500 p-2 rounded h-full">Draft Poems</div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
