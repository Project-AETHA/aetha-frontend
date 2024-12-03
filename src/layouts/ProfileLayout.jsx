import "@/components/Profile.css";

export default function ProfileLayout(props) {
  return (
    <div className="flex overflow-hidden max-h-[calc(100vh-65px)]">
      <div className={`${props.class} w-full overflow-y-scroll default-scrollbar`} >
        {props.children}
      </div>
    </div>
  );
}
