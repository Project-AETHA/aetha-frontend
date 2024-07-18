import { Tabs, Tab, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function NotesPage() {
  return (
    <div className="w-full h-full p-2 bg-foreground-300">
      <div className="bg-foreground-50 w-full h-full rounded p-2 py-4 flex flex-col gap-6">
        <div className="flex flex-col gap-0">
          <p className="font-bold text-large w-full flex justify-center">
            Notes
          </p>
          <p className="text-small w-full flex justify-center">
            Capture your thoughts in notes, for a forgotten idea is like a dream lost to the dawn.
          </p>
        </div>
        <div className="border-2 rounded-lg flex justify-between items-center p-2">
          <p>Interested in creating content ?</p>
          <Link to="#/author/notes/create">
            <Button variant="flat" color="primary">
              Create New Note +
            </Button>
          </Link>
        </div>

        <div className="flex w-full flex-col h-full">
          <Tabs aria-label="Options">
            <Tab key="available" title="Available">
              <div className="bg-foreground-50 p-2 rounded h-full flex flex-col gap-4">
                <div className="border-2 rounded-lg flex justify-between items-center p-2">
                  <p>Available</p>
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
