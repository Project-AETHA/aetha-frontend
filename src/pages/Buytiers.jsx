import { useParams } from 'react-router-dom';
import useGet from '../hooks/useGet';
import LoadingComponent from '@/components/utility/LoadingComponent';
import NothingToDisplay from '@/components/utility/NothingToDisplay';
import ImageOnline from "@/components/common/ImageOnline.jsx";
import SubscriptionTiers from "@/pages/Writer-dashboard/Chapters/components/SubscriptionTiers.jsx";

const Selecttiers = () => {
  const novelId = useParams().novelId;

  const {
    isLoading,
    data,
    isError,
    error
  } = useGet({ url: `/api/subscription/get-tiers/${novelId}`, queryKey: `tiers_${novelId}` });

  // Conditional rendering
  if (isLoading) return <LoadingComponent />;
  if (isError) return <div className="text-black text-center">{error.message || "An error occurred"}</div>;
  if (!data || Object.keys(data).length === 0) return <NothingToDisplay />;

  return (
      <div className="p-10">
        <div className="w-full rounded-lg bg-foreground-50 pt-5">
          <div className="md:w-1/2 select-none m-auto text-primaryText text-center">
            <div className="flex justify-center">
              <div className="inline-block">
                <ImageOnline
                    className="object-cover w-[120px] h-[150px] hover:scale-105 !rounded-sm transition-transform duration-300 ease-in-out"
                    width={120}
                    height={150}
                    path={data.novel.coverImage}
                    alt={data.novel.title}
                    loading="lazy"
                />
              </div>
            </div>
            <div className="inline-block justify-center">
              <h1 className="text-xl font-semibold">{data.novel.title}</h1>
            </div>
            <div className="flex justify-center">
              <h1 className="text-md text-secondaryText">
                {data.novel.author.displayName}
              </h1>
            </div>
          </div>

          <br/>
          <br/>

          <div className="flex justify-center items-center h-96">
            <SubscriptionTiers novelId={data.novel.id} editor={false}/>
          </div>
        </div>
      </div>
  );
};

export default Selecttiers;