import {Spinner} from "@nextui-org/react";

export default function LoadingComponent() {
  return (
      <div className={"w-full flex justify-center items-center"}>
          <Spinner />
      </div>
  );
}