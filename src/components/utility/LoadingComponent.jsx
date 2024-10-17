import {MutatingDots} from "react-loader-spinner";

export default function LoadingComponent() {
  return (
      <div className={"w-full flex justify-center items-center select-none"}>
          <MutatingDots
              visible={true}
              height="100"
              width="100"
              color="#8b5cf6"
              secondaryColor="#d946ef"
              radius="12.5"
              ariaLabel="mutating-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
          />
      </div>
  );
}